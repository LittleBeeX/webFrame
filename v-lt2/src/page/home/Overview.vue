<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">主页</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="10">
					<Card :bordered="false" class="companyMessage">
						<p slot="title" class="">公司信息</p>
						<div class="msgBoard">
							<div class="logo">
								<img :src="companyLogoSrc" mode="" />
							</div>
							<div class="msg">
								<p v-for="item in companyMsgList"><b>{{item.label}}</b>{{item.vals}}</p>
								<p ><b>公司章程</b><a :href="constitution.src">{{constitution.title}}</a></p>
							</div>
						</div>
						<div class="btn" v-if="isCreator">
							<Upload
								ref="upload"
								:show-upload-list="false"
								:on-success="companyUpSuccess"
								:format="['jpg','jpeg','png']"
								:max-size="2048"
								:data="{
									address:Address,
									only: $route.query.only,
								}"
								:on-format-error="handleFormatError"
								multiple
								name="logo" 
								action="/index.php/cn/home/node_su/company_logo">
								<Button type="primary" icon="ios-cloud-upload-outline">上传公司logo</Button>
							</Upload> 
							<Upload
								:on-success="fileUpSuccess"
								:show-upload-list="false" 
								:on-format-error="handleFormatError"
								:data="{
									address:Address,
									only: $route.query.only,
								}"
								:format="['doc','docx','xls','xlsx','ppt','pptx','pdf','pdfx']"
								name="zhangcheng" 
								action="/index.php/cn/home/node_su/company_zhangcheng">
								<Button type="primary" icon="ios-cloud-upload-outline">上传公司章程</Button>
							</Upload>
						</div>
					</Card>
				</Col>
				<Col span="14">
					<Card :bordered="false" class="world">
						 <Dropdown class="world-dropdown" @on-click="goCompanyList">
							<Button type="primary">
								选择我的公司
								<Icon type="ios-arrow-down"></Icon>
							</Button>
							<DropdownMenu slot="list" >
								<DropdownItem v-for="item in companyList" :name="item.only">{{item.name}}</DropdownItem>
							</DropdownMenu>
						</Dropdown>
						<img src="../../../static/images/world.png" mode="" />
					</Card>
				</Col>
			</Row><Row>
				<Col span="10">
					<Card :bordered="false" class="userMessage">
						<p slot="title">个人信息</p>
						<div class="msgBoard">
							<div class="logo">
								<img :src="userSrc" mode="" />
							</div>
							<div class="msg">
								<p v-for="item in userMsgList"><b>{{item.label}}</b>{{item.vals}}</p>
							</div>
						</div>
						<div class="btn">
							<Upload
								ref="upload"
								:show-upload-list="false"
								:on-success="userUpSuccess"
								:format="['jpg','jpeg','png']"
								:max-size="2048"
								:data="{
									address:Address,
									only: $route.query.only,
								}"
								:on-format-error="handleFormatError"
								multiple
								name="portrait" 
								action="/index.php/cn/home/node_su/chain_portrait">
								<Button type="primary" icon="ios-cloud-upload-outline">上传个人头像</Button>
							</Upload> 
						</div>
					</Card>
				</Col>
				<Col span="14">
					<Card :bordered="false" class="companyBusiness">
						<p slot="title">公司动态</p>
						<Table height="300" :columns="businessList.rows" :data="businessList.cols"></Table>
					</Card>
				</Col>
			</Row>
		</div>
		
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	import mutil from '@/util/mutil'
	export default {
		props:['BreadTitle'],
		data(){
			return{
				companyLogoSrc: require('../../assets/images/fiveReason.png'),
				userSrc: require('../../assets/images/example.jpg'),
				nationalityList:[],
				businessList:{
					rows:[
						 {
							title: '日期',
							key: 'date'
						},
						{
							title: '决议',
							key: 'campaign'
						},
						{
							title: '状态',
							key: 'type'
						}
					],
					cols:[],
				},
				companyList:[],
				companyMsgList:[
					{
						label:'公司名称',
						vals:''
					},{
						label:'注册号码',
						vals:''
					},{
						label:'注册资本',
						vals:''
					},{
						label:'成立日期',
						vals:''
					},{
						label:'注册国家',
						vals:''
					}
				],
				userMsgList:[
					{
						label:'姓名',
						vals:''
					},{
						label:'国籍',
						vals:''
					},{
						label:'护照号码',
						vals:''
					},{
						label:'出生日期',
						vals:''
					},{
						label:'公司职务',
						vals:''
					},{
						label:'持股比例',
						vals:''
					}
				],
				isCreator: false,
				constitution:{
					src:'javascript:void(0)',
					title:'暂无上传'
				}
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		watch:{
			$route : function(){
				this.mountedRefreshCompanyList()
				this.mountedRefreshMsg()
				this.mountedRefreshList() 
			}
		},
		methods:{
			goCompanyList(onlys){
				 this.$router.push({
					path:'Overview',
					query:{
						"only":onlys
					}
				}) 
			},
			mountedRefreshCompanyList(){
				let data = {
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_list',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.companyList = response.data.info
					}
				})
			},
			handleFormatError (file) {
				this.$Notice.warning({
					title: '文件提交错误！',
				});
			},
			userUpSuccess(res,file){
				this.userSrc = res.portrait;
			},
			companyUpSuccess(res,file){
				this.companyLogoSrc = res.logo;
			},
			fileUpSuccess(res,file){
				this.constitution.src = res.zhangcheng;
				this.constitution.title = '公司章程';
			},
			mountedRefreshMsg(){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let userMsg = response.data.info.chain
						let companyMsg = response.data.info.company
						let companyDataArr = [companyMsg.name,companyMsg.code,companyMsg.capital,mutil.timestampToTime(companyMsg.establish),cityType(this.nationalityList,companyMsg.address)]
						let userDataArr = [userMsg.surname + userMsg.name,userMsg.country_cn,userMsg.passports,mutil.timestampToTime(userMsg.create_time),returnTypeUser(userMsg.position),userMsg.token_proportion + '%']
						
						for(let i=0;i<this.userMsgList.length;i++){
							this.userMsgList[i].vals = userDataArr[i]
						}
						for(let i=0;i<this.companyMsgList.length;i++){
							this.companyMsgList[i].vals = companyDataArr[i]
						}
						
						this.isCreator = companyMsg.creator
						
						if(companyMsg.logo != ''){
							this.companyLogoSrc = companyMsg.logo;
						}
						if(companyMsg.zhangcheng != ''){
							this.constitution.src = companyMsg.zhangcheng;
							this.constitution.title = '公司章程';
						}
						if(userMsg.portrait != ''){
							this.userSrc = userMsg.portrait;
						}
						return true;
					}else{
						this.$Notice.warning({
							title: '无该成员信息！'
						});
						this.$router.push({
							path:'/'
						})
						return false;
					}
				})
			},
			mountedRefreshList(){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"state": 0
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/meeting_list',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let list = response.data.info
						for(let i=0;i<list.length;i++){
							this.businessList.cols.push({
								date: mutil.timestampToTime(list[i].start_time),
								campaign: list[i].content,
								type: list[i].state
							})
						}
						return true;
					}else{
						this.$Notice.warning({
							title: '无该成员信息！'
						});
						this.$router.push({
							path:'/'
						})
						return false;
					}
				})
			}
		},
		mounted(){
			this.$axios.post('/index.php/cn/home/node_se/nationality')
				.then((response) => {
					this.nationalityList = response.data.info;
				})
			this.mountedRefreshCompanyList()
			this.mountedRefreshMsg()
			this.mountedRefreshList() 
		}
	}
	
	function returnTypeUser(msg){
		switch(msg){
			case '1':
				msg = '董事'
				break;
			case '2':
				msg = '股东'
				break;
			case '3':
				msg = '股东兼董事'
				break;
			case '4':
				msg = '员工'
				break;
			case '5':
				msg = '股东兼员工'
				break;
		}
		return msg
	}
	
	function cityType(cityArr,indexs){
		return cityArr[indexs].country
	}
</script>
<style scoped  lang="stylus">
	.companyMessage,.world,.userMessage,.companyBusiness
		min-height: 350px
		border-radius: 4px
		background: white
		margin: 15px
	
	
	
	.world,.companyBusiness
		margin-right: 0
		
	.companyMessage,.world
		margin-top: 0
		
	.companyMessage,.userMessage
		margin-left: 0
		.msgBoard
			padding: 14px 16px
			display: flex
			display: webkif-flex
			.logo
				flex-basis: 200px
				padding-right: 50px
				img
					width: 100%
			p
				margin-top: 14px
				b
					margin-right: 16px
				&:first-child
					margin-top: 0
		.btn
			position:absolute
			right: 16px
			bottom: 14px
			&>div
				float:right
				margin-left: 20px
	
	.world
		text-align: center
		.world-dropdown
			position: absolute
			left: 15px
			top: 15px
		img
			height: 350px
</style>