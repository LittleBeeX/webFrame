<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">创建期权奖励</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="24">
					<Card :bordered="false" class="capTable">
						<p slot="title" class="tipMessage">创建员工期权机制<Icon type="ios-help-circle-outline" color="#2d8cf0" size="22" @click="helpBox = !helpBox"/></p>
						<div class="fromBoard">
							<Form :model="plan" label-position="left" :label-width="140" inline ref="plan" :rules="ruleInline">
								<FormItem label="创建日期" prop="date">
									<DatePicker style="width:100%" type="date" size="large"  v-model="plan.date"  ></DatePicker>
								</FormItem><br/>
								<FormItem label="机制名称" prop="name">
									<Input v-model="plan.name" size="large" ></Input>
								</FormItem><br/>
								<FormItem label="股权量" prop="num">
									<Input v-model="plan.num" size="large" ></Input>
								</FormItem><br/>
								<FormItem label="首次授权占比" prop="firstNum">
									<Input v-model="plan.firstNum" size="large">
										<span slot="append">%</span>
									</Input>
								</FormItem><br/>
								<FormItem label="时间单位" prop="unit">
									<Select v-model="plan.unit" size="large">
										<Option v-for="item in dateUnit" :value="item.value" :key="item.value">{{ item.label }}</Option>
									</Select>
								</FormItem><br/>
								<FormItem label="授权周期" prop="size">
									<Input v-model="plan.size" size="large" ></Input>
								</FormItem>
							</Form>
							<div class="btn-con">
								<Button type="primary" @click="upCreatePlan">发起决议</Button>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		 <Modal
			v-model="helpBox"
			title="期权机制描述"
			class-name="vertical-center-modal">
			<p>本公司计划于<b>【创建日期】</b>创建名为<b>【机制名称】</b>的期权激励计划（ESOP），该ESOP将预留共计<b>【股权量】</b>QT，约占公司股权的 * 作为期权池。</p>
			<p>该期权激励机制下，员工将会在第一个到期日被授予<b>【首次授权占比】</b>的股份，其余的股份须于首个到期日期起按<b>【时间单位】</b> 授予，总计<b>【授权周期】</b> 个月。</p>
			
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
				AllToken:0,
				plan: {
					date:'',
					name: '',
					num:'',
					firstNum:'',
					unit:'',
					size:''
				},
				dateUnit:[
					{
						value:'1',
						label:'月'
					},
					{
						value:'2',
						label:'季'
					},
					{
						value:'3',
						label:'半年'
					},
					{
						value:'4',
						label:'年'
					}
				],
				ruleInline: {
					name: [
						{required: true, message: '请输入机制名称', trigger: 'blur' }
					],
                    num: [
                        {required: true, message: '请输入股权量', trigger: 'blur' },
                        {validator: validateVal, trigger: 'blur'}
                    ],
					firstNum: [
                        {required: true, message: '请输入首次授权占比', trigger: 'blur' },
                        {validator: validateNumber, trigger: 'blur'}
                    ],
					date: [
                        {required: true, type: 'date', message: '请选择授权日期', trigger: 'change' }
                    ],
                    unit: [
                        {required: true, message: '请选择授权单位', trigger: 'change' }
                    ], 
					size: [
                        {required: true, message: '请输入授权周期', trigger: 'blur' },
                        {validator: validateVal, trigger: 'blur'}
                    ],
				}
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods:{
			upCreatePlan(){
				this.$refs['plan'].validate((valid) => {
					if (valid) {
						
						let thisPlanCode = ( Number(this.plan.num) / Number(this.AllToken) * 100) + '%'
						let data = {
							"address":this.Address,
							"only": this.$route.query.only,
							"option_time":this.plan.date,
							"name":this.plan.name,
							"token_number":this.plan.num,
							"grant_shares":this.plan.firstNum,
							"grant_type":this.plan.unit,
							"total_month":this.plan.size,
							"content":"本公司计划于创建名为"+ this.plan.name +"的期权激励计划（ESOP），该ESOP将预留共计"+ this.plan.num +"QT，约占公司股权的"+ thisPlanCode +"作为期权池。该期权激励机制下，员工将会在第一个到期日被授予"+ this.plan.firstNum +"%的股份，其余的股份须于首个到期日期起按"+ this.returnTypeDate(this.plan.unit) +"授予，总计"+ this.plan.size +"个"+ this.returnTypeDate(this.plan.unit) +"。"
						};
						this.$axios({ 
							method: 'post',
							url: '/index.php/cn/home/node_su/option',
							data: Qs.stringify(data)
						}).then((response) => {
							if(response.data.state == 0){
								this.$Notice.success({
									title: '创建成功！'
								});
								this.$router.push({
									path:'stockholder',
									query:{
										"only":this.$route.query.only
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
			getTokenAll(){
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company',
					data: Qs.stringify({"only": this.$route.query.only})
				}).then((response) => {
					if (response.data.state == 0) {
						this.AllToken = response.data.info.token_number
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
			_this = this
			this.$emit('menuActiveName', "14-1")
			this.$emit('menuOpenNames', "14")
			this.getTokenAll()
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
</style>