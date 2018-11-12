<template>
	<div class="index-board">
		<div class="inner">
			<h3>个人信息认证</h3>
			<div>
				 <Form :model="userIdent" label-position="left" :label-width="80" inline ref="userIdent" :rules="ruleInline">
					<FormItem label="名" prop="Name">
						<Input v-model="userIdent.Name" placeholder="请输入名"></Input>
					</FormItem>
					<FormItem label="姓" prop="Surname">
						<Input v-model="userIdent.Surname" placeholder="请输入姓"></Input>
					</FormItem>
					<FormItem label="性别" prop="Sex">
						<Select v-model="userIdent.Sex">
							<Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="国籍" prop="nationality">
						<Select v-model="userIdent.nationality">
							<Option v-for="item in nationalityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="出生日期" prop="BirDate">
						<DatePicker style="width:100%" type="date" placeholder="出生日期" v-model="userIdent.BirDate" ></DatePicker>
					</FormItem>
					<br>
					<FormItem label="Address" class="address">
						<Input v-model="userIdent.Address" readonly></Input>
					</FormItem>
					<FormItem label="护照上传">
						<Upload
							ref="upload"
							:show-upload-list="false"
							:default-file-list="defaultList"
							:on-success="handleSuccess"
							:format="['jpg','jpeg','png']"
							:max-size="2048"
							:on-format-error="handleFormatError"
							:on-exceeded-size="handleMaxSize"
							:before-upload="handleBeforeUpload"
							multiple
							action="/index.php/cn/home/node_su/geren_tijiao_img">
								<Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
						</Upload>
						<Modal title="View Image" v-model="visible">
							<img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
						</Modal>
						<div class="demo-upload-list" v-for="item in uploadList">
							<template v-if="item.status === 'finished'">
								<img :src="item.url">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
									<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
								</div>
							</template>
							<template v-else>
								<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
							</template>
						</div>
					</FormItem>
					<!-- <FormItem label="护照上传">
							<Upload
								:before-upload="handleUpload"
								action="/index.php/cn/home/node_su/geren_tijiao_img">
								<Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
							</Upload>
							<div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
					</FormItem> -->
				</Form>
				<Alert class="w96">当前个人信息审核中</Alert>
				<div class="btn-con">
				    <Button type="primary" @click="backConfig()">
						<Icon type="ios-arrow-back"></Icon>
						上一步
					</Button>
					<Button type="primary" @click="goCompany('userIdent')">
						下一步
						<Icon type="ios-arrow-forward"></Icon>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				file: null,
                loadingStatus: false,
				userIdent: {
                    Name: '',
                    Surname: '',
                    Sex: '',
					nationality:'',
					BirDate:'',
					Address:''
                },
				sexList:[
					{
						value:'1',
						label:'男'
					},{
						value:'2',
						label:'女'
					},
				],
				nationalityList:[
					{
						value:'1',
						label:'中国'
					},{
						value:'2',
						label:'美国'
					},
				],
				ruleInline: {
                    Name: [
                        { required: true, message: '请输入名', trigger: 'blur' }
                    ],
                    Surname: [
                        { required: true, message: '请输入姓', trigger: 'blur' }
                    ],
					BirDate: [
                        { required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }
                    ],
                    Sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ], 
					nationality: [
                        { required: true, message: '请选择国籍', trigger: 'change' }
                    ],
                },
				 defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
			}
		},
		methods:{
			backConfig(){
				this.$router.push({path:'Config'})
			},
			goCompany(name){
				//this.$router.push({path:'CompanyIdent'}),
				
				 this.$refs[name].validate((valid) => {
                    if (valid) {
						this.$router.push({path:'CompanyIdent'})
                    } else {
                        this.$Message.error('请正确输入表单信息！');
                    }
                })
			},
			/* handleUpload (file) {
				console.log(file);
				console.log(this.file);
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            } */
			handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
	}
</script>

<style scoped lang="stylus">
	.index-board
		padding: 50px 100px !important;
		h3
			font-size:26px;
			margin-bottom: 20px;
		.ivu-form-item
			min-width: 330px;
			.ivu-form-item-label
				font-size: 16px;
		.address
			width: 96%;
		.btn-con
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 50px;
	
</style>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
		margin-top: 24px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>