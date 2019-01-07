<template>
	<div class="index-board">
		<div class="approve">
			<div class="content-describe">
				{{$t('indePay.msg0')}}{{orderNum}}LT{{$t('indePay.msg1')}}<br/>
				{{$t('indePay.msg2')}}<br>
				{{$t('indePay.msg3')}}:{{balanceOf}} LT<br>
				{{$t('indePay.msg4')}}：{{approveGetVal}} LT<br>
				<div class="center">
					{{$t('indePay.msg5')}}：<Input v-model="approveSetVal" size="large" style="width: 150px" ><span slot="append">LT</span></Input>
				</div>
			</div>
			<div class="btn-con">
				<Button type="primary" size="large" @click="goApprove">{{$t('indePay.btn1')}}</Button>
			</div>
		</div>
		<div class="payment">
			<div class="content-describe" v-if="tipMsg == 2">
				{{$t('indePay.msg6')}}<br/>
				{{$t('indePay.msg7')}}{{orderNum}}LT，<br/>{{$t('indePay.msg8')}}<br/>{{$t('indePay.msg9')}}
			</div>
			<div class="content-describe" v-else>
				{{$t('indePay.msg6_1')}}<br/>
				{{$t('indePay.msg7')}}{{orderNum}}LT，<br/>{{$t('indePay.msg8')}}<br/>{{$t('indePay.msg9_1')}}
			</div>
			<div class="btn-con">
				<Button type="primary" size="large" v-if="isClick" @click="goPay">{{$t('indePay.btn2')}}</Button>
				<Button type="primary" size="large" :disabled="true" v-else>{{$t('indePay.btn3')}}</Button>
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
				                        h('div', _this.$t('tipMsg1'))
				                    ])
				                }
				            });
						}).then(result => {
							this.$Spin.hide();
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
									title: this.$t('indePay.tipMsg1')
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
							title: this.$t('indePay.errorMsg1')
						});
					}
				}else{
					this.$Notice.warning({
						title: this.$t('indePay.errorMsg2')
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
		                        h('div', _this.$t('tipMsg1'))
		                    ])
		                }
		            });
				}).then(result => {
					this.$Notice.success({
						title: this.$t('indePay.tipMsg2')
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
						this.approveSetVal = response.data.info.money
					}else{
						this.$Notice.warning({
							title: this.$t('errorMsg8')
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
		padding: 100px 0px !important;
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
			flex-basis: 500px
			box-shadow: 0 2px 7px rgba(0,0,0,0.15);
			padding: 50px;
			background-color: #fff;
			.center
				display: flex;
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