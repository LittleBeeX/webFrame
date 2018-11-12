<template>
		<div class="index-board">
			<div class="inner">
				<h2>欢迎来到LittleBeeX</h2>
				<p class="node">
					当前节点：以太坊测试网(Ropsten)
					<span class="hint">需解锁Metamask钱包，并选择所需的服务器节点</span>
				</p>
				<div class="config-item">
					<label>创建一个新组织，并开始KYC组织认证</label>
					<Button type="primary">开始创建</Button>
				</div>
				<div class="config-item">
					<label>打开现有组织</label>
					<p><Input v-model="companyName" size="large" /></p>
					<Button type="primary" @click="openOrganization">打开组织</Button>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				companyName:''
			}
		},
		methods:{
			openOrganization(){
				this.$router.push({path:'UserIdent'})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.index-board
		padding: 50px 100px !important;
		h2
			font-size: 36px;
			margin-bottom: 40px;
			color: #333333;
		.node
			font-size: 20px;
			margin-bottom: 40px;
			.hint
				display: block;
				color: #bbbbbb;
				font-size: 14px;
		.config-item
			label
				display:block;
				margin: 30px 0;
				font-size: 20px;
			p
				display: inline-block;
</style>