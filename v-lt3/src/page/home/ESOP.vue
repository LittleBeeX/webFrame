<template>
	<div>
		<div>
			<div class="isDevelopment">
				<Icon type="md-alert" size="50" color="#515a6e"/>
				<p>{{$t('homeSTO.msg0')}}</p>
				<p>{{$t('homeSTO.msg1')}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="stylus">
	.isDevelopment
		margin: 100px auto 0
		width: 300px
		padding: 50px 0;
		background: white
		border-radius: 4px
		text-align: center
		i
			margin-bottom: 25px;
		p
			line-height: 30px;
			font-size: 16px;
		
</style>