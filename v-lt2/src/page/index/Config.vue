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
				<Button type="primary" @click="createOrganization">开始创建</Button>
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
	export default {
		data(){
			return {
				companyName:'',
				loading: false,
				isClick: false,
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
							this.$router.push({
								path:'UserIdent',
								query:{only:this.companyName}
							}) 
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
				if(this.Address  == null || this.Address  == ''){
					this.$Notice.warning({
							title: '请先登录metamask钱包，刷新后进行操作！',
					});
				}else{
					this.$router.push({path:'UserIdent'});
				}
			},
			takeRopstenToken(){
				this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({
					from: this.Address
				}).then(result => {
					this.balanceOf = result / 10 ** 18
					if(this.balanceOf >= 100000){
						this.$Notice.warning({
								title: '已经获取足够Token，请勿重新获取！',
						});
					}else{
						const paycode = "" + 100000 + String(10 ** 18).split("").slice(1).join("")
						this.$store.state.tokenInstance().methods.mint(this.Address, paycode).send({
							from: this.Address
						}).on('transactionHash',function( receipt){
							_this.$Spin.show();
						}).then(result => {
							this.$Spin.hide();
							this.$Notice.warning({
									title: '测试Token已发出，请注意收取！',
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
		.config-item
			label
				display:block;
				margin: 30px 0;
				font-size: 20px;
			button
				font-size: 16px
				padding: 8px 20px 
				&.open
					font-size: 14px
					padding: 6px 20px 
			p
				display: inline-block;
				
				
</style>

