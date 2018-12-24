<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">虚拟会议室</div>
			<div class="b_func">
				<div class="searchForm">
					<RadioGroup v-model="searchType" class='radio' @on-change="changeSearchType(searchType)">
						<Radio :label="item.title" v-for="item in typeList" :value="item.vals"></Radio>
					</RadioGroup>
					<div>
						<Input  placeholder="会议查询" v-model="searchInput"  style="width:300px">
							<Button slot="append" @click="searchVote()">
								<Icon type="ios-search" size="16"/>
							</Button>
						</Input>
					</div>
				</div>
				<div class="addVote">
					<Button type="primary" size="large" @click="isAddDrawer = !isAddDrawer" icon="md-barcode" >发起决议</Button>
				</div>
			</div>
		</Breadcrumb>
		<Row v-if="voteList.length > 0">
			<Col  :xs="24" :sm="12" :lg="8" v-for="item in voteList">
				<Card :bordered="false" class="voteItem">
					<p slot="title">
						<Tooltip max-width="300" :content="item.content">
							<p class="tooltip-msg">{{item.content}}</p>
						</Tooltip>
					</p>
					<div class="msgBoard">
						<p><b>发起时间</b>{{item.start_time}}</p>
						<p><b>表决状态</b>{{item.state}}</p>
						<p><b>决议发起人</b>{{item.name}}</p>
						<p><b>同意<span>({{item.quorum}}%可通过审核)</span></b> <Progress :percent="item.yes_proportion" status="active" /></p>
						<p><b>否决</b> <Progress :percent="item.no_proportion" class="warningProgress"/></p>
						<div class="btn" v-if="item.btn_show">
							<Button type="success" size="large" icon="md-albums" @click="userVote(1,item.id,item.keyname)">同意</Button>
							<Button type="info" size="large" icon="md-albums" @click="userVote(2,item.id,item.keyname)">否决</Button>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
		
		<div class="mouldBoard" v-else>
			<Card :bordered="false" class="mouldItem">
				<div class="msgBoard">
					<p>暂无表决记录，立即发起表决</p>
					<Button type="primary" @click="addVote()" size="large" icon="md-barcode" >发起决议</Button>
				</div>
			</Card>
		</div>
		<Drawer title="新的表决" width="350" :closable="false" v-model="isAddDrawer" class="newVoteBoard">
			<div>
				<p>决议内容</p>
				<Input v-model="addVoteInput" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请填写决议内容" />
				<div class="btn">
					<Button type="success" long @click="takeVote">发起决议</Button>
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
				searchType: '表决中',
				addVoteInput: '',
				isShowDrawer: false,
				isAddDrawer: false,
				typeList:[
					{
						title:'全部',
						vals: 4
					},{
						title:'表决中',
						vals: 0
					},{
						title:'已通过',
						vals: 1
					},{
						title:'未通过',
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
				voteList:[]
			}
		},
		computed: {
			...mapState({
				Address: state => state.web3.coinbase
			})
		},	
		methods:{
			takeVote(){
				if(this.addVoteInput != ''){
					let _this = this;
					this.$store.state.userInstance().methods.addVoteList(0,this.Address,this.Address,0, this.addVoteInput).send({
						from: this.Address
					}).on('transactionHash',function( receipt){
						_this.$Spin.show()
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
								this.$Notice.info({
									title: '会议提交成功！'
								})
								this.mountedRefreshList()
								this.isAddDrawer = !this.isAddDrawer
								this.addVoteInput = ''
								return true
							}else{
								this.$Notice.warning({
									title: '无该成员信息！'
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
						title: '表决内容不能为空！'
					});
				}
			},
			userVote(state,id,codes){
				let _this = this;
				let flag = state == 1 ? true : false
				this.$store.state.userInstance().methods.setVoteList(codes,flag).send({
					from: this.Address
				}).on('transactionHash',function( receipt){
					_this.$Spin.show()
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
							this.$Notice.info({
								title: '投票成功！'
							});
							this.changeSearchType(this.searchType)
							return true
						}else{
							this.$Notice.warning({
								title: '无该成员信息！'
							});
							this.$router.push({
								path:'/'
							})
							return false
						}
					})
				})
			},
			searchVote(){
				let condition = returnTypeMsg(title) == 4 ? 0 : 1
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"search": this.searchInput,
					"state": returnTypeMsg(this.searchType),
					"condition": condition
				};
				this.searchList(data)
			},
			changeSearchType(title){
				let condition = returnTypeMsg(title) == 4 ? 0 : 1
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"state": returnTypeMsg(title),
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
							list[i].start_time =  mutil.timestampToTime(list[i].start_time) + '(剩余约'+ list[i].remnant.toFixed(2) +'个小时)'
							list[i].F =  list[i].surname + list[i].name 
							list[i].id =  list[i].id 
							list[i].no_proportion =  Number(list[i].no_proportion )
							list[i].yes_proportion =  Number(list[i].yes_proportion )
							list[i].btn_show = false
							if(list[i].state == 0 && list[i].throw == 0){
								list[i].btn_show = true
							}
							list[i].state = returnTypeMsg(list[i].state)
							list[i].keyname = list[i].keyname
							if(list[i].type != 0){
								let msg = list[i].type == 1 ? '增发' : '转账'
								list[i].content = '给' + list[i].surname_t + list[i].name_t  + msg + list[i].number + '枚Token'
							}
						}
						
						this.voteList = list
						return true;
					}else{
						this.$Notice.warning({
							title: '无该成员信息！'
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
			}
		},
		created(){
			this.mountedRefreshList()
		}
	}
	
	function returnTypeMsg(msg){
		switch(msg){
			case '表决中':
				msg = 0
				break;
			case '已通过':
				msg = 1
				break;
			case '未通过':
				msg = 2
				break;
			case '全部':
				msg = 4
				break;
			case '0':
				msg = '表决中'
				break;
			case '1':
				msg = '已通过'
				break;
			case '2':
				msg = '未通过'
				break;
			case '4':
				msg = '全部'
				break;
		}
		return msg
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
			.addVote
				margin-right: 30px
			
	.voteItem
		min-height: 350px
		margin: 0 30px 30px 0
		.msgBoard
			padding: 20px 16px;
			p
				margin-top: 14px
				b
					margin-right: 16px
					display: inline-block
					min-width: 100px
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
	.ivu-tooltip p.tooltip-msg{
		
	}
</style>