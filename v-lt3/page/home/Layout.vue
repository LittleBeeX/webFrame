<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}

	.layout-header-bar {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
</style>
<template>
	<div class="layout">
		<Sider class="slider">
			<div class="page_logo">
				<img src="../../assets/images/littlebeex-logo.png" mode="" @click="goIndex"/>
			</div>
			<Menu ref="side_menu" :active-name="activeName" theme="dark" width="auto" :open-names="['1']" class="slider-menu" @on-select="changeBreadTitle">
				<MenuItem :name="item.name" :itemName="item.title" v-for="item in slider" :title="item.urls">
				<Icon :size="item.iconSize" :type="item.icon" />
				{{item.label}}
				</MenuItem>
			</Menu>
		</Sider>
		<Layout class="board">
			<!--<Header class="header">
				<div class="header-title"></div>
				<Dropdown trigger="click" @on-click="changeLangEvent">
					<Button type="primary">
						{{language}}
						<Icon type="ios-arrow-down"></Icon>
					</Button>
					<DropdownMenu slot="list">
						<DropdownItem :name="item.type" :types="item.type" v-for="item in langList">{{item.title}}</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Header>-->
			<Content class="content">
				<router-view @menuActiveName="menuActiveName" :BreadTitle="BreadTitle"></router-view>
			</Content>
		</Layout>
	</div>
</template>
<script>
	import Qs from 'qs'
	import mutil from '@/util/mutil'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				language:'简体中文',
				activeName:"10",
				slider: [
					{
						title: 'Overview',
						name: '10',
						label: this.$t('home.btn1'),
						urls: '../home/Overview',
						icon: 'md-home',
						iconSize: '16'
					}, {
						title: 'CapTable',
						name: '11',
						label: this.$t('home.btn2'),
						urls: '../home/CapTable',
						icon: 'ios-apps',
						iconSize: '16'
	
					}, {
						title: 'MintTransfer',
						name: '12',
						label: this.$t('home.btn3'),
						urls: '../home/MintTransfer',
						icon: 'md-repeat',
						iconSize: '16'
					}, {
						title: 'VirtualBoardroom',
						name: '13',
						label: this.$t('home.btn4'),
						urls: '../home/VirtualBoardroom',
						icon: 'logo-windows',
						iconSize: '14'
					}, {
						title: 'ESOP',
						name: '14',
						label: this.$t('home.btn5'),
						urls: '../home/ESOP',
						icon: 'md-person',
						iconSize: '16'
					}, {
						title: 'STO',
						name: '15',
						label: this.$t('home.btn6'),
						urls: '../home/STO',
						icon: 'md-star',
						iconSize: '16'
					}
				],
				BreadTitle: '主页',
				langList: [{
					title: '简体中文',
					type: 'cn'
				}, {
					title: 'English',
					type: 'en'
				}]
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods: {
			changeBreadTitle(names) {
				this.BreadTitle = names
				for(let i=0; i< this.slider.length; i++){
					if(this.slider[i].name == names){
						this.$router.push({
							path: this.slider[i].title,
							query:{only:this.$route.query.only}
						})
					}
				}
			},
			changeLangEvent(type) {
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
			goIndex(){
				this.$router.push({
					path:'/'
				})
			},
			menuActiveName(val){
				this.activeName = val
			},
			refreshLang(){
				if(this.$route.query.lang != undefined){
					this.changeLangEvent(this.$route.query.lang)
				}else{
					this.changeLangEvent(mutil.getSection('lang'))
				}
			},
			refreshAdmin(){
				let data = {
					"only": this.$route.query.only,
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/chain_list',
					data: Qs.stringify(data)
				}).then((response) => {
					if (response.data.state != 0) {
						this.$Notice.warning({
							title: '无该成员信息！'
						});
						this.$router.push({
							path: '/'
						})
					}
				})
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company',
					data: Qs.stringify({"only": this.$route.query.only})
				}).then((response) => {
					if (response.data.state == 0) {
						this.$store.dispatch('getUserContract',{
						  //contract: response.data.info.contract
						  contract: response.data.info.contract
						})
					}
				})
			},
			
		},
		created() {
			this.refreshLang();
			this.refreshAdmin();
		}
	}
</script>
<style>
	.ivu-card .ivu-card-body {
		padding: 0;
	}
	.ivu-card.world .ivu-card-body {
		width: 575px;
		height: 300px;
	}

	.content .ivu-card-bordered {
		border: 0;
	}

	.bread {
		margin-bottom: 15px;
	}
</style>
<style scoped>
	.page_logo {
		width: 100%;
		height: 64px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding: 15px;
	}

	.page_logo img {
		width: 100%;
		cursor: pointer;
	}

	.ivu-menu-vertical.ivu-menu-light:after {
		display: none;
	}

	.layout {
		border: 0;
		min-height: 100vh;
		min-width: 1280px;
	}

	.slider {
		position: fixed;
		height: 100vh;
		left: 0;
		overflow: auto;
	}

	.board {
		margin-left: 200px;
		border: 0;
	}

	.header {
		background: #fff;
		box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .1);
		display: flex;
		justify-content: space-between;
	}

	.content {
		margin: 15px 20px 0;
	}

	.ivu-card {
		border: 0;
		box-shadow: none !important;
		background-color: transparent !important;
	}

	.ivu-card-bordered {}
</style>
