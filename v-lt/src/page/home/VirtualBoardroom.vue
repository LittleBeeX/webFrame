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
							<Button slot="append" @click="searchVote(searchInput)">
								<Icon type="ios-search" size="16"/>
							</Button>
						</Input>
					</div>
				</div>
				<div class="addVote">
					<Button type="primary" size="large" @click="addVote()" icon="md-barcode" >发起决议</Button>
				</div>
			</div>
		</Breadcrumb>
		<Row v-if="this.voteList.length > 0">
			<Col  :xs="24" :sm="12" :lg="8" v-for="item in voteList">
				<Card :bordered="false" class="voteItem">
					<p slot="title">
						<Tooltip :content="item.content" placement="top-start">
							{{item.content}}
						</Tooltip>
					</p>
					<div class="msgBoard">
						<p><b>时间</b>{{item.start_time}}</p>
						<p><b>状态</b>{{item.state}}</p>
						<p><b>发起人</b>{{item.name}}</p>
						<p><b>同意<span>(50%可通过审核)</span></b> <Progress :percent="item.yes_proportion" status="active" /></p>
						<p><b>否决</b> <Progress :percent="item.no_proportion" class="warningProgress"/></p>
						<div class="btn" v-if="item.btn_show">
							<Button type="success" size="large" icon="md-albums">同意</Button>
							<Button type="info" size="large" icon="md-albums">否决</Button>
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
				<h4>新的表决</h4>
				<p>问题</p>
				<Input v-model="addVoteInput" placeholder="Enter something..." />
				<div class="btn">
					<Button type="success" long @click="takeVote">开始投票</Button>
					<p class="hint">发起投票的者默认选择同意</p>
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
			addVote(){
				console.log('添加一个');
				this.isAddDrawer = !this.isAddDrawer
			},
			detailDrawer(){
				this.isShowDrawer = !this.isShowDrawer
			},
			takeVote(){
				let data = {
					"only":this.$route.query.only,
					"state": 0,
					"content": this.addVoteInput,
					"address": this.Address
				};
				this.$axios({
					method: 'post',
					url: '/index.php/cn/home/node_su/meeting',
					data: Qs.stringify(data)
				}).then((response) => {
					if(response.data.state == 0){
						this.$Notice.info({
							title: '会议提交成功！'
						});
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
			searchVote(){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"search": this.searchInput,
					"state": returnTypeMsg(this.searchType)
				};
				this.searchList(data)
			},
			changeSearchType(title){
				let data = {
					"only":this.$route.query.only,
					"address": this.Address,
					"state": returnTypeMsg(title)
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
							list[i].name =  list[i].surname + list[i].name 
							list[i].no_proportion =  Number(list[i].no_proportion )
							list[i].yes_proportion =  Number(list[i].yes_proportion )
							list[i].btn_show = false
							if(list[i].state == 0 && list[i].throw == 0){
								list[i].btn_show = true
							}
							list[i].state = returnTypeMsg(list[i].state)
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
			case '0':
				msg = '表决中'
				break;
			case '1':
				msg = '已通过'
				break;
			case '2':
				msg = '未通过'
				break;
		}
		return msg
	}
</script>
<style>
	.warningProgress .ivu-progress-bg{
		background-color: #ed4014
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
				&:first-child
					margin-top: 0
			
			.btn
				text-align: right
				margin-top: 30px
	
	.mouldBoard
		margin-top: 100px
		flexs()
		justify-content: center
		.mouldItem
			width: 250px
			height: 300px
			flexs()
			.msgBoard
				width: 250px
				padding: 0 20px
				text-align:center
				p
					color: #9ea7b4
					margin-bottom: 20px
	
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