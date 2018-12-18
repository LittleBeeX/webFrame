<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">增发和转让</div>
		</Breadcrumb>
		<Row>
			<Col span="24">
				<Card :bordered="false" class="mint">
					<p slot="title">股权增发</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>{{Address}}</p>
						<p><b>目标地址</b><Input v-model="mintAddress" placeholder="请输入目标地址"  style="width: 500px"/></p>
						<p><b>增发数量</b><InputNumber v-model="mintNumber" placeholder="请输入增发数量"  style="width: 500px"></InputNumber><span>{{mintCode}}</span></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="mint(mintAddress,mintNumber)">发起决议</Button>
						</div>
					</div>
				</Card>
			</Col>
			<Col span="24">
				<Card :bordered="false" class="transfer">
					<p slot="title">股权转让</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>{{Address}}</p>
						<p><b>目标地址</b><Input v-model="transferAddress" placeholder="请输入目标地址" style="width: 500px"/></p>
						<p><b>转让数量</b><InputNumber v-model="transferNumber" placeholder="请输入转发数量"  style="width: 500px"></InputNumber><span>{{transferCode}}</span></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="transfer(transferAddress,transferNumber)">发起决议</Button>
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
				mintNumber:0,
				transferAddress:'',
				transferNumber:0,
				allTokenNum:0
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			}),
			mintCode(){
				if(this.mintNumber == 0 || this.mintNumber == NaN){
					return '约 0 %'
				}else{
					return '约 '+ this.mintNumber * 100 / Number(this.allTokenNum).toFixed(2) +' %'
				}
			},
			transferCode(){
				if(this.transferNumber == 0 || this.transferNumber == NaN){
					return '约 0 %'
				}else{
					return '约 '+ this.transferNumber * 100 / Number(this.allTokenNum).toFixed(2) +' %'
				}
			}
		},
		methods:{
			balanceof(){
				this.$store.state.userInstance().methods.totalSupply().call({
					from: this.Address
				}).then(result => {
					console.log(result)
				})
			},
			mint(address,nums){
				let _this = this;
				this.$store.state.userInstance().methods.isKyc(address).call()
				.then(result => {
					if(result){
						this.$store.state.userInstance().methods.addVoteList(1,this.Address,address,nums,'给'+address+'增发'+nums+'枚Token').send({
							from: this.Address
						}).on('transactionHash',function( receipt){
							_this.$Spin.show()
						}).then(result => {
							let codes = result.events.createVote.returnValues.codes
							this.$Spin.hide()
							this.takeVote(address,1,nums,'给'+address+'增发'+nums+'枚Token',codes)
						})
					}else{
						this.$Notice.warning({
							title: '目标需通过KYC认证！'
						})
					}
				})
			},
			transfer(address,nums){
				let _this = this;
				this.$store.state.userInstance().methods.isKyc(address).call()
				.then(result => {
					if(result){
						this.$store.state.userInstance().methods.addVoteList(2,this.Address,address,nums,'给'+address+'转让'+nums+'枚Token').send({
							from: this.Address
						}).on('transactionHash',function( receipt){
							_this.$Spin.show();
						}).then(result => {
							let codes = result.events.createVote.returnValues.codes
							this.$Spin.hide();
							this.takeVote(address,2,nums,'给'+address+'转让'+nums+'枚Token',codes)
						})
					}else{
						this.$Notice.warning({
							title: '目标需通过KYC认证！'
						})
					}
				})
				
			},
			takeVote(address,type,nums,content,codes){
				let data = {
					"only":this.$route.query.only,
					"type": type,
					"content": content,
					"address": this.Address,
					"target": address,
					"number": nums,
					"keyname": codes
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
					}else{
						this.$Notice.warning({
							title: '无当前组织信息！'
						})
						this.$router.push({
							path:'/'
						})
						return false
					}
				})
			}
		},
		created(){
			let data = {
				"only":this.$route.query.only
			};
			this.$axios({
				method: 'post',
				url: '/index.php/cn/home/node_se/company',
				data: Qs.stringify(data)
			}).then((response) => {
				if(response.data.state == 0){
					this.allTokenNum = response.data.info.token_number
					return true
				}else{
					this.$Notice.warning({
						title: '无当前组织信息！'
					})
					this.$router.push({
						path:'/'
					})
					return false
				}
			})
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
				span
					margin-left: 20px
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