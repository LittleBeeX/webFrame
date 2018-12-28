<template>
	<div class="layout">
		<Layout>
			<Header>
				<nav class="navbar navbar-default">
					<a href="/index.php/cn/home/index" class="float-left navbar-brand"></a>
					<div class="funcall">
						<ul class="float-left nav-fnc" >
							<li><a href="/">{{$t('index.btn1')}}</a></li>
							<li><a href="/">{{$t('index.btn2')}}</a></li>
							<li><router-link to="config">{{$t('index.btn3')}}</router-link></li>
							<li><a  href="/index.php/cn/home/index">{{$t('index.btn4')}}</a></li>
						</ul>
						<ul class="float-right nav-token">
							<li v-if="isLogin"><span><a href="/index.php/cn/home/index/register">{{$t('index.btn5')}}</a></span></li>
							<li v-if="isLogin"><span><a href="/index.php/cn/home/index/login">{{$t('index.btn6')}}</a></span></li>
							<li v-else><span><a href="javascript:void(0)" @click="closeLogin">{{$t('index.btn7')}}</a></span></li>
							<Dropdown trigger="click" @on-click="changeLanguage">
								<a href="javascript:void(0)">
									{{language}}
									<Icon type="ios-arrow-down"></Icon>
								</a>
								<DropdownMenu slot="list" >
									<DropdownItem :name="item.type" :types="item.type" v-for="item in lang" >{{item.title}}</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</ul>
					</div>
				</nav>
			</Header>
			<Content>
				<router-view></router-view>
			</Content>
			<Footer>
				<footer>
					<div class="footer-logo"></div>
					<div class="footer-board">
						<div class="float-left">
							<p>
								{{$t('index.msg1')}}<br/>
								{{$t('index.msg1_1')}}<br/>
								{{$t('index.msg1_2')}}<br/>
								{{$t('index.msg1_3')}}<br/>
							</p>
							<p>{{$t('index.msg2')}}</p>
						</div>
						<ul class="float-right">
							<li>152 BEACH ROAD</li>
							<li>#14-02 GATEWAY EASY</li>
							<li>SINGAPORE(189721)</li>
							<li>support@LittleBeeX.com</li>
							<li>+65 86870888</li>
						</ul>
					</div>
				</footer>
			</Footer>
		</Layout>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import mutil from '@/util/mutil'
	export default {
		data(){
			return{
				language:'简体中文',
				lang:[
					{
						title: '简体中文',
						type: 'cn'
					}, {
						title: 'English',
						type: 'en'
					}
				],
				isLogin:true
			}
		},
		methods:{
			closeLogin(){
				this.$axios.post('/index.php/cn/home/index/exit_ajax')
					.then(() => {
						this.$Notice.success({
							title: '已成功退出！',
						});
						this.isLogin = true
						this.$router.push({
							path:'/'
						})
					})
			},
			changeLanguage(type){
				if(type=="en"){
			      this.$i18n.locale="en"
			      this.language = "English"
			    }else{
			      this.$i18n.locale="cn"
			      this.language = "简体中文"
			    }
            	this.$i18n.locale = type
            	mutil.setSection('lang', type)
			},
			refreshLang(){
				if(this.$route.query.lang != undefined){
					mutil.setSection('lang', this.$route.query.lang)
					this.changeLanguage(this.$route.query.lang)
				}else{
					this.changeLanguage(mutil.getSection('lang'))
				}
			}
		},
		computed:mapState({
			Address: state => state.web3.coinbase
		}),
		created(){
			this.refreshLang()
			this.$axios.post('/index.php/cn/home/node_se/session_user')
				.then(response => {
					if(response){
						this.isLogin = false
					}else{
						this.isLogin = true
					}
				})
			
		}
	}
</script>
<style scoped lang="stylus">
	.layout
		padding: 0;
		margin: 0;
		position: relative;
		min-height: 100vh;
		background: #f2f3f8;
		.ivu-layout
			background: transparent;
			
	.ivu-layout-header
		background: #20206A;
		height: 50px;
		line-height: 50px;
	nav
		width: 1200px;
		margin: 0 auto;
		position: relative;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		.navbar-brand
			padding: 0;
			margin: 0 20px 0 0;
			background: url(../../../static/images/littlebeex-logo.png) no-repeat;
			background-size: contain;
			width: 180px;
			height: 40px;
		.funcall
			flex: 1;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			.ivu-dropdown
				margin: 0 20px;
				a
					color: white;
					font-size: 14px;
				
			&>ul
				display: flex;
				display: -webkit-flex;
				&>li
					margin: 0 20px;
					list-style: none;
					a
						color:white;
						font-size: 14px;
						&:hover{
							opacity: 0.9;
						}
	
	.ivu-layout-content
		flex: 1;
		position:relative;
		.index-board
			position: relative;
			width: 1200px;
			margin: 100px auto 100px;
			height: 705px;
			box-shadow: 0 2px 7px rgba(0,0,0,.15);
			background-color: rgb(255, 255, 255);
			border-radius: 3px;
			box-sizing: border-box;
			padding: 50px 100px 80px;
	
	.ivu-layout-footer	
		background: #20206a;
		width: 100%;
	footer
		width: 1200px;
		margin: 26px auto;
		.footer-logo
			background: url(../../assets/images/littlebeex-logo.png) no-repeat;
			background-size: contain;
			width: 210px;
			height: 47px;
			margin-bottom: 20px;
		.footer-board		
			color: white;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			line-height: 26px;
			.float-left
				display: flex;
				display: -webkit-flex;
				flex-direction: column;
				justify-content: space-between;
				flex-basis: 650px;
			.float-right
				li
					list-style: none;
	
</style>
<style>
	.ivu-form-item-required 
		.ivu-form-item-label:before{
			content: '' !important;
		}
			
</style>