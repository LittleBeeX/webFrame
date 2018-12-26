<template>
	<div class="index-board">
		<div class="approve">
			<div class="content-describe">
				您需要授权一定量的LT用于支付<br/>
				如果剩余额度小于支付额度，将支付失败<br>
				剩余Token额度：{{balanceOf}} LT<br>
				剩余授权额度：{{approveGetVal}} LT<br>
				设置授权额度：<Input v-model="approveSetVal" size="large" style="width: 150px" />
			</div>
			<div class="btn-con">
				<Button type="primary" size="large" @click="goApprove">授权</Button>
			</div>
		</div>
		<div class="payment">
			<div class="content-describe" v-if="tipMsg == 1">
				您的自治组织准备好了<br/>
				现在需要您支付{{orderNum}}LT，<br/>LittleBeeX将审核您已提交的信息，审核通过后，<br/>您将在LittleBeeX上治理您的公司！
			</div>
			<div class="content-describe" v-else>
				您的个人认证信息已提交！<br/>
				现在需要您支付{{orderNum}}LT，<br/>LittleBeeX将审核您已提交的信息，审核通过后，<br/>您将成功加入该组织并进行在线治理！
			</div>
			<div class="btn-con">
				<Button type="primary" size="large" v-if="isClick" @click="goPay">支付LT</Button>
				<Button type="primary" size="large" :disabled="true" v-else>已支付</Button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Qs from 'qs'
	export default {
		data(){
			return{
				tipMsg: 2,
				balanceOf: 0,
				approveGetVal: 0,
				approveSetVal: 0,
				orderNum: 0,
				isClick: true
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			goPay(){
				if(this.approveGetVal >= this.orderNum){
					if(this.balanceOf >= this.orderNum){
						let _this = this;
						const paycode = "" + this.orderNum + String(10 ** 18).split("").slice(1).join("")
						let masterAddress = "0xDBD4c2a85423124a2Da3A656A455df4D6C873979"
						this.$store.state.tokenInstance().methods.transferFrom(this.Address,masterAddress, paycode).send({
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
				                        h('div', '数据请求中')
				                    ])
				                }
				            });
						}).then(result => {
							this.$Spin.hide();
							console.log(result.transactionHash)
							this.$Spin.hide();
							let data = {
								"address": this.Address,
								"only": this.$route.query.only,
								"jiaoyi_address":result.transactionHash
							};
							this.$axios({
								method: 'post',
								url: '/index.php/cn/home/node_su/order',
								data: Qs.stringify(data)
							}).then((response) => {
								this.$Notice.warning({
									title: '操作成功！等待人员审核'
								});
								this.isClick = false
								this.allowance()
								this.balanceof()
								this.$router.push({
									path:'/'
								})
							}) 
						})
					}else{
						this.$Notice.warning({
							title: '没有足够的Token用来支付！'
						});
					}
				}else{
					this.$Notice.warning({
						title: '请增加授权额度！'
					});
				}
			},
			goApprove(){
				let _this = this;
				const paycode = this.approveSetVal == 0 ? 0 : "" + this.approveSetVal + String(10 ** 18).split("").slice(1).join("")
				this.$store.state.tokenInstance().methods.approve(this.Address, paycode).send({
					from: this.Address,
					gasPrice: '40000000000'
				}).on('transactionHash',function(number, receipt){
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
		                        h('div', '数据请求中')
		                    ])
		                }
		            });
				}).then(result => {
					this.$Notice.warning({
						title: '授权成功！'
					});
					this.$Spin.hide();
					this.approveGetVal = this.approveSetVal
					this.approveSetVal = 0
				})
			},
			allowance(){
				this.$store.state.tokenInstance().methods.allowance(this.Address, this.Address).call({
					from: this.Address
				}).then(result => {
					this.approveGetVal = result / 10 ** 18
				})
			},
			balanceof(){
				this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({
					from: this.Address
				}).then(result => {
					this.balanceOf = (result / 10 ** 18).toFixed(0)
				})
			},
			getOrderNum(){
				let data = {
					"address": this.Address,
					"only": this.$route.query.only
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/order',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.tipMsg = response.data.info.type 
						this.orderNum = response.data.info.money
					}else{
						this.$Notice.warning({
							title: '无当前组织信息！'
						});
						this.$router.push({
							path:'/'
						})
					}
				}) 
			}
		},
		mounted(){
			this.allowance()
			this.balanceof()
			this.getOrderNum()
		}
	}
</script>
<style scoped lang="stylus">
	.index-board
		padding: 80px 100 !important;
		height: 570px !important;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: none !important;
		background: transparent !important;
		.approve,.payment
			display: flex;
			display: -webkit-flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 400px;
			box-shadow: 0 2px 7px rgba(0,0,0,0.15);
			padding: 50px 70px;
			background-color: #fff;
			.content-describe
				font-size: 16px;
				width: 100%;
				line-height: 36px;
			.btn-con
				text-align: center;
				button
					padding: 8px 40px;
					font-size: 16px;
</style>