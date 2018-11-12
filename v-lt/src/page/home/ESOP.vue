<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">{{BreadTitle}}</div>
			<div class="b_func">
				<div style="width:300px">
					<Input search enter-button placeholder="Enter something..." />
				</div>
			</div>
		</Breadcrumb>
		<Card shadow>
			<div>这是esop文件</div>
		</Card>
		
	</div>
</template>

<script>
	export default {
		props:['BreadTitle']
	}
</script>