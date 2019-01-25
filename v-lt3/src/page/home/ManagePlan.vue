<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">管理期权奖励</div>
			<div class="b_func">
				<div class="searchForm">
					 <Select v-model="thisPlan" style="width:200px" placeholder="请选择期权计划" size="large" @on-change="goPlanList">
				        <Option v-for="(item,index) in planList" :value="item.id" :key="index">{{ item.label }}</Option>
				    </Select>
				</div>
				<div class="addPlan">
					<Button type="primary" :disabled="disabled" size="large" icon="md-barcode" @click="addUser">添加激励对象</Button>
				</div>
			</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="18">
					<Card :bordered="false" class="capTable">
						<p slot="title" class="tipMessage">期权奖励列表<!--<Icon type="ios-help-circle-outline" style="position: relative;top: -1px;cursor: pointer;" color="#2d8cf0" size="22" @click="helpBox = !helpBox"/>--></p>
						<div class="tabBoard">
							<Table height="700" :loading="loading" :border="true" :stripe="true" :columns="planTabList.rows" :data="planTabList.cols"></Table>
						</div>
					</Card>
				</Col>
				<Col span="6">
					<Card :bordered="false" class="tokenBoard">
						<p slot="title">期权数据详情</p>
						<div class="msgBoard">
							<p v-for="item in msgList">
								<b>{{item.title}}</b>
								{{item.vals}}
							</p>
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
				thisPlan:'',
				loading:false,
				planList:[],
				disabled:true,
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
				planTabList:{
					rows:[
						{
							title: '激励对象',
							key: 'name',
							align:'center'
						},
						{
							title: '期权授予量',
							key: 'allNum',
							align:'center'
						},
						{
							title: '成熟期权',
							key: 'getNum',
							align:'center'
						},
						{
							title: '已行权期权',
							key: 'endNum',
							align:'center'
						},
						{
							title: '等待期权',
							key: 'startNum',
							align:'center'
						},
						{
							title: '到期日',
							key: 'overDate',
							align:'center'
						},
						{
							title: '状态',
							key: 'type',
							align:'center'
						}
					],
					cols:[]
				},
				msgList:[
					{
						title:'机制名称',
						vals:''
					},
					{
						title:'授权周期',
						vals:''
					},
					{
						title:'创建日期',
						vals:''
					},
					{
						title:'期权池总量',
						vals:''
					},
					{
						title:'期权池剩余',
						vals:''
					}
				]
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			addUser(){
				this.$router.push({
					path:'createUser',
					query:{
						"only":this.$route.query.only,
						"planId":this.thisPlan
					}
				})
			},
			goPlanList(val){
				this.disabled = false
				let data = {
					"only": this.$route.query.only,
					"option":val
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/excitation',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let planListDetail = response.data.info
						let planMsg = response.data.optioninfo
						let arr = []
						for(let i=0;i<planListDetail.length;i++){
							arr.push({
								name: planListDetail[i].surname + planListDetail[i].name ,
								allNum:planListDetail[i].token_number,
								getNum:planListDetail[i].state_a,
								endNum:planListDetail[i].state_b,
								startNum:planListDetail[i].state_c,
								overDate:this.returnTypeDate(planListDetail[i].expire_time == 0 ? '无':planListDetail[i].expire_time),
								type:this.returnType(planListDetail[i].type),
							})
						}
						this.planTabList.cols = arr
						this.msgList[0].vals = planMsg.name
						this.msgList[1].vals = planMsg.total_month + this.returnTypeDate(planMsg.grant_type)
						this.msgList[2].vals = mutil.timestampToTime(planMsg.option_time)
						this.msgList[3].vals = planMsg.token_number + ' ' +planMsg.token_symbol
						this.msgList[4].vals = (planMsg.token_number - planMsg.token_grant) + ' ' +planMsg.token_symbol
					}
				})
			},
			refreshPlanList(){
				let data = {
					"only": this.$route.query.only
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/option',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let planListDetail = response.data.info
						this.planList = []
						if(planListDetail.length > 0){
							for(let i=0;i<planListDetail.length;i++){
								this.planList.push({
									id:planListDetail[i].id,
									label:planListDetail[i].name
								})
							}
							if(this.$route.query.planId != null && this.$route.query.planId != undefined){
								this.thisPlan = this.$route.query.planId
								this.goPlanList(this.thisPlan)
							}
						}
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
			},
			returnType(msg){
				switch(msg){
					case '0':
						msg = '未操作'
						break;
					case '1':
						msg = '同意'
						break;
					case '2':
						msg = '否决'
						break;
				}
				return msg
			}
		},
		created(){
			this.$emit('menuActiveName', "14-2")
			this.$emit('menuOpenNames', "14")
			this.refreshPlanList()
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
		.b_func
			flexs()
			flex-basis: 400px
			.searchForm
				flexs()
				.radio
					margin-right: 30px
				button:hover
					color: #2d8cf0
					
	.capTable
		min-height: 300px
		background: white
		margin-right: 30px;
		.tabBoard
			.ivu-table-wrapper
				border-top: 0;
				.ivu-table:after
					background-color: transparent
				
	
	.tokenBoard,.userBoard
		.msgBoard
			padding: 14px 16px;
			p
				margin-top: 14px
				span
					display:block;
					width:100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				b
					margin-right: 16px
				&:first-child
					margin-top: 0;
	
	.tipMsg
		text-align: left;
</style>

