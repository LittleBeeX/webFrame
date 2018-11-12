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
			<div>这是overview文件</div>
			<h3>
				{{$t('m.music')}}
			</h3>
		</Card>
		
	</div>
</template>

<script>
	export default {
		props:['BreadTitle'],
		mounted(){
			
		}
	}
</script>