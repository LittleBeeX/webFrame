<template>
	<div class="layout">
		<Layout>
			<Header>
				<nav class="navbar navbar-default">
					<a class="float-left navbar-brand"></a>
					<div class="funcall">
						<ul class="float-left nav-fnc" >
							<li><a href="http://www.baidu.com">公司注册</a></li>
							<li><router-link to="config">在线治理</router-link></li>
							<li><router-link to="config">资产交易</router-link></li>
						</ul>
						<ul class="float-right nav-token">
							<li><span><a href="register.html">注册</a></span></li>
							<li><span><a href="login.html">登录</a></span></li>
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
					},{
						name:'한글',
						type:'ko-KR'
					},{
						name:'日本語',
						type:'it-JP'
					}
				]
			}
		}
	}
</script>
<style scoped lang="stylus">
	.layout
		padding: 0;
		margin: 0;
		position: relative;
		min-height: 100vh;
		padding-bottom: 300px;
		background: #f2f3f8;
		.ivu-layout
			background: transparent;
			min-height: calc(100vh - 300px)
			
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
			background: url(../../../static/images/littlebeex-logo.png) ;
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
			width: 900px;
			margin: 50px auto;
			height: auto;
			box-shadow: 0 2px 7px rgba(0,0,0,.15);
			background: rgb(255, 255, 255);
			border-radius: 3px;
			box-sizing: border-box;
			padding: 50px 100px;
	
	.ivu-layout-footer	
		background: #20206a;
		position: absolute;
		bottom: 0;
		width: 100%;
	footer
		width: 1200px;
		margin: 26px auto;
		.footer-logo
			background: url(../../../static/images/littlebeex-logo.png) no-repeat;
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