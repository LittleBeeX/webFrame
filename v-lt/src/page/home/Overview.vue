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
								<img src="../../../static/images/fiveReason.png" mode="" />
							</div>
							<div class="msg">
								<p v-for="item in companyMsgList"><b>{{item.label}}</b>{{item.vals}}</p>
								<p ><b>公司章程</b><a :href="constitution.src">{{constitution.title}}</a></p>
							</div>
						</div>
						<div class="btn">
							<Upload
							ref="upload"
							:show-upload-list="false"
							:on-success="companyUpSuccess"
							:format="['jpg','jpeg','png']"
							:max-size="2048"
							:on-format-error="handleFormatError"
							multiple
							name="picture" 
							action="/index.php/cn/home/node_su/geren_tijiao">
								<Button type="primary" icon="ios-cloud-upload-outline">提交公司logo</Button>
							</Upload> 
							<Upload v-if="isCreator" :show-upload-list="false" action="//jsonplaceholder.typicode.com/posts/">
								<Button type="primary" icon="ios-cloud-upload-outline">提交公司章程</Button>
							</Upload>
						</div>
					</Card>
				</Col>
				<Col span="14">
					<Card :bordered="false" class="world">
						 <Dropdown class="world-dropdown" @on-click="goCompanyList">
							<Button type="primary">
								公司跳转
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
								<img src="../../../static/images/Yiming Wang.jpg" mode="" />
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
								:on-format-error="handleFormatError"
								multiple
								name="picture" 
								action="/index.php/cn/home/node_su/geren_tijiao">
								<Button type="primary" icon="ios-cloud-upload-outline">提交个人头像</Button>
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
						label:'注册地',
						vals:''
					},{
						label:'注册资本',
						vals:''
					},{
						label:'注册日期',
						vals:''
					},{
						label:'公司地址',
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
						label:'护照',
						vals:''
					},{
						label:'注册日期',
						vals:''
					},{
						label:'身份',
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
					"address": this.$store.state.web3.coinbase
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
				file.url = res.picture;
				file.name = '7eb99afb9d5f317c912f08b5212fd69a';
			},
			companyUpSuccess(res,file){
				file.url = res.picture;
				file.name = '7eb99afb9d5f317c912f08b5212fd69a';
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
						let companyDataArr = [companyMsg.name,companyMsg.establish,companyMsg.capital,mutil.timestampToTime(companyMsg.establish),companyMsg.address]
						let userDataArr = [userMsg.surname + userMsg.name,userMsg.country_cn,userMsg.passports,mutil.timestampToTime(userMsg.create_time),'董事',userMsg.token_proportion]
						
						for(let i=0;i<this.userMsgList.length;i++){
							this.userMsgList[i].vals = userDataArr[i]
						}
						for(let i=0;i<this.companyMsgList.length;i++){
							this.companyMsgList[i].vals = companyDataArr[i]
						}
						
						this.isCreator = companyMsg.creator
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
								date: list[i].start_time,
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
			this.mountedRefreshCompanyList()
			this.mountedRefreshMsg()
			this.mountedRefreshList() 
		}
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