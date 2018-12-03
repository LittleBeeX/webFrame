<template>
	<div class="layout">
		<Layout>
			<Header>
				<nav class="navbar navbar-default">
					<a class="float-left navbar-brand"></a>
					<div class="funcall">
						<ul class="float-left nav-fnc" >
							<li><a href="/">首页</a></li>
							<li><a href="/">公司注册</a></li>
							<li><router-link to="config">在线治理</router-link></li>
							<li><router-link to="config">资产交易</router-link></li>
						</ul>
						<ul class="float-right nav-token">
							<li v-if="isLogin"><span><a href="/index.php/cn/home/index/register">注册</a></span></li>
							<li v-if="isLogin"><span><a href="/index.php/cn/home/index/login">登录</a></span></li>
							<li v-else><span><a href="javascript:void(0)" @click="closeLogin">退出</a></span></li>
							<Dropdown trigger="click">
								<a href="javascript:void(0)">
									简体中文
									<Icon type="ios-arrow-down"></Icon>
								</a>
								<DropdownMenu slot="list">
									<DropdownItem v-for="item in lang" @click="changeLanguage(item.type,item.name)">{{item.name}}</DropdownItem>
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
								LittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、<br>
								治理以及资产流通。我们权衡了中心化和非中心化的优势，在保<br>
								证效率和快速决策的同时，是公司治理透明化、自动化。
							</p>
							<p>@2018 LittleBeeX 版权所有</p>
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
	export default {
		data(){
			return{
				language:'简体中文',
				lang:[
					{
						name:'English',
						type:'en-US'
					},{
						name:'简体中文',
						type:'zh-CN'
					}
				],
				isLogin:false
			}
		},
		methods:{
			closeLogin(){
				this.$axios.post('/index.php/cn/home/index/exit_ajax')
					.then(() => {
						this.$Notice.info({
							title: '已成功退出！',
						});
						this.isLogin = true
						this.$router.push({
							path:'/'
						})
					})
			}
		},
		computed:mapState({
			Address: state => state.web3.coinbase
		}),
		mounted(){
			this.$axios.post('/index.php/cn/home/node_se/session_user')
				.then(response => {
					if(response.data.info && response.data.info != ''){
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
	
</style>
<style>
	.ivu-form-item-required 
		.ivu-form-item-label:before{
			content: '' !important;
		}
			
</style>