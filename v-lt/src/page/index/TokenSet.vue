<template>
	<div class="index-board">
		<div class="inner">
			<h3>令牌设置</h3>
			<div>
				 <Form :model="userIdent" label-position="left" :label-width="100" inline>
					<FormItem label="支持占比" class="w96">
						<Input v-model="userIdent.Name" placeholder="请输入支持占比">
							 <span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem label="法定人数">
						<Input v-model="userIdent.Surname" placeholder="请输入法定人数">
							<span slot="append">%</span>
						</Input>
					</FormItem>
					<FormItem label="投票持续时间">
						<Input v-model="userIdent.Sex" placeholder="请输入投票持续时间">
							<span slot="append">H</span>
						</Input>
					</FormItem>
					<FormItem label="令牌名称" class="w96">
						<Input v-model="userIdent.nationality" placeholder="请输入令牌名称"></Input>
					</FormItem>
					<FormItem label="令牌符号">
						<Input v-model="userIdent.nationality" placeholder="请输入令牌名称"></Input>
					</FormItem>
					<FormItem label="令牌数量">
						<Input v-model="userIdent.nationality" placeholder="请输入令牌名称"></Input>
					</FormItem>
				</Form>
				<div class="btn-con">
				    <Button type="primary" @click="backConfig()">
						<Icon type="ios-arrow-back"></Icon>
						上一步
					</Button>
					<Button type="primary" @click="goCompany()">
						下一步
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				userIdent: {
                    Name: '',
                    Surname: '',
                    Sex: '',
					nationality:'',
					BirDate:'',
					Address:''
                },
			}
		},
		methods:{
			backConfig(){
				this.$router.push({path:'CompanyIdent'})
			},
			goCompany(){
				this.$router.push({path:'TokenPayment'})
			}
		}
	}
</script>
<style scoped lang="stylus">
	.index-board
		padding: 50px 100px !important;
		h3
			font-size:26px;
			margin-bottom: 20px;
		.ivu-form-item
			min-width: 330px;
			.ivu-form-item-label
				font-size: 16px;
		.w96
			width: 96%;
		.btn-con
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 50px;
</style>