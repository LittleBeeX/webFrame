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
			<Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" class="slider-menu" @on-select="changeBreadTitle">
				<MenuItem :name="item.name" :itemName="item.title" v-for="item in slider" :title="item.urls">
				<Icon :size="item.iconSize" :type="item.icon" />
				{{item.name}}
				</MenuItem>
			</Menu>
		</Sider>
		<Layout class="board">
			<Header class="header">
				<div class="header-title"></div>
				<Dropdown trigger="click">
					<Button type="primary">
						语言切换
						<Icon type="ios-arrow-down"></Icon>
					</Button>
					<DropdownMenu slot="list">
						<DropdownItem @click="changeLangEvent(item.goType)" :types="item.type" v-for="item in langList">{{item.title}}</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Header>
			<Content class="content">
				<router-view :BreadTitle="BreadTitle"></router-view>
			</Content>
		</Layout>
	</div>
</template>
<script>
	import Qs from 'qs'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				slider: [{
					title: 'Overview',
					name: '主页',
					urls: '../home/Overview?only',
					icon: 'md-home',
					iconSize: '16'
				}, {
					title: 'CapTable',
					name: '组织结构',
					urls: '../home/CapTable?only',
					icon: 'ios-apps',
					iconSize: '16'

				}, {
					title: 'MintTransfer',
					name: '增发和转让',
					urls: '../home/MintTransfer?only',
					icon: 'md-repeat',
					iconSize: '16'
				}, {
					title: 'VirtualBoardroom',
					name: '虚拟会议室',
					urls: '../home/VirtualBoardroom?only',
					icon: 'logo-windows',
					iconSize: '14'
				}, {
					title: 'ESOP',
					name: '员工期权激励',
					urls: '../home/ESOP?only',
					icon: 'md-person',
					iconSize: '16'
				}, {
					title: 'STO',
					name: '证券代币发行',
					urls: '../home/STO?only',
					icon: 'md-star',
					iconSize: '16'
				}],
				BreadTitle: '主页',
				langList: [{
					title: '简体中文',
					type: 'zh-CN',
					goType: 'en-US'
				}, {
					title: 'English',
					type: 'en-US',
					goType: 'ko-KR'
				}, {
					title: '한글',
					type: 'ko-KR',
					goType: 'it-JP'
				}, {
					title: '日本語',
					type: 'it-JP',
					goType: 'zh-CN'
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
				if (confirm('确定切换语言吗？')) {
					this.$i18n.locale = type
				}
			},
			goIndex(){
				console.log(987);
				this.$router.push({
					path:'/'
				})
			}
		},
		created() {
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
		}
	}
</script>
<style>
	.ivu-card .ivu-card-body {
		padding: 0;
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
