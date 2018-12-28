<template>
	<div class="index-board">
		<div class="inner">
			<h3>{{$t('indeToken.msg0')}}<Icon type="ios-help-circle-outline" color="#2d8cf0" size="22" @click="helpBox = !helpBox"/></h3>
			<div>
				 <Form :model="tokenIdent" label-position="left" :label-width="labelWidth" inline ref="tokenIdent" :rules="ruleInline">
					<FormItem :label="$t('indeToken.msg1')" prop="support">
						<Input v-model="tokenIdent.support" size="large" placeholder="50">
							 <span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem :label="$t('indeToken.msg2')" prop="quorum">
						<Input v-model="tokenIdent.quorum" size="large" placeholder="15">
							<span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem :label="$t('indeToken.msg3')" prop="duration">
						<Input v-model="tokenIdent.duration" size="large" placeholder="24">
							<span slot="append">H</span>
						</Input>
					</FormItem>
					<FormItem :label="$t('indeToken.msg4')" prop="token_name">
						<Input v-model="tokenIdent.token_name" size="large" :placeholder="$t('indeToken.msg4_1')"></Input>
					</FormItem>
					<FormItem :label="$t('indeToken.msg5')" prop="token_symbol">
						<Input v-model="tokenIdent.token_symbol" size="large" :placeholder="$t('indeToken.msg5_1')"></Input>
					</FormItem>
					<FormItem :label="$t('indeToken.msg6')" prop="token_number">
						<Input v-model="tokenIdent.token_number" size="large" :placeholder="$t('indeToken.msg6_1')"></Input>
					</FormItem>
				</Form>
				<div class="btn-con" v-if="btnTypes">
				    <Button class="fl" type="primary" @click="backConfig()">
						<Icon type="ios-arrow-back"></Icon>
						{{$t('btn1')}}
					</Button>
					<Button class="fr" type="primary" @click="goTokenPayment('tokenIdent')">
						{{$t('btn2')}}
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
		 <Modal
			v-model="helpBox"
			:title="$t('indeToken.msg0')"
			class-name="vertical-center-modal">
			<p>{{$t('indeToken.msg7')}}</p>
			<p>{{$t('indeToken.msg8')}}</p>
			<p>{{$t('indeToken.msg9')}}</p>
			<p slot="footer" class="tipMsg">{{$t('indeToken.msg10')}}</p>
		</Modal>
	</div>
</template>

<script>
	import Qs from 'qs'
	import mutil from '@/util/mutil'
	export default {
		data(){
			return{
				helpBox:false,
				btnTypes:true,
				tokenIdent: {
					support: '',
					quorum: '',
					duration: '',
					token_name:'',
					token_symbol:'',
					token_number:'',
					labelWidth:75
				},
				approve:{
					type: false,
					text:'当前公司信息审核中'
				},
				ruleInline:{
					support:[
						{required:true, message:this.$t('indexUser.msg1_1'), trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					],
					quorum:[
						{required:true, message:this.$t('indexUser.msg2_1'), trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					],
					duration:[
						{required:true, message:this.$t('indexUser.msg3_1'), trigger:'blur'},
						{validator: validateNumber, trigger: 'blur'}
					],
					token_name:[
						{required:true, message:this.$t('indexUser.msg4_1'), trigger:'blur'}
					],
					token_symbol:[
						{required:true, message:this.$t('indexUser.msg5_1'), trigger:'blur'},
						{validator: validateSymbol, trigger: 'blur'}
					],
					token_number:[
						{required:true, message:this.$t('indexUser.msg6_1'), trigger:'blur'},
						{validator: validateVal, trigger: 'blur'}
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
					if (valid) {
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
								this.$router.push({
									path:'TokenPayment',
									query:{only:this.$route.query.only}
								})
							}
						}) 
					} else {
						this.$Notice.warning({
							title: this.$t('indexUser.errorMsg1'),
						});
					}
				})
			}
		},
		created(){
			this.labelWidth = mutil.getSection('lang') == 'zh' ? 75 : 175
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
						if(company.token_name != ''){
							this.tokenIdent.support = company.support
							this.tokenIdent.quorum = company.quorum
							this.tokenIdent.duration = company.duration
							this.tokenIdent.token_name = company.token_name
							this.tokenIdent.token_symbol = company.token_symbol
							this.tokenIdent.token_number = company.token_number
							
							if(company.state != 0){
								this.btnTypes = false
							}
						}
						
					}
				})
			}else{
				this.$Notice.warning({
					title:  this.$t('indexUser.errorMsg7')
				});
				this.$router.push({
					path:'/'
				})
			}
		}
	}
	
	const validateVal = (rule, value, callback) => {
		if (!Number.isInteger(+value)) {
			callback(new Error(this.$t('indexUser.errorMsg2')));
		} else {
			callback();
		}
	};
	const validateNumber = (rule, value, callback) => {
		if (!Number.isInteger(+value)) {
			callback(new Error(this.$t('indexUser.errorMsg2')));
		} else {
			if(value > 100 || value <0){
				callback(new Error(this.$t('indexUser.errorMsg3')));
			}else{
				callback();
			}
		}
	};
	const isSymbol = new RegExp("^[A-Z]+$");
	const validateSymbol = (rule, value, callback) => {
		if(!isSymbol.test(value)){
			callback(new Error(this.$t('indexUser.errorMsg4')));
		}else{
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
</style>