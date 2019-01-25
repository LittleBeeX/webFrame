<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">我的期权奖励</div>
			<!--<Button type="primary" size="large" icon="md-barcode" @click="timeList">时间表</Button>-->
		</Breadcrumb>
		<div>
			<Row>
				<Col span="24">
					<Card :bordered="false" class="capTable">
						<p slot="title" class="tipMessage">期权奖励列表</p>
						<div class="tabBoard">
							<Table height="700" :loading="loading" :border="true" :stripe="true" :columns="planTabList.rows" :data="planTabList.cols">
								<template slot-scope="{row , index}" slot="name">
									{{row.name}}
									<Icon type="ios-help-circle-outline" class="help" size="22" @click="showHelp(row)"/>
								</template>
						        <template slot-scope="{ row, index }" slot="types">
						            <Button class="tabBtn" v-if="row.types == 0" type="primary" size="small" style="margin-right: 5px" @click="showDrawer(row,index)">同意</Button>
						            <Button class="tabBtn" v-if="row.types == 0" type="error" size="small" @click="cancelPlan(index)">取消</Button>
						            <Button class="tabBtn" v-if="row.types == 1" type="primary" size="small" @click="timeList(row.id)">时间表</Button>
						            <span v-if="row.types == 2">已取消</span>
						        </template>
							</Table>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		 <Modal
			v-model="helpBox"
			title="期权机制描述"
			class-name="vertical-center-modal">
			<p>本公司计划于<b>{{planDetail.date}}</b>创建名为<b>{{planDetail.name}}</b>的期权激励计划（ESOP），该ESOP将预留共计<b>{{planDetail.token}}</b> {{planDetail.sysbol}}，约占公司股权的{{planDetail.tokens}}作为期权池。</p>
			<p>该期权激励机制下，员工将会在第一个到期日被授予<b>{{planDetail.firstT}}</b>的股份，其余的股份须于首个到期日期起按<b>{{planDetail.date}}</b> 授予，总计<b>{{planDetail.size}}</b> 个<b>{{planDetail.dateType}}</b>。</p>
			
			<div slot="footer" class="tipMsg">
				<p>期权发行条款:</p>
				<p>期权严格按照既定计划发放。</p>
				<p>如果员工不再受雇于公司,任何未成熟期权将自动失效，并放回公司期权池。</p>
			</div>
		</Modal>
		<Drawer title="授权" width="400" :closable="false" v-model="isAddDrawer" class="newVoteBoard">
			<div>
				<h3>员工期权计划授权书</h3>
				<p>
					亲爱的{{approveDetail.name}},
				</p>
				<p>
					感谢您成为LittleBee Pte Ltd的员工。在本公司董事会的指示下，本公司已根据名为“{{approveDetail.planName}}”的公司期权计划向您授予{{approveDetail.getToken}}个公司股权代币，约为{{approveDetail.getTokens}}总股权。该期权的行使价格为{{approveDetail.getPay}}美元。不论公司未来的股份价值如何，期权行使价格应保持不变。
				</p>
				<p>
					你明白计划规则内所述的条款及条件规管该等股票期权，不论该等股票期权在本授权书日期前是否已获批。本规则将取代您与本公司之间关于期权的任何事先的理解或协议，无论是书面的还是其他形式的。
				</p>
				<p>
					期权行使后可转换为公司的可赎回股份。请注意，授予的选择权不是雇佣合同的一部分。如果您同意本公司按照本函所列条款及名为“{{approveDetail.planName}}”的期权方案，请用你的私钥签名，以表示您已接受本期权激励计划。
				</p>
				<p>{{approveDetail.getDate}}</p>
				<div class="btn">
					<Button type="success" long @click="agreePlan(approveDetail.index)">签名</Button>
				</div>
			</div>
		</Drawer>
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	import mutil from '@/util/mutil'
	export default {
		data(){
			return{
				helpBox:false,
				isAddDrawer:false,
				loading:false,
				planDetail:{
					name:'【期权激励计划名称】',
					date:'【创建时间】',
					token:'【激励计划总Token数】',
					tokens:'【占比】',
					firstT:'【首次授权量】',
					dateType:'【时间类型】',
					size:'【周期数】',
					sysbol:'【TOKEN符号】'
				},
				approveDetail:{
					name:'【姓名】',
					planName: '【期权激励计划名称】',
					getToken:'【期权授予量】',
					getTokenS:'【授予占比】',
					getPay:'【期权行使价格】',
					getDate:'【期权行使价格】',
					index:0
				},
				planTabList:{
					rows:[
						{
							title: '机制名称',
							key: 'name',
							slot: 'name',
							align:'center'
						},
						{
							title: '期权授予量',
							key: 'allNum',
							align:'center'
						},
						{
							title: '授予占比',
							key: 'proportion',
							align:'center'
						},
						{
							title: '期权行使价格',
							key: 'getPay',
							align:'center'
						},
						{
							title: '授权日期',
							key: 'getDate',
							align:'center'
						},
						{
							title: '状态',
							key: 'types',
						 	slot: 'types',
							align:'center',
						}
					],
					cols:[]
				}
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			timeList(planId){
				this.$router.push({
					path:'timePage',
					query:{
						"only":this.$route.query.only,
						"planId":planId
					}
				})
			},
			showHelp(row){
				this.helpBox = true
				this.planDetail.name = row.name
				this.planDetail.date = row.getDate
				this.planDetail.token = row.token
				this.planDetail.tokens = row.proportion
				this.planDetail.firstT = row.firstT
				this.planDetail.dateType = row.dateType
				this.planDetail.size = row.size
				this.planDetail.sysbol = row.sysbol
			},
			showDrawer(row,index){
				this.isAddDrawer = true
				this.approveDetail.name = '爱丽丝',
				this.approveDetail.planName = row.name,
				this.approveDetail.getToken = row.allNum,
				this.approveDetail.getTokenS = row.proportion,
				this.approveDetail.getPay = row.getPay,
				this.approveDetail.getDate = row.getDate
				this.approveDetail.index = index
			},
			agreePlan(index){
				let id = this.planTabList.cols[index].id
				this.userChange(id,1,index)
			},
			cancelPlan(index){
				let id = this.planTabList.cols[index].id
				this.userChange(id,2,index)
			},
			userChange(planId,type,index){
				console.log(planId,type)
				let data = {
					"only": this.$route.query.only,
					"address":this.Address,
					"excitation":planId,
					"type":type
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_su/excitation_if',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.$Notice.success({
							title: '操作成功！'
						});
					}
					this.isAddDrawer = false
					this.planTabList.cols[index].types = 1
				})
			},
			goPlanList(){
				this.disabled = false
				let data = {
					"only": this.$route.query.only,
					"address":this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/option_user',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let planList = response.data.info
						let tokenMsg = response.data.companyinfo
						let arr = []
						for(let i=0;i<planList.length;i++){
							console.log(planList[i].type)
							arr.push({
								id:planList[i].id,
								name:planList[i].name,
								allNum:planList[i].token_number,
								token:planList[i].token,
								proportion: parseInt(planList[i].token_number) / parseInt(tokenMsg.token_number) * 100 + '%' ,
								getPay:planList[i].exercise_money,
								getDate:mutil.timestampToTime(planList[i].option_time),
								types:planList[i].type,
								dateType:this.returnTypeDate(planList[i].grant_type),
								size:planList[i].total_month,
								firstT:planList[i].grant_shares + '%',
								sysbol:tokenMsg.token_symbol
							})
						}
						this.planTabList.cols = arr
					}
				})
			},
			returnTypeDate(msg){
				switch(msg){
					case '1':
						msg = '月'
						break;
					case '2':
						msg = '季'
						break;
					case '3':
						msg = '半年'
						break;
					case '4':
						msg = '年'
						break;
				}
				return msg
			}
			
		},
		created(){
			this.$emit('menuActiveName', "14-3")
			this.$emit('menuOpenNames', "14")
			this.goPlanList()
			this.loading = false	
		}
	}
</script>
<style>
	.warningProgress .ivu-progress-bg{
		background-color: #ed4014
	}
	.tooltip-msg{
		width: 300px	
	}
	.ivu-tooltip{width: 100%;}
</style>
<style scoped lang="stylus">
	flexs()
		display:flex
		align-items: center
		justify-content: space-between
		
	.bread
		flexs()
	
	.tipMsg
		text-align: left;
	
	.tabBoard
		.help
			position: relative
			cursor:pointer
			top: -2px
			color: #2d8cf0	
		.tabBtn
			padding: 5px 15px
		
	.newVoteBoard
		h3,h4
			text-align: center
		
		h3
			font-size:16px
			margin-bottom: 30px
			
		p
			line-height:22px
			margin-bottom: 15px
			font-size:14px
		.btn
			margin-top: 50px
			span
				font-size: 14px	
</style>

