<template>
	<div class="index-board">
		<div class="inner">
			<h3>公司信息认证</h3>
			<div>
				 <Form :model="companyIdent" label-position="left" :label-width="100" inline ref="companyIdent" :rules="ruleInline">
					<FormItem label="公司名称" class="w96" prop="Name">
						<Input v-model="companyIdent.Name" placeholder="请输入公司名称"></Input>
					</FormItem><br/>
					<FormItem label="注册号码" prop="Number">
						<Input v-model="companyIdent.Number" number placeholder="请输入注册号码"></Input>
					</FormItem>
					<FormItem label="注册地点" prop="Site">
						<Input v-model="companyIdent.Site" placeholder="请输入注册地点"></Input>
					</FormItem><br/>
					<FormItem label="注册资本" prop="Fund">
						<Input v-model="companyIdent.Fund" placeholder="请输入注册资本"></Input>
					</FormItem>
					<FormItem label="成立日期" prop="BirDate">
						<DatePicker style="width:100%" type="date" placeholder="成立日期" v-model="companyIdent.BirDate"></DatePicker>
					</FormItem><br/>
					<FormItem label="组织名称" class="w96" prop="IdentCode">
						<Input search enter-button placeholder="企业组织名称"  v-model="companyIdent.IdentCode" @click.native="isIdentCode(companyIdent.IdentCode)"/>
					</FormItem>
				</Form>
				<Alert class="w96" v-if="approve.type">{{approve.text}}</Alert>
				<div class="btn-con">
				    <Button type="primary" @click="backUser()">
						<Icon type="ios-arrow-back"></Icon>
						上一步
					</Button>
					<Button type="primary" @click="goTokenSet('companyIdent')">
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
				companyIdent: {
                    Name: '',
                    Number: '',
                    Site: '',
					Fund:'',
					BirDate:'',
					IdentCode:''
                },
				approve:{
					type: false,
					text:'当前公司信息审核中'
				},
				ruleInline:{
					Name:[
						{required:true, message:'请输入公司名称', trigger:'blur'}
					],
					Number:[
						{required:true, message:'请输入注册号码'},
						{type: 'number', message: '注册号码必须为数字值'}
					],
					Site:[
						{required:true, message:'请输入注册地点', trigger:'blur'}
					],
					Fund:[
						{required:true, message:'请输入注册资本', trigger:'blur'}
					],
					BirDate:[
						{required:true, message:'请选择成立日期', trigger:'change', type:'date'}
					],
					IdentCode:[
						{required:true, message:'请输入组织名称', trigger:'blur'}
					]
				}
			}
		},
		methods:{
			backUser(){
				this.$router.push({path:'UserIdent'})
			},
			goTokenSet(name){
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$router.push({path:'TokenSet'})
					} else {
						this.$Message.error('请正确输入表单信息！');
					}
				})
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
			width: 96%;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 50px;
		.hint
			font-size: 14px;
			label
				display: inline-block;
				width: 100px;
</style>