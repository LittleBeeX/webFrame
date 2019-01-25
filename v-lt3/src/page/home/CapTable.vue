<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">{{$t('homeCapTable.msg0')}}</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="18">
					<Card :bordered="false" class="capTable">
						<p slot="title">{{$t('homeCapTable.msg1')}}</p>
						<div class="tabBoard">
							<Table height="700" :border="true" :stripe="true" :columns="businessList.rows" :data="businessList.cols">
								<template slot-scope="{ row }" slot="address">
									{{row.address}}
									<Icon type="ios-copy-outline" class="copy" size="22"
										v-clipboard:copy="row.address"
										v-clipboard:success="copyAddress"/>
								</template>
							</Table>
						</div>
					</Card>
				</Col>
				<Col span="6">
					<Card :bordered="false" class="tokenBoard">
						<p slot="title">{{$t('homeCapTable.msg2')}}</p>
						<div class="msgBoard">
								<p v-for="item in tokenList">
									<b>{{item.title}}</b>
									{{item.vals}}
								</p>
								<p>
									<b>{{$t('homeCapTable.msg2_7')}}</b>
									<span>{{userAddress}}</span>
								</p>
						</div>
					</Card>
					
					<Card :bordered="false" class="userBoard">
						<p slot="title">{{$t('homeCapTable.msg3')}}</p>
						<div class="msgBoard">
							<p>
								<b>{{$t('homeCapTable.msg3_1')}}</b>
								<span>{{Address}}</span>
							</p>
							<p v-for="item in userMsgList">
								<b>{{item.title}}</b>
								{{item.vals}}
							</p>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
		
	</div>
</template>

<script>
	import Qs from 'qs'
	import {mapState} from 'vuex'
	export default {
		props:['BreadTitle'],
		data(){
			return{
				bSearch:'',
				userAddress:'',
				businessList:{
					rows:[
						{
							title: this.$t('homeCapTable.msg1_1'),
							key: 'name',
							tooltip:true,
							align:'center'
						},
						{
							title: this.$t('homeCapTable.msg1_2'),
							key: 'position',
							tooltip:true,
							align:'center'
						},
						{
							title: this.$t('homeCapTable.msg1_3'),
							key: 'tokenNum',
							tooltip:true,
							align:'center'
						},
						{
							title: this.$t('homeCapTable.msg1_4'),
							key: 'ratio',
							tooltip:true,
							align:'center'
						},
						{
							title: this.$t('homeCapTable.msg1_5'),
							key: 'address',
							slot: 'address',
							tooltip:true,
							minWidth: 140
						}
					],
					cols:[]
				},
				tokenList:[
					{
						title:this.$t('homeCapTable.msg2_1'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg2_2'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg2_3'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg2_4'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg2_5'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg2_6'),
						vals: ''
					},
				],
				userMsgList:[
					{
						title:this.$t('homeCapTable.msg3_2'),
						vals: ''
					},{
						title:this.$t('homeCapTable.msg3_3'),
						vals: ''
					}
				]
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},
		methods:{
			mountedRefreshListMsg(){
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
						let arr = []
						for(let i=0;i<userList.length;i++){
							arr.push({
								address:userList[i].address,
								name: userList[i].surname + userList[i].name,
								tokenNum: userList[i].token_number,
								position: this.returnTypeUser(userList[i].position),
								ratio: userList[i].token_proportion + '%'
							})
						}
						this.businessList.cols = arr
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
			},
			mountedRefreshTokenMsg(){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company_individual',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let userMsg = response.data.info.chain
						let companyMsg = response.data.info.company
						let userListArr = [userMsg.token_number,userMsg.token_proportion]
						let companyArr = [companyMsg.token_name,companyMsg.token_symbol,companyMsg.token_number,companyMsg.support,companyMsg.quorum,companyMsg.duration + 'H']
						
						for(let i=0;i<this.tokenList.length;i++){
							if(i == 4 || i == 3){
								this.tokenList[i].vals = companyArr[i] + '%'
							}else{
								this.tokenList[i].vals = companyArr[i]
							}
						}
						for(let i=0;i<this.userMsgList.length;i++){
							this.userMsgList[i].vals = userListArr[i]
						}
						this.userMsgList[1].vals = this.userMsgList[1].vals + '%' 
						this.userAddress = companyMsg.contract;
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
			},
			returnTypeUser(msg){
				switch(msg){
					case '1':
						msg = this.$t('indexUser.msg8_3')
						break;
					case '2':
						msg = this.$t('indexUser.msg8_2')
						break;
					case '3':
						msg = this.$t('indexUser.msg8_5')
						break;
					case '4':
						msg = this.$t('indexUser.msg8_4')
						break;
					case '5':
						msg = this.$t('indexUser.msg8_6')
						break;
				}
				return msg
			},
			copyAddress(){
				 this.$Message.info('复制成功！');
			}
		},
		created(){
			this.$emit('menuActiveName', "11")
			this.mountedRefreshListMsg()
			this.mountedRefreshTokenMsg()
		}
	}
</script>
<style scoped lang="stylus">
	.bread
		display:flex;
		display:-webkit-flex;
		justify-content: space-between;
		align-items: center;
	
	.capTable
		min-height: 300px
		background: white
		margin-right: 30px;
		.tabBoard
			.ivu-table-wrapper
				border-top: 0;
				.ivu-table:after{
					background-color: transparent
				}
			.copy
				position: relative
				cursor:pointer
				top: -2px
				&:hover
					color: #2d8cf0	    
	
	.tokenBoard,.userBoard
		.msgBoard
			padding: 14px 16px;
			p
				margin-top: 14px
				span
					display:block;
					width:100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				b
					margin-right: 16px
				&:first-child
					margin-top: 0
	
	.userBoard
		margin-top: 30px
</style>