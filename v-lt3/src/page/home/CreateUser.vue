<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">添加激励对象</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="24">
					<Card :bordered="false" class="capTable">
						<p slot="title" class="tipMessage">员工期权计划授权<Icon type="ios-help-circle-outline" color="#2d8cf0" size="22" @click="helpBox = !helpBox"/></p>
						<div class="fromBoard">
							<Form :model="plan" label-position="left" :label-width="140" inline ref="plan" :rules="ruleInline">
								<FormItem label="选择计划" prop="plan">
									<Select v-model="plan.plan">
										<Option v-for="item in planList" size="large" :value="item.value" :key="item.value">{{ item.label }}</Option>
									</Select>
								</FormItem><br/>
								<FormItem label="创建日期" prop="date">
									<DatePicker style="width:100%" type="date" size="large"  v-model="plan.date"  ></DatePicker>
								</FormItem><br/>
								<FormItem label="员工名称" prop="name">
									<Select v-model="plan.name" size="large">
										<Option v-for="(item,index) in userList" :value="item.address" :key="index" :label="item.address">
											<span>{{ item.address }}</span>
											<span style="float:right;color:#ccc">{{item.name}}</span>
										</Option>
									</Select> 
								</FormItem><br/>
								<FormItem label="授权数量" prop="num">
									<Input v-model="plan.num" size="large" ></Input>
								</FormItem><br/>
								<FormItem label="行使价格" prop="pay">
									<Input v-model="plan.pay" size="large" >
										 <span slot="append">USD$</span>
									</Input>
								</FormItem><br/>
							</Form>
							<div class="btn-con">
								<Button type="primary" @click="upCreatePlanUser">发起决议</Button>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		 <Modal
			v-model="helpBox"
			title="员工期权计划授权书"
			class-name="vertical-center-modal">
			<p>2019年1月16日</p>
			<p>亲爱的<b>【员工名称】</b></p>
			<p>感谢您成为LittleBeeX Pte Ltd的员工。
			        在本公司董事会的指示下，本公司已根据名为<b>【选择计划】</b>
			        的公司期权计划向您授予<b>【授权数量】</b>个公司股权代币，约占公司股权的 * %。
			        该期权中每个代币的的行使价格为<b>【行使价格】</b>美元。不论公司未来的股份价值如何，
			        期权行使价格应保持不变。
			</p>
			<p>
				你明白计划规则内所述的条款及条件规管该等股票期权，不论该等股票期权在本授权书日期前是否已获批。
				本规则将取代您与本公司之间关于期权的任何事先的理解或协议，无论是书面的还是其他形式的。
			</p>
			<p>
				期权行使后可转换为公司的可赎回股份。请注意，授予的选择权不是雇佣合同的一部分。
				如果您同意本公司按照本函所列条款及名为<b>【选择计划】</b>“普通员工期权计划”的期权方案，
				请用你的私钥签名，以表示您已接受本期权激励计划。
			</p>
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
	export default {
		props:['BreadTitle'],
		data(){
			return {
				helpBox:false,
				plan: {
					date:'',
					name: '',
					num:'',
					plan:'',
					pay:''
				},
				userList:[],
				planList:[],
				ruleInline: {
					name: [
						{ required: true, message: '请选择员工名称', trigger: 'change' }
					],
                    num: [
                        { required: true, message: '请输入股权量', trigger: 'blur' },
                        {validator: validateVal, trigger: 'blur'}
                    ],
					plan: [
                        { required: true, message: '请选择计划', trigger: 'blur' }
                    ],
					pay: [
                        { required: true, message: '请输入行使价格', trigger: 'blur' },
                        {validator: validateVal, trigger: 'blur'}
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择授权日期', trigger: 'change' }
                    ]
				}
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods:{
			upCreatePlanUser(){
				this.$refs['plan'].validate((valid) => {
					if (valid) {
						let thisPlanCode = ( Number(this.plan.num) / Number(this.AllToken) * 100) + '%'
						let data = {
							"address":this.Address,
							"only": this.$route.query.only,
							"option":this.plan.plan,
							"target":this.plan.name,
							"token_number":this.plan.num,
							"exercise_money":this.plan.pay,
							"content":"本公司已根据名为["+ this.searchPlanList(this.plan.plan) +"]的公司期权计划向["+ this.searchUserList(this.plan.name) +"]授予行使价格为"+ this.plan.pay +"美元的公司股权代币"+ this.plan.num +"个。"
						};
						this.$axios({ 
							method: 'post',
							url: '/index.php/cn/home/node_su/excitation',
							data: Qs.stringify(data)
						}).then((response) => {
							if(response.data.state == 0){
								this.$Notice.success({
									title: '创建成功！'
								});
								this.$router.push({
									path:'managePlan',
									query:{
										"only":this.$route.query.only,
										"planId":this.plan.plan
									}
								})
							}
						}) 
					} else {
						 this.$Notice.warning({
							title: '请填写完整的员工期权机制信息'
						 });
					}
				})
			},
			createUserList(){
				let data = {
					"only":this.$route.query.only,
					"option":this.$route.query.planId
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/excitation_y',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let userList = response.data.info
						this.userList = []
						for(let i=0;i<userList.length;i++){
							this.userList.push({
								name:userList[i].surname + userList[i].name,
								address:userList[i].address,
							})
						}
						return true;
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
									"label":planListDetail[i].name,
									"value":planListDetail[i].id
								})
							}
						}
					}
				})
			},
			searchPlanList(ids){
				for(let i=0;i<this.planList.length;i++){
					if(this.planList[i].id = ids){
						return this.planList[i].label
					}
				}
			},
			searchUserList(addr){
				for(let i=0;i<this.userList.length;i++){
					if(this.userList[i].address = addr){
						return this.userList[i].name
					}
				}
			}
		},
		created(){
			_this = this
			this.$emit('menuActiveName', "14-2")
			this.$emit('menuOpenNames', "14")
			this.refreshPlanList()
			this.createUserList()
			this.plan.plan = this.$route.query.planId
		}
	}
	let _this ;
	const validateNumber = (rule, value, callback) => {
		if (!Number.isInteger(+value)) {
			callback(new Error(_this.$t('indeToken.errorMsg2')));
		} else {
			if(value > 100 || value <0){
				callback(new Error(_this.$t('indeToken.errorMsg3')));
			}else{
				callback();
			}
		}
	};
	const validateVal = (rule, value, callback) => {
		if (!Number.isInteger(+value)) {
			callback(new Error(_this.$t('indeToken.errorMsg2')));
		} else {
			callback();
		}
	};
</script>
<style scoped lang="stylus">
	.bread
		display:flex;
		display:-webkit-flex;
		justify-content: space-between;
		align-items: center;
	
	.tipMsg
		text-align: left;
	
	.capTable
		min-height: 300px
		background: white
		.fromBoard
			padding: 50px 16px;
			.ivu-form-item
				min-width: 600px
		.btn-con
			margin-top: 50px;
			button
				font-size: 16px
				padding: 8px 20px 
				margin-top: 30px;
				min-width: 150px;
		
</style>
<style>
	.fromBoard .ivu-form .ivu-form-item-label{
			font-size: 14px;
			font-weight: 700;
	}
	.tipMessage{
		overflow:visible !important;
	}
	.tipMessage i{
		position: relative;
	    top: -2px;
	    left: 5px;
	    cursor: pointer;
	}		
    .vertical-center-modal .ivu-modal b{
        display: inline-block;
    }
</style>