<template>
	<div class="index-board">
		<div class="inner">
			<h3>公司信息认证</h3>
			<div>
				 <Form :model="companyIdent" label-position="left" :label-width="75" inline ref="companyIdent" :rules="ruleInline">
					<FormItem label="公司名称" prop="Name" class=" w66">
						<Input v-model="companyIdent.Name" size="large" placeholder="请输入公司名称" :readonly="companyIsIdint"></Input>
					</FormItem><br/>
					<FormItem label="注册号码" prop="Number">
						<Input v-model="companyIdent.Number" size="large" placeholder="请输入注册号码" :readonly="companyIsIdint"></Input>
					</FormItem>
					<FormItem label="注册地点" prop="Site">
						<Input v-model="companyIdent.Site" size="large" placeholder="请输入注册地点" :readonly="companyIsIdint"></Input>
					</FormItem>
					<FormItem label="注册资本" prop="Fund"  >
						<Input v-model="companyIdent.Fund" size="large" placeholder="请输入注册资本" :readonly="companyIsIdint"></Input>
					</FormItem>
					<FormItem label="成立日期" prop="BirDate" >
						<DatePicker style="width:100%" size="large" type="date" placeholder="成立日期" v-model="companyIdent.BirDate" :readonly="companyIsIdint"></DatePicker>
					</FormItem>
					<FormItem label="组织名称" prop="IdentCode">
						<Input  placeholder="企业组织名称" size="large" v-model="companyIdent.IdentCode" :readonly="companyIsIdint">
							 <Button slot="append" @click="isIdentCode(companyIdent.IdentCode)">
								 <Icon type="ios-search" size="16"/>
							 </Button>
						</Input>
					</FormItem>
				</Form>
				<Alert :type="companyType.type" v-if="companyType.isShow">{{companyType.setMes}}</Alert>
				<div class="btn-con" v-else>
				    <Button class="fl" type="primary" @click="backUser()">
						<Icon type="ios-arrow-back"></Icon>
						上一步
					</Button>
					<Button class="fr" type="primary" @click="goTokenSet('companyIdent')">
						下一步
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
				<div class="btn-con" v-if="companyType.type == 'error'">
					<Button class="fr" type="primary" @click="goTokenSet('companyIdent')" >
						提交
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	export default {
		data(){
			return{
				companyIdent: {
                    Name: '',
                    Number: '',
                    Site: '',
					Fund:'',
					BirDate:'',
					IdentCode:''
                },
				companyType:{
					isShow: false,
					setMes: '',
					type:'info'
				},
				companyIsIdint: false,
				ruleInline:{
					Name:[
						{required:true, message:'请输入公司名称', trigger:'blur'}
					],
					Number:[
						{required:true, message:'请输入注册号码', trigger:'blur'}
					],
					Site:[
						{required:true, message:'请输入注册地点', trigger:'blur'}
					],
					Fund:[
						{required:true, message:'请输入注册资本', trigger:'blur'}
					],
					BirDate:[
						{required:true, message:'请选择成立日期', trigger:'change', type:'date'}
					],
					IdentCode:[
						{required:true, message:'请输入组织名称', trigger:'blur'}
					]
				}
			}
		},
		computed: mapState({
			Address: state => state.web3.coinbase
		}),
		methods:{
			backUser(){
				let onlyMsg = this.$route.query.only != undefined ? this.$route.query.only : null
				this.$router.push({
					path:'UserIdent',
					query:{
						"only":onlyMsg
					}
				})
			},
			goTokenSet(name){
				this.$refs[name].validate((valid) => {
					if (valid) {
						let data = {
							"code":this.companyIdent.Number,
							"name":this.companyIdent.Name,
							"address":this.companyIdent.Site,
							"capital":this.companyIdent.Fund,
							"only":this.companyIdent.IdentCode,
							"establish":this.companyIdent.BirDate,
						};
						this.$axios({
							method: 'post',
							url: '/index.php/cn/home/node_su/company_tijiao',
							data: Qs.stringify(data)
						}).then((response) => {
							if(response.data.state == 0){
								if(this.companyType.type == 'error'){
									this.$router.push({
										path:'/'
									})
								}else{
									this.$router.push({
										path:'TokenSet',
										query:{
											"only":this.companyIdent.IdentCode
										}
									})
								}
							}else{
								this.$Notice.warning({
									title: '该组织名称已被占用！',
								});
							}
						})
					} else {
						this.$Notice.warning({
							title: '请正确输入表单信息！',
						});
					}
				})
			},
			isIdentCode(code){
				if(this.companyIdent.IdentCode != ''){
					if(this.companyIdent.IdentCode != this.$route.query.only){
						let data = {
							"address": this.Address,
							"only": this.companyIdent.IdentCode
						};
						this.$axios({
							method: 'post',
							url: '/index.php/cn/home/node_se/company_individual',
							data: Qs.stringify(data)
						}).then((response) => {
							let state = response.data.state;
							if(state == 2){
								this.$Notice.info({
									title: '该组织名称暂无占用！'
								});
							}else{
								this.$Notice.warning({
									title: '该组织名称已被占用！'
								});
							}
						})
					}else{
						this.$Notice.info({
							title: '该组织名称暂无占用！'
						});
					}
				}else{
					this.$Notice.warning({
						title: '组织名称不能为空！'
					});
				}
			}
		},
		mounted(){
			if(this.$route.query.only != undefined){
				let data = {
					"address": this.Address,
					"only": this.$route.query.only
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					let company = response.data.info.company;
					if(response.data.state == 0){
						this.companyIdent.Number = company.code
						this.companyIdent.Name = company.name
						this.companyIdent.Site = company.address
						this.companyIdent.BirDate = company.establish
						this.companyIdent.Fund = company.capital
						this.companyIdent.IdentCode = company.only
					}
					if(company.state == 1){
						this.companyType.isShow = true
						this.companyType.setMes = '公司认证正在加速审核中，请耐心等耐！'
						this.companyIsIdint = true
					}else if(company.state == 3){
						this.companyType.isShow = true
						this.companyType.type = 'error'
						this.companyType.setMes = company.remarks
						this.companyIsIdint = false
					}else if(company.state == 2){
						this.companyType.isShow = true
						this.companyType.setMes = '公司认证审核已经通过！'
						this.companyIsIdint = true
					}	
				})
			}
			
		}
	}
</script>

<style scoped lang="stylus">
	.index-board
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
		.hint
			font-size: 14px;
			label
				display: inline-block;
				width: 100px;
</style>
<style>
	.ivu-form-label-left .ivu-form-item-label{
		font-size: 14px;
		color:#000;
	}
</style>