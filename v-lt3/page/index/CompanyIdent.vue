<template>
	<div class="index-board">
		<div class="inner">
			<h3>{{$t('indeCompany.msg0')}}<Icon type="ios-help-circle-outline" color="#2d8cf0" size="22" @click="helpBox = !helpBox"/></h3>
			<div>
				 <Form :model="companyIdent" label-position="left" :label-width="labelWidth" inline ref="companyIdent" :rules="ruleInline">
					<FormItem :label="$t('indeCompany.msg1')" prop="Name">
						<Input v-model="companyIdent.Name" size="large" :placeholder="$t('indeCompany.msg1_1')" :readonly="companyIsIdint"></Input>
					</FormItem>
					<FormItem :label="$t('indeCompany.msg2')" prop="Number">
						<Input v-model="companyIdent.Number" size="large" :placeholder="$t('indeCompany.msg2_1')" :readonly="companyIsIdint"></Input>
					</FormItem><br/>
					<FormItem :label="$t('indeCompany.msg3')" prop="Site">
						<Select v-model="companyIdent.Site" :readonly="companyIsIdint" size="large" :placeholder="$t('indeCompany.msg3_1')">
							<Option v-for="(item,index) in nationalityList" :value="index" :key="index" :label="item.country">
								<span>{{ item.country }}</span>
								<span style="float:right;color:#ccc">{{item.en}}</span>
							</Option>
						</Select> 
					</FormItem>
					<FormItem :label="$t('indeCompany.msg4')" prop="Fund"  >
						<Input v-model="companyIdent.Fund" size="large" :placeholder="$t('indeCompany.msg4_1')" :readonly="companyIsIdint">
							 <span slot="append">USD$</span>
						</Input>
					</FormItem><br/>
					<FormItem :label="$t('indeCompany.msg5')" prop="BirDate" >
						<DatePicker style="width:100%" size="large" type="date" :placeholder="$t('indeCompany.msg5_1')" v-model="companyIdent.BirDate" :readonly="companyIsIdint"></DatePicker>
					</FormItem>
					<FormItem :label="$t('indeCompany.msg6')" prop="IdentCode" class="only">
						<Input  :placeholder="$t('indeCompany.msg6_1')" size="large" v-model="companyIdent.IdentCode" :readonly="companyIsIdint">
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
						{{$t('btn1')}}
					</Button>
					<Button class="fr" type="primary" @click="goTokenSet('companyIdent')">
						{{$t('btn2')}}
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
				<div class="btn-con" v-if="companyType.type == 'error'">
					<Button class="fr" type="primary" @click="goTokenSet('companyIdent')" >
						{{$t('btn3')}}
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
		 <Modal
			v-model="helpBox"
			:title="$t('indeCompany.msg0')"
			class-name="vertical-center-modal">
			<p>{{$t('indeCompany.msg7')}}</p>
			<p slot="footer" class="tipMsg">{{$t('indeCompany.msg8')}}</p>
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
				companyIdent: {
                    Name: '',
                    Number: '',
                    Site: '',
					Fund:'',
					BirDate:'',
					IdentCode:'',
					labelWidth:75
                },
				companyType:{
					isShow: false,
					setMes: '',
					type:'info'
				},
				nationalityList:[{country: "中国", en: "China", code: "86"},{country: "中国香港", en: "Hong Kong", code: "852"}],
				companyIsIdint: false,
				ruleInline:{
					Name:[
						{required:true, message:this.$t('indeCompany.msg1_1'), trigger:'blur'}
					],
					Number:[
						{required:true, message:this.$t('indeCompany.msg2_1'), trigger:'blur'}
					],
					Site:[
						{required:true, message:this.$t('indeCompany.msg3_1'), trigger:'change'}
					],
					Fund:[
						{required:true, message:this.$t('indeCompany.msg4_1'), trigger:'blur'}
					],
					BirDate:[
						{required:true, message:this.$t('indeCompany.msg5_1'), trigger:'change', type:'date'}
					],
					IdentCode:[
						{required:true, message:this.$t('indeCompany.msg6_1'), trigger:'blur'}
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
								if(this.$route.query.only != undefined){
									if(this.userType.type == 'error'){
										this.$Notice.success({
											title: this.$t('indeCompany.tipMsg2')
										});
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
									this.$router.push({
										path:'TokenSet',
										query:{
											"only":this.companyIdent.IdentCode
										}
									})
								}
							}else{
								this.$Notice.warning({
									title: this.$t('indeCompany.errorMsg2')
								});
							}
						})
					} else {
						this.$Notice.warning({
							title: this.$t('indexUser.errorMsg1')
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
								this.$Notice.success({
									title: this.$t('indeCompany.tipMsg1')
								});
							}else{
								this.$Notice.warning({
									title: this.$t('indeCompany.errorMsg2')
								});
							}
						})
					}else{
						this.$Notice.success({
							title: this.$t('indeCompany.tipMsg1')
						});
					}
				}else{
					this.$Notice.warning({
						title: this.$t('indeCompany.errorMsg3')
					});
				}
			}
		},
		created(){
			this.labelWidth = mutil.getSection('lang') == 'cn' ? 75 : 175
			this.$axios.post('/index.php/cn/home/node_se/nationality')
				.then((response) => {
					this.nationalityList = response.data.info;
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
								this.companyIdent.BirDate = mutil.timestampToTime(company.establish)
								this.companyIdent.Fund = company.capital
								this.companyIdent.IdentCode = company.only
							}
							if(company.state == 1){
								this.companyType.isShow = true
								this.companyType.setMes = this.$t('indeCompany.tipMsg3')
								this.companyIsIdint = true
							}else if(company.state == 3){
								this.companyType.isShow = true
								this.companyType.type = 'error'
								this.companyType.setMes = this.$t('indeCompany.tipMsg4')
								this.companyIsIdint = false
							}else if(company.state == 2){
								this.companyType.isShow = true
								this.companyType.setMes = this.$t('indeCompany.tipMsg5')
								this.companyIsIdint = true
							}	
						})
					}
				})
			
		}
	}
</script>

<style scoped lang="stylus">
	.index-board
		h3
			font-size:26px;
			margin-bottom: 40px;
			i
				position: relative;
				top: -13px;
				left: 5px;
		.ivu-form-item
			min-width: 488px
			&.w66
				width: 65.5%
			.ivu-form-item-label
				font-size: 16px;
			button:hover
				color: #2d8cf0
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
	.ivu-modal .tipMsg{
		text-align: left
	}
	.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .vertical-center-modal .ivu-modal{
        top: 0;
    }
    .ivu-form-item-required .ivu-form-item-label:before{
    	margin-right:0
    }
    .ivu-form-item.only label{
    	position: relative;
    	top: -6px;
    }
</style>