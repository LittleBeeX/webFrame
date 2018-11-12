<template>
	<div class="index-board">
		<div class="content-describe">
			您的自治组织准备好了！<br/>
			现在需要您支付1000LT，我们将审核您已提交的信息，审核通过后，<br/>您将在LittleBeeX上治理您的公司！
		</div>
		<div class="btn-con">
			<Button type="primary" size="large" @click="goPay">支付LT</Button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		methods:{
			goPay(){
				this.$router.push({path:'../home/Overview'})
			}
		}
	}
</script>
<style scoped lang="stylus">
	.index-board
		padding: 100px 100px !important;
		height: 470px !important;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		.content-describe
			font-size: 20px;
			width: 100%;
			line-height: 36px;
		.btn-con
			text-align: center;
			button
				padding: 12px 30px;
				font-size: 16px;
</style>