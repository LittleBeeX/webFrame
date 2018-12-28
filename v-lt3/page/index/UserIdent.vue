<template>
	<div class="index-board">
		<div class="inner">
			<h3 v-if="isCreator">{{$t('indexUser.msg0')}}</h3>
			<h3 v-else>{{$t('indexUser.msg0_1')}}</h3>
			<div>
				 <Form :model="userIdent" label-position="left" :label-width="labelWidth" inline ref="userIdent" :rules="ruleInline">
					<FormItem :label="$t('indexUser.msg1')" prop="name">
						<Input v-model="userIdent.name" size="large" :placeholder="$t('indexUser.msg1_1')" :readonly="userIsIdint"></Input>
					</FormItem>
					<FormItem :label="$t('indexUser.msg2')" prop="surname">
						<Input v-model="userIdent.surname" size="large" :placeholder="$t('indexUser.msg2_1')" :readonly="userIsIdint"></Input>
					</FormItem><br>
					<FormItem :label="$t('indexUser.msg3')" prop="sex">
						<Select v-model="userIdent.sex" :readonly="userIsIdint" :placeholder="$t('indexUser.msg3_1')">
							<Option v-for="item in sexList" size="large" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem :label="$t('indexUser.msg4')" prop="nationality">
						 <Select v-model="userIdent.nationality" :readonly="userIsIdint" size="large" :placeholder="$t('indexUser.msg4_1')">
							<Option v-for="(item,index) in nationalityList" :value="index" :key="index" :label="item.country">
								<span>{{ item.country }}</span>
								<span style="float:right;color:#ccc">{{item.en}}</span>
							</Option>
						</Select> 
					</FormItem><br>
					<FormItem :label="$t('indexUser.msg5')" prop="birDate">
						<DatePicker style="width:100%" type="date" size="large" :placeholder="$t('indexUser.msg5_1')" v-model="userIdent.birDate"  :readonly="userIsIdint"></DatePicker>
					</FormItem>
					<FormItem :label="$t('indexUser.msg6')" prop="passports">
						<Input v-model="userIdent.passports" size="large" :placeholder="$t('indexUser.msg6_1')" :readonly="userIsIdint"></Input>
					</FormItem>
					<br>
					<FormItem :label="$t('indexUser.msg7')" class="address" >
						<Input v-model="Address" size="large" readonly></Input>
					</FormItem>
					<FormItem :label="$t('indexUser.msg8')" prop="position">
						<Select v-model="userIdent.position" :readonly="userIsIdint" :placeholder="$t('indexUser.msg7_1')">
							<Option v-for="item in positionList" size="large" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<br>
					<FormItem :label="$t('indexUser.msg9')">
						<Upload
							ref="upload"
							:readonly="userIsIdint"
							:data="{
								address:Address,
								name:userIdent.name,
								surname:userIdent.surname,
								passports:userIdent.passports,
								sex:userIdent.sex,
								position: userIdent.position,
								nationality:userIdent.nationality,
								birthtime:userIdent.birDate,
								only: onlys
							}"
							:show-upload-list="false"
							:default-file-list="defaultList"
							:on-success="handleSuccess"
							:format="['jpg','jpeg','png']"
							:max-size="2048"
							:on-format-error="handleFormatError"
							:before-upload="handleBeforeUpload"
							multiple
							name="picture" 
							action="/index.php/cn/home/node_su/geren_tijiao">
								<Button icon="ios-cloud-upload-outline">{{$t('indexUser.btn1')}}</Button>
						</Upload>
						<Modal :title="$t('indexUser.msg10')" v-model="visible" ok-text="" cancel-text="">
							<img :src="imgUrl" v-if="visible" style="width: 100%">
							<p slot="footer" class="tipMsg"></p>
						</Modal>
						<div class="demo-upload-list" v-for="(item,index) in uploadList">
							<template v-if="item.status === 'finished'">
								<img :src="item.url">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
								</div>
							</template>
							<template v-else>
								<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
							</template>
						</div>
					</FormItem>
				</Form>
				<Alert v-if="userType.isShow" :type="userType.type">{{userType.setMes}}</Alert>
				<div class="btn-con" v-else>
				    <Button class="fl" type="primary" @click="backConfig()">
						<Icon type="ios-arrow-back"></Icon>
						{{$t('btn1')}}
					</Button>
					<Button class="fr" type="primary" @click="goCompany('userIdent')" >
						{{$t('btn2')}}
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
				<div class="btn-con" v-if="userType.type == 'error'">
					<Button class="fr" type="primary" @click="goCompany('userIdent')" >
						{{$t('btn3')}}
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
	import mutil from '@/util/mutil'
	export default {
		data(){
			return{
				isCreator:true,
				file: null,
                loadingStatus: false,
                labelWidth:75,
				userType:{
					isShow: false,
					setMes: '',
					type:'info'
				},
				userIsIdint: false,
				userIdent: {
                    name: '',
                    surname: '',
                    passports: '',
                    sex: '',
					position:'',
					nationality:'',
					birDate:''
                },
				sexList:[
					{
						value:'1',
						label:this.$t('indexUser.msg3_2')
					},{
						value:'2',
						label:this.$t('indexUser.msg3_3')
					},
				],
				positionList:[
					{
						value:'2',
						label:this.$t('indexUser.msg8_2')
					},{
						value:'1',
						label:this.$t('indexUser.msg8_3')
					},{
						value:'4',
						label:this.$t('indexUser.msg8_4')
					},{
						value:'3',
						label:this.$t('indexUser.msg8_5')
					},{
						value:'5',
						label:this.$t('indexUser.msg8_6')
					},
				],
				nationalityList:[{country: "中国", en: "China", code: "86"},{country: "中国香港", en: "Hong Kong", code: "852"}],
				ruleInline: {
                    name: [
                        { required: true, message: this.$t('indexUser.msg1_1'), trigger: 'blur' }
                    ],
                    surname: [
                        { required: true, message: this.$t('indexUser.msg2_1'), trigger: 'blur' }
                    ],
					passports: [
                        { required: true, message: this.$t('indexUser.msg6_1'), trigger: 'blur' }
                    ],
					birDate: [
                        { required: true, type: 'date', message: this.$t('indexUser.msg5_1'), trigger: 'change' }
                    ],
                    sex: [
                        { required: true, message: this.$t('indexUser.msg3_1'), trigger: 'change' }
                    ], 
					position: [
                        { required: true, message: this.$t('indexUser.msg8_1'), trigger: 'change' }
                    ], 
					nationality: [
                        { required: true, message: this.$t('indexUser.msg4_1'), trigger: 'change' }
                    ],
                },
				 defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': require('../../assets/images/hzzm.png')
                    }
                ],
				imgUrl: '',
				visible: false,
				uploadList: [],
				onlys: ''
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			backConfig(){
				this.$router.push({path:'Config'})
			},
			goCompany(name){
				this.$refs[name].validate((valid) => {
						if (valid) {
							if(this.uploadList[0] == this.defaultList[0]){
								this.$Notice.warning({
									title: this.$t('indexUser.errorMsg3')
							 	});
							}else{
								let data = {
								"address":this.Address,
								"name":this.userIdent.name,
								"surname":this.userIdent.surname,
								"passports":this.userIdent.passports,
								"sex":this.userIdent.sex,
								"position":this.userIdent.position,
								"nationality":this.userIdent.nationality,
								"birthtime":this.userIdent.birDate,
								"only": this.onlys
							};
							this.$axios({ 
								method: 'post',
								url: '/index.php/cn/home/node_su/geren_tijiao',
								data: Qs.stringify(data)
							}).then((response) => {
								if(response.data.state == 0){
									if(this.$route.query.only != undefined){
										if(this.userType.type == 'error'){
											this.$Notice.success({
												title: this.$t('indexUser.tipMsg1')
											});
											this.$router.push({
												path:'/'
											})
										}else{
											this.$router.push({
												path:'TokenPayment',
												query:{only:this.onlys}
											})
										}
									}else{
										this.$router.push({
											path:'companyIdent'
										})
									}
								}
							}) 
							}
						} else {
							 this.$Notice.warning({
									title: this.$t('indexUser.errorMsg1')
							 });
						}
				})
			},
			handleView (urls) {
                this.imgUrl = urls;
                this.visible = true;
            },
            handleSuccess (res, file) {
                file.url = res.picture;
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: this.$t('indexUser.errorMsg2')
                });
            },
            handleBeforeUpload (file) {
				const fileList = this.$refs.upload.fileList;
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
                return true;
            }
        },
		created(){
			this.$axios.post('/index.php/cn/home/node_se/nationality')
				.then((response) => {
					this.nationalityList = response.data.info;
				})
			if(this.$route.query.only != undefined){
				this.isCreator = false
				this.onlys = this.$route.query.only
				let data = {
					"address": this.Address,
					"only": this.onlys
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					let info = response.data.info.chain;
					if(response.data.state == 0 ){
						if(info.state != 0){
							this.userIdent.surname = info.surname
							this.userIdent.passports = info.passports
							this.userIdent.name = info.name
							this.userIdent.sex = info.sex
							this.userIdent.nationality = info.nationality
							this.userIdent.position = info.position
							this.userIdent.birDate = mutil.timestampToTime(info.birthtime)
							this.defaultList[0].url = info.picture
							
							if(info.state == 1){
								this.userType.isShow = true
								this.userType.setMes = this.$t('indexUser.tipMsg2')
								this.userIsIdint = true
							}else if(info.state == 3){
								this.userType.isShow = true
								this.userType.type = 'error'
								this.userType.setMes = this.$t('indexUser.tipMsg3')
								this.nextBtn = true
							}else if(info.state == 2){
								this.userType.isShow = true
								this.userType.setMes = this.$t('indexUser.tipMsg4')
								this.userIsIdint = true
							}	
						}
						if(response.data.info.company.creator){
							this.isCreator = true
						}
					}
				})
			}else{
				this.onlys = ''
				this.isCreator = true
			}
		},
		mounted () {
			this.uploadList = this.$refs.upload.fileList;
			this.labelWidth = mutil.getSection('lang') == 'zh' ? 75 : 175
			console.log(mutil.getSection('lang'))
		}
	}
</script>

<style scoped lang="stylus">
	.index-board
		padding: 50px 100px !important;
		height: 810px !important;
		h3
			font-size:26px;
			margin-bottom: 40px;
		.ivu-form-item
			min-width: 488px
			&.w66
				width: 65.5%
			.ivu-form-item-label
				font-size: 16px;
			button[type="button"]
				width: 170px
		.address
			width: 65.5%;
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
	.ivu-upload-select{
		margin-bottom: 24px;
	}
	.ivu-form-label-left .ivu-form-item-label{
		font-size: 14px;
		color:#000;
	}
    .demo-upload-list{
        display: inline-block;
        width: 170px;
        height: 170px;
        text-align: center;
        line-height: 170px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>