<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">{{$t('homeVote.msg0')}}</div>
			<div class="b_func">
				<div class="searchForm">
					<RadioGroup v-model="searchType" class='radio' @on-change="changeSearchType(searchType)">
						<Radio :label="item.title" v-for="item in typeList" :value="item.vals"></Radio>
					</RadioGroup>
					<div>
						<Input  :placeholder="$t('homeVote.msg1')" v-model="searchInput"  style="width:300px">
							<Button slot="append" @click="searchVote(searchType)">
								<Icon type="ios-search" size="16"/>
							</Button>
						</Input>
					</div>
				</div>
				<div class="addVote">
					<Button type="primary" size="large" @click="isAddDrawer = !isAddDrawer" icon="md-barcode" >{{$t('homeVote.btn5')}}</Button>
				</div>
			</div>
		</Breadcrumb>
		<Row v-if="voteList.length > 0">
			<Col  :xs="24" :sm="12" :lg="8" v-for="item in voteList">
				<Card :bordered="false" class="voteItem">
					<p slot="title">
						<Tooltip max-width="300" :content="item.content" placement="bottom-start">
							<p class="tooltip-msg">{{item.content}}</p>
						</Tooltip>
					</p>
					<div class="msgBoard">
						<p><b>{{$t('homeVote.msg2')}}</b>{{item.start_time}}</p>
						<p><b>{{$t('homeVote.msg3')}}</b>{{item.last_time}}</p>
						<p><b v-if="item.type == 1">{{$t('homeVote.msg4_1')}}</b><b v-else>{{$t('homeVote.msg4')}}</b>{{item.name}}</p>
						<p><b>{{$t('homeVote.msg5')}}</b>{{item.state}}</p>
						<p><b>{{$t('homeVote.msg6')}}<span>（{{$t('homeVote.msg6_1')}}{{item.quorum}}%）</span></b> <Progress :percent="item.cnt" status="active" /></p>
						<p><b>{{$t('homeVote.msg7')}}<span>{{$t('homeVote.msg7_1')}}{{item.support}}%{{$t('homeVote.msg7_2')}}</span></b> <Progress :percent="item.yes_proportion" status="active" /></p>
						<p><b>{{$t('homeVote.msg8')}}</b> <Progress :percent="item.no_proportion" class="warningProgress"/></p>
						<div class="btn" v-if="item.btn_show">
							<Button type="success" size="large" icon="ios-checkmark-circle-outline" @click="userVote(1,item.id,item.keyname)">{{$t('homeVote.msg7')}}</Button>
							<Button type="info" size="large" icon="ios-close-circle-outline" @click="userVote(2,item.id,item.keyname)">{{$t('homeVote.msg8')}}</Button>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
		
		<div class="mouldBoard" v-else>
			<Card :bordered="false" class="mouldItem">
				<div class="msgBoard">
					<p>{{$t('homeVote.msg11')}}</p>
					<Button type="primary" @click="addVote()" size="large" icon="md-barcode" >{{$t('homeVote.btn5')}}</Button>
				</div>
			</Card>
		</div>
		<Drawer :title="$t('homeVote.msg9')" width="350" :closable="false" v-model="isAddDrawer" class="newVoteBoard">
			<div>
				<p>{{$t('homeVote.msg10')}}</p>
				<Input v-model="addVoteInput" type="textarea" :autosize="{minRows: 3,maxRows: 5}" :placeholder="$t('homeVote.msg10')" />
				<div class="btn">
					<Button type="success" long @click="takeVote">{{$t('homeVote.btn5')}}</Button>
				</div>
			</div>
		</Drawer>
		
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	import mutil from '@/util/mutil'
	export default {
		data(){
			return{
				searchInput: '',
				searchType: this.$t('homeVote.btn1'),
				addVoteInput: '',
				isShowDrawer: false,
				isAddDrawer: false,
				typeList:[
					{
						title:this.$t('homeVote.btn1'),
						vals: 4
					},{
						title:this.$t('homeVote.btn2'),
						vals: 0
					},{
						title:this.$t('homeVote.btn3'),
						vals: 1
					},{
						title:this.$t('homeVote.btn4'),
						vals: 2
					}
				],
				pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                },
				voteList:[],
				tokenAll:0
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			addVote(){
				this.$router.push({
					path:'MintTransfer',
					query:{
						"only":this.$route.query.only
					}
				})
			    this.$emit('menuActiveName', 12)
			},
			takeVote(){
				if(this.addVoteInput != ''){
					let _this = this;
					this.$store.state.userInstance().methods.addVoteList(0,this.Address,this.Address,0, this.addVoteInput).send({
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
						let data = {
							"only":this.$route.query.only,
							"type": 0,
							"content": this.addVoteInput,
							"address": this.Address,
							"keyname": codes
						};
						this.$axios({
							method: 'post',
							url: '/index.php/cn/home/node_su/meeting',
							data: Qs.stringify(data)
						}).then((response) => {
							if(response.data.state == 0){
								this.$Notice.success({
									title: this.$t('homeVote.tipMsg1')
								})
								this.mountedRefreshList()
								this.isAddDrawer = !this.isAddDrawer
								this.addVoteInput = ''
								return true
							}else{
								this.$Notice.warning({
									title: this.$t('errorMsg5')
								});
								this.$router.push({
									path:'/'
								})
								return false
							}
						})
					})
				}else{
					this.$Notice.warning({
						title: this.$t('homeVote.errorMsg7')
					});
				}
			},
			userVote(state,id,codes){
				let _this = this;
				let flag = state == 1 ? true : false
				this.$store.state.userInstance().methods.setVoteList(codes,flag).send({
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
					this.$Spin.hide()
					let data = {
						"only":this.$route.query.only,
						"state": state,
						"id": id,
						"address": this.Address
					};
					this.$axios({
						method: 'post',
						url: '/index.php/cn/home/node_su/vote',
						data: Qs.stringify(data)
					}).then((response) => {
						if(response.data.state == 0){
							this.$Notice.success({
								title: this.$t('homeVote.tipMsg2')
							});
							this.changeSearchType(this.searchType)
							return true
						}else{
							this.$Notice.warning({
								title: this.$t('errorMsg5')
							});
							this.$router.push({
								path:'/'
							})
							return false
						}
					})
				})
			},
			searchVote(title){
				let condition = this.returnTypeMsg(title) == 4 ? 0 : 1
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"search": this.searchInput,
					"state": this.returnTypeMsg(this.searchType),
					"condition": condition
				};
				//this.searchList(data)
			},
			changeSearchType(title){
				let condition = this.returnTypeMsg(title) == 4 ? 0 : 1
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"state": this.returnTypeMsg(title),
					"condition": condition
				};
				this.searchList(data)
			},
			searchList(newData){
				let data = newData
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/meeting_list',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let list = response.data.info
						for(let i=0; i<list.length;i++){
							list[i].start_time =  mutil.timestampToTime(list[i].start_time) 
							list[i].remnant = list[i].remnant > 0 ? list[i].remnant : 0
							list[i].last_time = this.$t('homeVote.msg3_1')+ list[i].remnant.toFixed(1) +this.$t('homeVote.msg3_2')
							list[i].name =  list[i].surname + list[i].name 
							list[i].id =  list[i].id 
							list[i].no_proportion =  Number(list[i].no_proportion )
							list[i].yes_proportion =  Number(list[i].yes_proportion )
							list[i].btn_show = false
							if(list[i].state == 0 && list[i].throw == 0){
								list[i].btn_show = true
							}
							list[i].state = this.returnTypeMsg(list[i].state)
							list[i].cnt =+ ((Number(list[i].yes_cnt) + Number(list[i].no_cnt)) * 100 / Number(response.data.cnt)).toFixed(2)
						}
						
						this.voteList = list
						return true;
					}else{
						this.$Notice.warning({
							title: this.$t('errorMsg5')
						});
						this.$router.push({
							path:'/'
						})
						return false;
					}
				})
			},
			mountedRefreshList(){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"state": 0
				};
				this.searchList(data)
			},
			returnTypeMsg(msg){
				switch(msg){
					case this.$t('homeVote.btn2'):
						msg = 0
						break;
					case this.$t('homeVote.btn3'):
						msg = 1
						break;
					case this.$t('homeVote.btn4'):
						msg = 2
						break;
					case this.$t('homeVote.btn1'):
						msg = 4
						break;
					case '0':
						msg = this.$t('homeVote.btn2')
						break;
					case '1':
						msg = this.$t('homeVote.btn3')
						break;
					case '2':
						msg = this.$t('homeVote.btn4')
						break;
					case '4':
						msg = this.$t('homeVote.btn1')
						break;
				}
				return msg
			}
		},
		created(){
			this.$store.state.userInstance().methods.totalSupply().call()
				.then(result => {
					this.tokenAll = result / 10 ** 18
					this.mountedRefreshList()
				})
		}
	}
</script>
<style>
	.warningProgress .ivu-progress-bg{
		background-color: #ed4014
	}
	.tooltip-msg{
		width: 300px	
	}
</style>

<style scoped lang="stylus">
	flexs()
		display:flex
		align-items: center
		justify-content: space-between
		
	.bread
		flexs()
		.b_func
			flexs()
			flex-basis: 800px
			.searchForm
				flexs()
				.radio
					margin-right: 30px
				button:hover
					color: #2d8cf0
			.addVote
				margin-right: 30px
			
	.voteItem
		height: 460px
		margin: 0 30px 30px 0
		.msgBoard
			padding: 20px 16px;
			p
				margin-top: 14px
				b
					margin-right: 16px
					display: inline-block
					min-width: 85px
					font-weight: 400
				&:first-child
					margin-top: 0
			
			.btn
				text-align: right
				margin-top: 20px
	
	.mouldBoard
		margin-top: 100px
		flexs()
		justify-content: center
		.mouldItem
			width: 350px
			height: 300px
			flexs()
			.msgBoard
				width: 350px
				padding: 0 20px
				text-align:center
				p
					color: #9ea7b4
					margin-bottom: 30px
					font-size: 18px
	
	.newVoteBoard
		h4
			margin-bottom:20px
		p
			margin-bottom:5px
			&.hint
				color: #9ea7b4
				margin-top: 5px
		.btn
			margin-top: 50px
			
</style>
<style>
	.ivu-tooltip{width: 100%;}
</style>