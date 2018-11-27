<template>
	<div>
		<Breadcrumb class="bread">
			<div class="title">增发和转让</div>
		</Breadcrumb>
		<Row>
			<Col span="24">
				<Card :bordered="false" class="mint">
					<p slot="title">增发</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>as6d54as6d54asd65a4sd65a4sd65as4da65sd4</p>
						<p><b>目标地址</b><Input v-model="mintAddress" placeholder="请输入目标地址"  style="width: 500px"/></p>
						<p><b>增发数量</b><Input v-model="mintNumber" placeholder="请输入增发数量"  style="width: 500px"/></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="mint">执行</Button>
						</div>
					</div>
				</Card>
			</Col>
			<Col span="24">
				<Card :bordered="false" class="transfer">
					<p slot="title">转让</p>
					<div class="msgBoard">
						<p><b>钱包地址</b>as6d54as6d54asd65a4sd65a4sd65as4da65sd4</p>
						<p><b>目标地址</b><Input v-model="transferAddress" placeholder="请输入目标地址" style="width: 500px"/></p>
						<p><b>转让数量</b><Input v-model="transferNumber" placeholder="请输入转发数量"  style="width: 500px"/></p>
						<div class="btn">
							<Button type="primary" size="large" icon="md-git-compare" @click="transfer">执行</Button>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				mintAddress:'',
				mintNumber:'',
				transferAddress:'',
				transferNumber:''
			}
		},
		methods:{
			mint(){
				 this.$Modal.confirm({
                    title: '增发',
                    content: '<p>确定增发吗</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
			},
			transfer(){
				 this.$Modal.confirm({
                    title: '转让',
                    content: '<p>确定转让吗</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
			}
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
				b
					margin-right: 16px
					display: inline-block
					width: 100px
				&:first-child
					margin-top: 0
			.btn
				margin-top: 30px
	.transfer
		margin-top: 30px
</style>