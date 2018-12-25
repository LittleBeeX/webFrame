<template>
	<div class="index-board">
		<div class="inner">
			<h2>欢迎来到LittleBeeX</h2>
			<p class="node">
				当前节点：以太坊测试网(Ropsten)
				<span class="hint">需解锁Metamask钱包，并选择所需的服务器节点</span>
				<Button type="primary" @click="takeRopstenToken">获取测试Token</Button>
			</p>
			<div class="config-item">
				<label>创建一个新组织，并开始KYC组织认证</label>
				<Button type="primary" @click="createOrganization" :disabled="isHaveETH">开始创建</Button>
				<br />
				<p v-if="isHaveETH">你的ETH余额为0，请先获取不少于0.1ETH</p>
			</div>
			<div class="config-item">
				<label>打开现有组织</label>
				<p><Input v-model="companyName" size="large" :maxlength="20" type="text"/></p>
				<Button class="open" type="primary" @click="openOrganization" :disabled="!isClick" :loading="loading">打开组织</Button>
			</div>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	import Web3 from 'web3'
	export default {
		data(){
			return {
				companyName:'',
				loading: false,
				isClick: false,
				isHaveETH: true,
				balanceOf: 0
			}
		},
		computed: mapState({
			Address: state => state.web3.coinbase
		}),
		methods:{
			openOrganization(){
				let data = {
					"only":this.companyName,
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						if(response.data.info.company.creator){
							if(response.data.info.company.state == 2){
								this.$router.push({
									path:'../home/Overview',
									query:{only:this.companyName}
								})
							}else if(response.data.info.chain.state == 2){
								this.$router.push({
									path:'companyIdent',
									query:{only:this.companyName}
								}) 
							}else{
								this.$router.push({
									path:'UserIdent',
									query:{only:this.companyName}
								}) 
							}	
						}else{
							if(response.data.info.chain.state == 2){
								this.$router.push({
									path:'../home/Overview',
									query:{only:this.companyName}
								})
							}else{
								this.$router.push({
									path:'UserIdent',
									query:{only:this.companyName}
								}) 
							}
						}
						
					}else if(response.data.state == 2){
						this.$Notice.warning({
							title: '暂无当前组织！'
						});
					}else if(response.data.state == 4){
						this.$router.push({
							path:'UserIdent',
							query:{only:this.companyName}
						}) 
					}
				})
			},
			createOrganization(){
				this.$router.push({path:'UserIdent'});
			},
			takeRopstenToken(){
				this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({
					from: this.Address
				}).then(result => {
					this.balanceOf = result / 10 ** 18
					console.log(this.balanceOf,this.balanceOf >= 100000)
					if(this.balanceOf >= 100000){
						this.$Notice.warning({
							title: '已经获取足够Token，请勿重新获取！'
						});
					}else{
						const _this = this
						const paycode = "" + 100000 + String(10 ** 18).split("").slice(1).join("")
						this.$store.state.tokenInstance().methods.airdropNum(this.Address).send({
							from: this.Address
						}).on('transactionHash',function( receipt){
							_this.$Spin.show();
						}).then(result => {
							this.$Spin.hide();
							this.$Notice.info({
								title: '您的测试Token已获取成功，请进入Metamask钱包查看！'
							});
						})
					}
				})
			}
		},
		watch:{
			companyName(){
				this.isClick = this.companyName == ''? false : true;
			}
		},
		created(){
			let web3 = new Web3(window.web3.currentProvider)
			web3.eth.getBalance(this.Address).then(result => {
				this.isHaveETH = result > 0 ? false : true
			});
		}
	}
</script>

<style scoped lang="stylus">
	.index-board
		background: url(../../assets/images/index-img.png) no-repeat;
		background-position: 860px center;
		background-size: 57%;
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
			button
				font-size: 16px
				padding: 8px 20px 
				margin-top: 30px
				&.open
					font-size: 14px
					padding: 6px 20px 
					margin-bottom: 0px
		.config-item
			font-size: 14px
			label
				display:block;
				margin: 30px 0;
				font-size: 20px;
			button
				font-size: 16px
				padding: 8px 20px
				margin-bottom: 5px 
				&.open
					font-size: 14px
					padding: 6px 20px 
			p
				display: inline-block
				color: #bbb
				
				
</style>
<style>
	.index-board .config-item button.open{
		margin-bottom: 0;
	}
</style>

