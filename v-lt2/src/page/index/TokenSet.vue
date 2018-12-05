<template>
	<div class="index-board">
		<div class="inner">
			<h3>令牌设置</h3>
			<div>
				 <Form :model="tokenIdent" label-position="left" :label-width="75" inline ref="tokenIdent" :rules="ruleInline">
					<FormItem label="支持占比" prop="support">
						<Input :max="100" v-model="tokenIdent.support" size="large" placeholder="请输入支持占比">
							 <span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem label="法定人数" prop="quorum">
						<Input v-model="tokenIdent.quorum" size="large" placeholder="请输入法定人数">
							<span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem label="持续时间" prop="duration">
						<Input v-model="tokenIdent.duration" size="large" placeholder="请输入持续时间">
							<span slot="append">H</span>
						</Input>
					</FormItem>
					<FormItem label="令牌名称" prop="token_name">
						<Input v-model="tokenIdent.token_name" size="large" placeholder="请输入令牌名称"></Input>
					</FormItem>
					<FormItem label="令牌符号" prop="token_symbol">
						<Input v-model="tokenIdent.token_symbol" size="large" placeholder="请输入令牌名称"></Input>
					</FormItem>
					<FormItem label="令牌数量" prop="token_number">
						<Input v-model="tokenIdent.token_number" size="large" placeholder="请输入令牌名称"></Input>
					</FormItem>
				</Form>
				<div class="btn-con">
				    <Button class="fl" type="primary" @click="backConfig()">
						<Icon type="ios-arrow-back"></Icon>
						上一步
					</Button>
					<Button class="fr" type="primary" @click="goTokenPayment('tokenIdent')">
						下一步
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		data(){
			return{
				tokenIdent: {
					support: '',
					quorum: '',
					duration: '',
					token_name:'',
					token_symbol:'',
					token_number:''
				},
				approve:{
					type: false,
					text:'当前公司信息审核中'
				},
				ruleInline:{
					support:[
						{required:true, message:'请输入支持占比', trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					],
					quorum:[
						{required:true, message:'请输入法定人数', trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					],
					duration:[
						{required:true, message:'请输入持续时间', trigger:'blur'}
					],
					token_name:[
						{required:true, message:'请输入令牌名称', trigger:'blur'}
					],
					token_symbol:[
						{required:true, message:'请输入令牌符号', trigger:'blur'}
					],
					token_number:[
						{required:true, message:'请输入令牌数量', trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					]
				}
			}
		},
		methods:{
			backConfig(){
				this.$router.push({
					path:'CompanyIdent',
					query:{
						"only":this.$route.query.only
					}
				})
			},
			goTokenPayment(name){
				//this.$router.push({path:'TokenPayment'})
				this.$refs[name].validate((valid) => {
					console.log(valid);
					if (valid) {
						
						console.log('data');
						 let data = {
							"only": this.$route.query.only,
							"support": this.tokenIdent.support,
							"quorum": this.tokenIdent.quorum,
							"duration": this.tokenIdent.duration,
							"token_name": this.tokenIdent.token_name,
							"token_symbol": this.tokenIdent.token_symbol,
							"token_number": this.tokenIdent.token_number,
						};
						this.$axios({
							method: 'post',
							url: '/index.php/cn/home/node_su/token',
							data: Qs.stringify(data)
						}).then((response) => {
							if(response.data.state == 0){
								this.$router.push({path:'TokenPayment'})
							}
						}) 
					} else {
						this.$Notice.warning({
							title: '请正确输入表单信息！',
						});
					}
				})
			}
		},
		mounted(){
			if(this.$route.query.only != "undefined"){
				let data = {
					"address": this.$store.state.web3.coinbase,
					"only": this.$route.query.only
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					let company = response.data.info.company;
					if(response.data.state == 0){
						this.tokenIdent.support = company.support
						this.tokenIdent.quorum = company.quorum
						this.tokenIdent.duration = company.duration
						this.tokenIdent.token_name = company.token_name
						this.tokenIdent.token_symbol = company.token_symbol
						this.tokenIdent.token_number = company.token_number
					}
				})
			}
			
		}
	}
	
	const validateNumber = (rule, value, callback) => {
		if (!Number.isInteger(+value)) {
			callback(new Error('请输入数字值'));
		} else {
			callback();
		}
	};
</script>
<style scoped lang="stylus">
	.index-board
		padding: 50px 100px !important;
		h3
			font-size:26px;
			margin-bottom: 40px;
		.ivu-form-item
			min-width: 321px
			&.w66
				width: 65.5%
			.ivu-form-item-label
				font-size: 16px;
		.btn-con
			bottom: 80px
			left: 100px
			width: 1000px;
			position: absolute
			overflow: hidden
			margin-top: 50px;
			.fl
				float: left
			.fr
				float: right
</style>
<style>
	.ivu-form-label-left .ivu-form-item-label{
		font-size: 14px;
		color:#000;
	}
</style>