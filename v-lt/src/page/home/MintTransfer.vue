<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">增发和转让</div>
		</Breadcrumb>
		<Row>
			<Col span="24">
				<Card :bordered="false" class="mint">
					<p slot="title">增发</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>{{Address}}</p>
						<p><b>目标地址</b><Input v-model="mintAddress" placeholder="请输入目标地址"  style="width: 500px"/></p>
						<p><b>增发数量</b><Input v-model="mintNumber" placeholder="请输入增发数量"  style="width: 500px"/></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="mint(mintAddress,mintNumber)">执行</Button>
						</div>
					</div>
				</Card>
			</Col>
			<Col span="24">
				<Card :bordered="false" class="transfer">
					<p slot="title">转让</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>{{Address}}</p>
						<p><b>目标地址</b><Input v-model="transferAddress" placeholder="请输入目标地址" style="width: 500px"/></p>
						<p><b>转让数量</b><Input v-model="transferNumber" placeholder="请输入转发数量"  style="width: 500px"/></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="transfer(transferAddress,transferNumber)">执行</Button>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Qs from 'qs'
	export default {
		data(){
			return{
				mintAddress:'',
				mintNumber:'',
				transferAddress:'',
				transferNumber:''
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods:{
			mint(address,nums){
				if(address != '' && nums != ''){
					this.$Modal.confirm({
						title: '增发',
						content: '<p>确定给'+address+'<br/>增发'+nums+'枚Token吗</p>',
						onOk: () => {
							this.takeVote(1,address,1,nums,'给'+address+'增发'+nums+'枚Token')
						}
					});
				}
			},
			transfer(address,nums){
				 if(address != '' && nums != ''){
				 	this.$Modal.confirm({
				 		title: '转让',
				 		content: '<p>确定给'+address+'<br/>转让'+nums+'枚Token吗</p>',
				 		onOk: () => {
							this.takeVote(2,address,2,nums,'给'+address+'转让'+nums+'枚Token')
				 		}
				 	});
				 }
			},
			takeVote(state,address,type,nums,content){
				let data = {
					"only":this.$route.query.only,
					"state": state,
					"type": type,
					"content": content,
					"address": this.Address,
					"target": address,
					"number": nums
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_su/meeting',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.$Notice.info({
							title: '会议提交成功！'
						})
						this.$router.push({
							path:'VirtualBoardroom',
							query:{
								"only":this.$route.query.only
							}
						})
						return true
					}else if(response.data.state == 7){
						this.$Notice.warning({
							title: '组织内无目标成员信息！'
						})
						return false
					}else if(response.data.state == 9){
						this.$Notice.warning({
							title: '成员的Token数量不足！'
						})
						return false
					}else if(response.data.state>0 && response.data.state<5){
						this.$Notice.warning({
							title: '无当前组织信息！'
						})
						this.$router.push({
							path:'/'
						})
						return false
					}else{
						this.$Notice.warning({
							title: '操作失败！'
						})
						return false;
					}
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.mint,.transfer
		min-height: 300px
		.msgBoard
			padding: 20px 16px;
			p
				margin-top: 14px
				b
					margin-right: 16px
					display: inline-block
					width: 100px
				&:first-child
					margin-top: 0
			.btn
				margin-top: 30px
	.transfer
		margin-top: 30px
</style>