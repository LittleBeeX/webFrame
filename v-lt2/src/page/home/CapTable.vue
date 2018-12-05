<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">组织结构</div>
		</Breadcrumb>
		<div>
			<Row>
				<Col span="19">
					<Card :bordered="false" class="capTable">
						<p slot="title">股权信息</p>
						<div class="tabBoard">
							<Table height="700" :columns="businessList.rows" :data="businessList.cols"></Table>
						</div>
					</Card>
				</Col>
				<Col span="5">
					<Card :bordered="false" class="tokenBoard">
						<p slot="title">Token信息</p>
						<div class="msgBoard">
								<p v-for="item in tokenList">
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
	export default {
		props:['BreadTitle'],
		data(){
			return{
				bSearch:'',
				businessList:{
					rows:[
						{
							title: '钱包地址',
							key: 'address',
							tooltip:true
						},
						{
							title: '姓名',
							key: 'name',
							tooltip:true
						},
						{
							title: '持有Token数',
							key: 'tokenNum',
							tooltip:true
						},
						{
							title: '持有比例',
							key: 'ratio',
							tooltip:true
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
				]
			}
		},
		methods:{
			searchCapTable(vals){
				
			},
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
						for(let i=0;i<userList.length;i++){
							this.businessList.cols.push({
								address:userList[i].address,
								name: userList[i].surname + userList[i].name,
								tokenNum: userList[i].token_number,
								ratio: userList[i].token_proportion
							})
						}
						return true;
					}else{
						this.$Notice.warning({
							title: '无当前组织信息！'
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
					"only":this.$route.query.only
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_se/company',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						let userList = response.data.info
						let userListArr = [userList.token_name,userList.token_symbol,userList.token_number,userList.support,userList.quorum,userList.duration + 'H']
						for(let i=0;i<this.tokenList.length;i++){
							if(i == 4 || i == 3){
								this.tokenList[i].vals = userListArr[i] + '%'
							}else{
								this.tokenList[i].vals = userListArr[i]
							}
						}
						return true;
					}else{
						this.$Notice.warning({
							title: '无当前组织信息！'
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
			padding: 14px 16px;
	
	.tokenBoard
		.msgBoard
			padding: 14px 16px;
			p
				margin-top: 14px
				b
					margin-right: 16px
				&:first-child
					margin-top: 0
</style>