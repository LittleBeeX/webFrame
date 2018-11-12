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
			<div class="page_logo"></div>
			<Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" class="slider-menu" @on-select="changeBreadTitle">
				<MenuItem :name="item.name" :itemName="item.title" v-for="item in slider" :to="item.urls" :title="item.urls">{{item.name}}</MenuItem>
			</Menu>
		</Sider>
		<Layout class="board">
			<Header class="header">
				<div class="header-title"></div>
				<Button type="info" @click="changeLangEvent">Info</Button>
			</Header>
			<Content class="content">
				<router-view :BreadTitle="BreadTitle"></router-view>
			</Content>
		</Layout>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				slider: [{
					title: 'Overview',
					name: '主页',
					urls: '../home/Overview'
				}, {
					title: 'CapTable',
					name: '股权结构表',
					urls: '../home/CapTable'
				}, {
					title: 'MintTransfer',
					name: '增发和转让',
					urls: '../home/MintTransfer'
				}, {
					title: 'VirtualBoardroom',
					name: '虚拟会议室',
					urls: '../home/VirtualBoardroom'
				}, {
					title: 'ESOP',
					name: '员工期权激励',
					urls: '../home/ESOP'
				}, {
					title: 'STO',
					name: '证券代币发行',
					urls: '../home/STO'
				}],
				BreadTitle: '主页'
			}
		},
		methods: {
			changeBreadTitle(names) {
				this.BreadTitle = names
			},
			changeLangEvent() {
				if(confirm('确定切换语言吗？')){
					console.log(this.lang);
					if ( this.$i18n.locale === 'zh-CN' ) {
						this.$i18n.locale = 'en-US'
						return
					}if ( this.$i18n.locale === 'en-US' ) {
						this.$i18n.locale = 'ko-KR'
						return
					}if ( this.$i18n.locale === 'ko-KR' ) {
						this.$i18n.locale = 'it-JP'
						return
					}else {
						this.$i18n.locale = 'zh-CN'
						return
					}
				}
			}
		}
	}
</script>
<style scoped>
	.slider-menu {
		padding: 10px 0;
	}

	.page_logo {
		width: 100%;
		height: 64px;
		border-bottom: 1px solid rgb(232, 232, 232);
	}

	.ivu-menu-vertical.ivu-menu-light:after {
		display: none;
	}

	.layout {
		border: 0;
		min-height: 100vh;
		min-width: 100vh;
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
	}

	.content {
		margin: 15px 20px 0;
	}

	.bread {
		margin: 0 20px 15px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.ivu-card {
		border: 0;
		box-shadow: none !important;
	}

	.ivu-card-bordered {}
</style>
