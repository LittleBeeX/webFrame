<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">{{$t('homeTransfer.msg0')}}</div>
		</Breadcrumb>
		<Row>
			<Col span="24">
				<Card :bordered="false" class="transfer">
					<p slot="title">{{$t('homeTransfer.msg1')}}</p>
					<div class="msgBoard">
						<p>
							<b>{{$t('homeTransfer.msg1_1')}}</b>
							 {{Address}}
						</p>
						<p>
							<b>{{$t('homeTransfer.msg1_2')}}</b>
							<Select v-model="transferAddress" size="large" style="width: 500px" :placeholder="$t('homeTransfer.msg1_3')">
								<Option v-for="(item,index) in addressList" :value="item.address" :key="index" :label="item.address">
									<span>{{ item.address }}</span>
									<span style="float:right;color:#ccc">{{item.name}}</span>
								</Option>
							</Select> 
						</p>
						<p>
							<b>{{$t('homeTransfer.msg1_4')}}</b>
							<InputNumber v-model="transferNumber" :placeholder="$t('homeTransfer.msg1_5')"  style="width: 500px"></InputNumber>
							<span class="nums">{{transferCode}}</span>
						</p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="transfer(transferAddress,transferNumber)">{{$t('homeTransfer.btn1')}}</Button>
						</div>
					</div>
				</Card>
			</Col>
			<Col span="24">
				<Card :bordered="false" class="mint">
					<p slot="title">{{$t('homeTransfer.msg2')}}</p>
					<div class="msgBoard">
						<p>
							<b>{{$t('homeTransfer.msg2_1')}}</b>
							 {{Address}}
						</p>
						<p>
							<b>{{$t('homeTransfer.msg2_2')}}</b>
							<Select v-model="mintAddress" size="large" :placeholder="$t('homeTransfer.msg2_3')" style="width: 500px;height:34px">
								<Option v-for="(item,index) in addressList" :value="item.address" :key="index" :label="item.address">
									<span>{{ item.address }}</span>
									<span style="float:right;color:#ccc">{{item.name}}</span>
								</Option>
							</Select> 
						</p>
						
						<p>
							<b>{{$t('homeTransfer.msg2_4')}}</b>
							<InputNumber v-model="mintNumber" :placeholder="$t('homeTransfer.msg2_5')"  style="width: 500px;height:34px"></InputNumber>
							<span class="nums">{{mintCode}}</span>
						</p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="mint(mintAddress,mintNumber)">{{$t('homeTransfer.btn1')}}</Button>
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
				allTokenNum:0,
				addressList:[],
				mappingMsg:[]
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			}),
			mintCode(){
				if(this.mintNumber == 0 || this.mintNumber == NaN){
					return this.$t('homeTransfer.msg3') + '0%'
				}else{
					return this.$t('homeTransfer.msg3')+ (this.mintNumber * 100 / Number(this.allTokenNum + this.mintNumber)).toFixed(2) +'%'
				}
			},
			transferCode(){
				if(this.transferNumber == 0 || this.transferNumber == NaN){
					return this.$t('homeTransfer.msg3') + '0%'
				}else{
					return this.$t('homeTransfer.msg3')+ (this.transferNumber * 100 / Number(this.allTokenNum)).toFixed(2) +'%'
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
				if (!(/(^[1-9]\d*$)/.test(nums))) { 
		　　　　　	this.$Notice.warning({
						title: this.$t('homeTransfer.errorMsg1')
					})
		　　　　　　return false; 
		　　　　}else { 
		　　　　　　let _this = this;
					this.$store.state.userInstance().methods.getPosition(address).call()
					.then(result => {
						if(result != 0){
							this.$store.state.userInstance().methods.addVoteList(1,this.Address,address,nums,'给'+address+'增发'+nums+'枚Token').send({
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
								let codes = result.events.createVote.returnValues.codes
								this.$Spin.hide()
								let msg = this.mappingMsg[this.Address] + this.$t('homeTransfer.msg4_1') + nums + 'TOKEN' + this.$t('homeTransfer.msg5') + this.mappingMsg[address] + this.$t('homeTransfer.msg6') + this.mintCode + this.$t('homeTransfer.msg7')
								this.takeVote(address,1,nums,msg,codes)
							})
						}else{
							this.$Notice.warning({
								title: this.$t('homeTransfer.errorMsg2')
							})
						}
					})
		　　　　} 
			},
			transfer(address,nums){
				if (!(/(^[1-9]\d*$)/.test(nums))) { 
		　　　　　	this.$Notice.warning({
						title: this.$t('homeTransfer.errorMsg1')
					})
		　　　　　　return false; 
		　　　　}else { 
					let _this = this;
					this.$store.state.userInstance().methods.getPosition(address).call()
					.then(result => {
						if(result != 0){
							this.$store.state.userInstance().methods.addVoteList(2,this.Address,address,nums,'给'+address+'转让'+nums+'枚Token').send({
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
								let codes = result.events.createVote.returnValues.codes
								this.$Spin.hide();
								let msg = this.mappingMsg[this.Address] + this.$t('homeTransfer.msg4_1') + nums + 'TOKEN' + this.$t('homeTransfer.msg5') + this.mappingMsg[address] + this.$t('homeTransfer.msg6') + this.transferCode + this.$t('homeTransfer.msg7')
								this.takeVote(address,2,nums,msg,codes)
							})
						}else{
							this.$Notice.warning({
								title: this.$t('homeTransfer.errorMsg2')
							})
						}
					})
				}
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
						this.$Notice.success({
							title: this.$t('homeTransfer.tipMsg1')
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
							title: this.$t('errorMsg8')
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
			this.$emit('menuActiveName', "12")
			let data = {
				"only":this.$route.query.only
			};
			this.$axios({
				method: 'post',
				url: '/index.php/cn/home/node_se/chain_list',
				data: Qs.stringify(data)
			}).then((response) => {
				if(response.data.state == 0){
					let userList = response.data.info
					let obj = []
					for(let i=0;i<userList.length;i++){
						if(userList[i].address != this.Address){
							obj.push({
								address:userList[i].address,
								name: userList[i].surname + userList[i].name,
							})
						}
						this.mappingMsg[userList[i].address] = userList[i].surname + userList[i].name
					}
					this.addressList = obj;
					return true;
				}else{
					this.$Notice.warning({
						title: this.$t('errorMsg8')
					});
					this.$router.push({
						path:'/'
					})
					return false;
				}
			})
			this.$store.state.userInstance().methods.totalSupply().call()
				.then(result => {
					this.allTokenNum = result / 10 ** 18
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
				span.nums
					margin-left: 20px
				b
					margin-right: 16px
					display: inline-block
					width: 140px
				&:first-child
					margin-top: 0
			.btn
				margin-top: 30px
	.mint
		margin-top: 30px
</style>