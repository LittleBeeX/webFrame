<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">创建期权奖励</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="24">
					<Card :bordered="false" class="capTable">
						<div class="fromBoard">
							<Form :model="plan" label-position="left" :label-width="140" inline ref="plan" :rules="ruleInline">
								<FormItem label="机制名称" prop="name">
									<Input v-model="plan.name" size="large" :placeholder="$t('indexUser.msg1_1')"></Input>
								</FormItem>	<br/>
								<FormItem label="机制名称" prop="name">
									<Input v-model="plan.name" size="large" :placeholder="$t('indexUser.msg1_1')"></Input>
								</FormItem>
						</Form>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	export default {
		props:['BreadTitle'],
		data(){
			return {
					plan: {
							name: ''
					},
					ruleInline: {
							name: [
									{ required: true, message: 'Please fill in the user name', trigger: 'blur' }
							]
					}
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods:{
			
		}
	}
</script>
<style scoped lang="stylus">
	.bread
		display:flex;
		display:-webkit-flex;
		justify-content: space-between;
		align-items: center;
	
	.capTable
		min-height: 300px
		background: white
		.fromBoard
			padding: 50px 16px;
			.ivu-form-item
				min-width: 600px
</style>
<style>
	.fromBoard .ivu-form .ivu-form-item-label{
			font-size: 14px;
			font-weight: 700;
	}
</style>