<template>
	<div class="index-board">
		<div class="inner">
			<h2>{{$t('indexConfig.msg1')}}</h2>
			<p class="node">
				{{$t('indexConfig.msg2')}}
				<span class="hint">{{$t('indexConfig.msg3')}}</span>
				<Button type="primary" @click="takeRopstenToken" :disabled="isHaveETH">{{$t('indexConfig.btn1')}}</Button>
				<Button type="primary"><a href="https://faucet.ropsten.be/" target="_blank">{{$t('indexConfig.btn2')}}</a></Button>
			</p>
			<div class="config-item">
				<label>{{$t('indexConfig.msg4')}}</label>
				<Button type="primary" @click="createOrganization" :disabled="isHaveETH">{{$t('indexConfig.btn3')}}</Button>
				<br />
				<p v-if="isHaveETH">{{$t('indexConfig.msg5')}}</p>
			</div>
			<div class="config-item">
				<label>{{$t('indexConfig.msg6')}}</label>
				<p><Input v-model="companyName" size="large" :maxlength="20" type="text" @on-keydown.enter="openOrganization"/></p>
				<Button class="open" type="primary" @click="openOrganization" :disabled="!isClick" :loading="loading">{{$t('indexConfig.btn4')}}</Button>
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
			haha(){console.log(797)},
			openOrganization(){
				if(this.isClick == false){return false}
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
							if(response.data.info.company.state == 2 && response.data.info.chain.state == 2){
								this.$router.push({
									path:'../home/Overview',
									query:{only:this.companyName}
								})
							}else if(response.data.info.company.state != 2){
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
							title: this.$t('errorMsg1')
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
					if(this.balanceOf >= 100000){
						this.$Notice.warning({
							title: this.$t('index.errorMsg1')
						});
					}else{
						const _this = this
						const paycode = "" + 100000 + String(10 ** 18).split("").slice(1).join("")
						this.$store.state.tokenInstance().methods.airdropNum(this.Address).send({
							from: this.Address,
							gasPrice: '40000000000'
						}).on('transactionHash',function( receipt){
							_this.$Spin.show({
				                render: (h) => {
				                    return h('div', [
				                        h('Icon', {
				                            'class': 'demo-spin-icon-load',
				                            props: {
				                                type: 'ios-loading',
				                                size: 32
				                            }
				                        }),
				                        h('div', _this.$t('tipMsg1'))
				                    ])
				                }
				            });
						}).then(result => {
							this.$Spin.hide();
							this.$Notice.success({
								 title : this.$t('index.tipMsg1')
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
				margin-top: 30px;
				a
					color: white !important; 
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
				margin-bottom: 5px;
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

