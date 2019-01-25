<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">我的期权奖励</div>
			<Button type="primary" size="large" icon="md-barcode" @click="myPlanList">返回</Button>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="24">
					<Card :bordered="false" class="capTable">
						<p slot="title" class="tipMessage">期权奖励列表</p>
						<div class="tabBoard">
							<Table  :loading="loading" height="700" :border="true" :stripe="true" :columns="planTabList.rows" :data="planTabList.cols">
								 <template slot-scope="{ row, index }" slot="types">
						            <Button class="tabBtn" v-if="row.type == 1" type="primary" size="small" @click="showDrawer(row,index)">签名</Button>
						            <span v-else>{{row.types}}</span>
						        </template>
							</Table>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		<Drawer title="执行通知" width="400" :closable="false" v-model="isAddDrawer" class="newVoteBoard">
			<div>
				<h3>期权执行通知</h3>
				<h4>LittlebeeX Pte. Ltd </h4>
				<p>
					1.根据贵方于{{approveDetail.getDate}}授予的授权书，本人在此对在LittlebeeX有限公司的股本中按照{{approveDetail.getPay}}美元的执行价格，认购{{approveDetail.getToken}} 个公司股权Token，总计{{approveDetail.getAllPay}}美元。
				</p>
				<p>
					2.我希望通过电汇的方式支付1美元的执行价价，并向公司提供电汇的确认
				</p>
				<p>
					3.本人谨此声明，本人为本人认购上述普通股，而非以他人名义认购。
				</p>
				<p>
					4.本人承认本人将继续遵守《{{approveDetail.planName}}》及《股东协议》中有关该期权的规定。
				</p>
				<p>名字: <b>{{approveDetail.name}}</b></p>
				<div class="btn">
					<Button type="success" long @click="approvePlan(approveDetail.index)">签名</Button>
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
				thisPlan:'1',
				loading: true,
				isAddDrawer:false,
				approveDetail:{
					name:'',
					planName: '',
					getToken:'',
					getPay:'',
					getAllPay:'',
					getDate:'',
					index:0
				},
				planTabList:{
					rows:[
						{
							title: '到期日',
							key: 'overDate',
							align:'center'
						},
						{
							title: '执行周期',
							key: 'cycle',
							align:'center'
						},
						{
							title: '数量',
							key: 'num',
							align:'center'
						},
						{
							title: 'TOKEN市价(USD)',
							key: 'getNum',
							align:'center'
						},
						{
							title: 'TOKEN执行价格(USD)',
							key: 'endNum',
							align:'center'
						},
						{
							title: '状态',
							key: 'types',
							slot: 'types',
							align:'center'
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
			myPlanList(){
				this.$router.push({
					path:'myPlan',
					query:{
						"only":this.$route.query.only
					}
				})
			},
			refreshPlanList(){
				let data = {
					"only": this.$route.query.only,
					"address":this.Address,
					"excitation":this.$route.query.planId
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home//node_se/plan',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let planListDetail = response.data.info
						this.planList = []
						if(planListDetail.length > 0){
							let arr = []
							for(let i=0;i<planListDetail.length;i++){
								let cycle = i == 0 ? '首个期权执行日' : planListDetail[i].cycle + '执行日'
								arr.push({
									id:planListDetail[i].id,
									cycle:this.returnTypeDate(cycle),
									num:planListDetail[i].token_number,
									getNum:planListDetail[i].current_money,
									endNum:planListDetail[i].exercise_money,
									overDate:mutil.timestampToTime(planListDetail[i].expire_time),
									type:planListDetail[i].state,
									types:this.returnType(planListDetail[i].state)
								})
							}
							this.planTabList.cols = arr
						}
					}
				})
			},
			showDrawer(row,index){
				this.isAddDrawer = true
				this.approveDetail.getToken = row.num,
				this.approveDetail.getPay = row.endNum,
				this.approveDetail.getAllPay = row.num * row.endNum,
				this.approveDetail.getDate = row.getDate
				this.approveDetail.index = index
				
			},
			approvePlan(index){
				let data = {
					"only": this.$route.query.only,
					"address":this.Address,
					"plan":this.planTabList.cols[index].id
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_su/user_plan',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.$Notice.success({
							title: '操作成功！'
						});
					}
					this.isAddDrawer = false
					this.planTabList.cols[index].type = 2
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
						let userMsg = response.data.chaininfo
						let arr = []
						for(let i=0;i<planList.length;i++){
							if(planList[i].id == this.$route.query.planId){
								this.approveDetail.name = userMsg.surname + userMsg.name
								this.approveDetail.planName = planList[i].name
							}
						}
					}
				})
			},
			returnType(msg){
				switch(msg){
					case '0':
						msg = '等待'
						break;
					case '1':
						msg = '可执行'
						break;
					case '2':
						msg = '成功'
						break;
					case '3':
						msg = '失败'
						break;
				}
				return msg
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
			this.loading = false
			this.refreshPlanList()
			this.goPlanList()
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
	.newVoteBoard .btn span{
		font-size:14px
	}
</style>
<style scoped lang="stylus">
	flexs()
		display:flex
		align-items: center
		justify-content: space-between
		
	.bread
		flexs()
	
	.tabBtn
		padding: 5px 15px
	
	.newVoteBoard
		h3,h4
			text-align: center
		h3
			font-size:16px
		h4
			font-size:14px
			font-weight: 400
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


