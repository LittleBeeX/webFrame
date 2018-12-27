<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">组织结构</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="18">
					<Card :bordered="false" class="capTable">
						<p slot="title">人员信息</p>
						<div class="tabBoard">
							<Table height="700" :border="true" :stripe="true" :columns="businessList.rows" :data="businessList.cols"></Table>
						</div>
					</Card>
				</Col>
				<Col span="6">
					<Card :bordered="false" class="tokenBoard">
						<p slot="title">Token信息</p>
						<div class="msgBoard">
								<p v-for="item in tokenList">
									<b>{{item.title}}</b>
									{{item.vals}}
								</p>
								<p>
									<b>合约地址</b>
									<span>{{userAddress}}</span>
								</p>
						</div>
					</Card>
					
					<Card :bordered="false" class="userBoard">
						<p slot="title">个人信息</p>
						<div class="msgBoard">
							<p>
								<b>钱包地址</b>
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
							title: '姓名',
							key: 'name',
							tooltip:true,
							align:'center'
						},
						{
							title: '角色',
							key: 'position',
							tooltip:true,
							align:'center'
						},
						{
							title: '持有TOKEN数量',
							key: 'tokenNum',
							tooltip:true,
							align:'center'
						},
						{
							title: '持股比例',
							key: 'ratio',
							tooltip:true,
							align:'center'
						},
						{
							title: '钱包地址',
							key: 'address',
							tooltip:true,
							minWidth: 140
						}
					],
					cols:[]
				},
				tokenList:[
					{
						title:'名称',
						vals: ''
					},{
						title:'符号',
						vals: ''
					},{
						title:'总量',
						vals: ''
					},{
						title:'支持占比',
						vals: ''
					},{
						title:'法定人数',
						vals: ''
					},{
						title:'投票时间',
						vals: ''
					},
				],
				userMsgList:[
					{
						title:'持有TOKEN数量',
						vals: ''
					},{
						title:'持有TOKEN比例',
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
								position: returnTypeUser(userList[i].position),
								ratio: userList[i].token_proportion + '%'
							})
						}
						this.businessList.cols = arr
						return true;
					}else{
						this.$Notice.warning({
							title: '暂无当前组织信息！'
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
							title: '暂无当前组织信息！'
						});
						this.$router.push({
							path:'/'
						})
						return false;
					}
				})
			}
		},
		mounted(){
			this.mountedRefreshListMsg()
			this.mountedRefreshTokenMsg()
		}
	}
	function returnTypeUser(msg){
		switch(msg){
			case '1':
				msg = '董事'
				break;
			case '2':
				msg = '股东'
				break;
			case '3':
				msg = '股东兼董事'
				break;
			case '4':
				msg = '员工'
				break;
			case '5':
				msg = '股东兼员工'
				break;
		}
		return msg
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
		border-radius: 4px
		background: white
		margin-right: 30px;
		.tabBoard
			.ivu-table-wrapper
				border-top: 0;
				.ivu-table:after{
					background-color: transparent
				}
				    
	
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