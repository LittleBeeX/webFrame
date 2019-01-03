const messages = {
	en: {
		locale: "中",
		tipMsg1: 'Processing now',
		errorMsg1: 'This organization doesn’t exist！',
		errorMsg2: 'Please log in your Metamask first, refresh and then operate!',
		errorMsg3: ' Loading timeout!',
		errorMsg4: 'Time out, please log in again!',
		errorMsg5: 'No such member information!',
		errorMsg6: 'Loading failed!',
		errorMsg7: 'The organization name cannot be empty!',
		errorMsg8: 'No such organization available！',
		btn1: 'Last step',
		btn2: 'Next step',
		btn3: 'Submit',
		btn4: 'Sure',
		index: {
			msg1: 'LittleBeeX is a company that aims to assist company creation online governance,',
			msg1_1: 'and assets transaction by using blockchain technology. We have balanced the advantages',
			msg1_2: 'We have balanced the advantages of centralization and decentralization to ensure the efficiency',
			msg1_3: 'and rapid decision-making, as well as transparency and automation of corporate governance.',
			msg2: 'LittleBeeX all rights reserved @2018',
			tipMsg1: 'Your test Tokens has been successfully <br/>obtained. You can check them in your<br/>Metamask!',
			errorMsg1: 'Sufficient Tokens has been obtained.',
			btn1: 'Home Page',
			btn2: 'Company Registration',
			btn3: 'On-line Governance',
			btn4: 'Assets transaction',
			btn5: 'Register',
			btn6: 'Log in',
			btn7: 'Log out',
			btn8: 'Languages'
		},
		indexConfig: {
			msg1: 'Welcome aboard',
			msg2: 'Current node: Ethereum test net (Ropsten)',
			msg3: 'Please unlock Metamask first and select the required test net',
			msg4: 'Create a new organization and start KYC authentication',
			msg5: 'Your ETH balance is 0, please deposit no less than 0.1ETH in your wallet',
			msg6: 'Open an existing organization',
			tipMsg1: 'Your test Tokens has been successfully <br/>obtained. You can check them in your<br/>Metamask!',
			errorMsg1: 'Sufficient Tokens has been obtained. ',
			btn1: 'Acquire free Tokens for testing',
			btn2: 'Acquire free Ethers in Ropsten',
			btn3: 'Start to create',
			btn4: 'Open an existing organization'
		},
		indexUser: {
			msg0: 'Personal KYC authentication',
			msg0_1: 'Personal KYC authentication',
			msg1: 'First name',
			msg1_1: 'Please enter your first name',
			msg2: 'Last name',
			msg2_1: 'Please enter your last name',
			msg3: 'Gender',
			msg3_1: 'Please select a gender',
			msg3_2: 'Male',
			msg3_3: 'Female',
			msg4: 'Nationality',
			msg4_1: 'Please select your nationality',
			msg5: 'Birthdate ',
			msg5_1: 'Please enter your birth date',
			msg6: 'Passport number',
			msg6_1: 'Please enter your passport number',
			msg7: 'Current wallet address',
			msg7_1: 'Please enter current wallet address',
			msg8: 'Role in organization',
			msg8_1: 'Please enter role in organization',
			msg8_2: 'Shareholder',
			msg8_3: 'Director',
			msg8_4: 'Employee',
			msg8_5: 'Shareholder & Director',
			msg8_6: 'Shareholder & Employee',
			msg9: 'Upload passport',
			msg10: 'View the image',
			tipMsg1: 'Personal information has been<br/>resubmitted, please wait for approval!',
			tipMsg2: 'Personal KYC is under review, please be patient!',
			tipMsg3: 'Personal KYC failed, please check the information and submit again!',
			tipMsg4: 'Personal KYC has been approved!',
			errorMsg1: 'Please fill in complete personal information!',
			errorMsg2: 'Submission error!',
			errorMsg3: 'Please upload your passport!',
			btn1: 'Confirm',
			btn1: 'Upload your passport',
		},
		indeCompany: {
			msg0: 'Company authentication',
			msg1: 'Company name',
			msg1_1: 'Please enter company name',
			msg2: 'Registration number',
			msg2_1: 'Please enter registration number',
			msg3: 'Place of registration',
			msg3_1: 'Please select a place of registration',
			msg4: 'Registered Capital',
			msg4_1: 'Please enter the registered capital',
			msg5: 'Date of formation',
			msg5_1: 'Please select the date of formation',
			msg6: 'Organization name on the chain',
			msg6_1: 'Please enter an organization name',
			msg7: 'Organization name on the chain: the organization name on the chain will be the name of your online company. It is unique and cannot be changed! It is recommended to use the same name as the registered company name. Please check whether your organization name is available before proceeding.',
			msg8: 'The name of the organization cannot be modified once settled, so please fill it in carefully',
			tipMsg1: 'This name is available!',
			tipMsg2: 'The company information has been resubmitted, please wait for approval!',
			tipMsg3: 'The company authentication is under review, please be patient!',
			tipMsg4: 'The company authentication failed, please check the information and submit again',
			tipMsg5: 'Company authentication has been approved!',
			errorMsg1: 'Please fill in the complete company information!',
			errorMsg2: 'This name is occupied!',
			errorMsg3: 'The name of organization on the chain cannot be empty！'
		},
		indeToken: {
			msg0: 'Token settings',
			msg1: 'Support Ratio',
			msg1_1: 'Please enter support ratio',
			msg2: 'Min quorum',
			msg2_1: 'Please enter min quorum',
			msg3: 'Duration',
			msg3_1: 'Please specify a duration',
			msg4: 'Token name',
			msg4_1: 'Please enter a token name',
			msg5: 'Token symbol',
			msg5_1: 'Please enter a token symbol',
			msg6: 'Initial volume',
			msg6_1: 'Please enter an initial volume',
			msg7: 'Support ratio: set the proportion of votes for a company resolution, which must be higher than this proportion to pass the resolution',
			msg8: 'Min quorum: the proportion of the number of people who cast the vote must be higher than this proportion before any resolution can be valid',
			msg9: 'Duration: The vote must be conducted within this time range',
			msg10: 'Token Settings cannot be modified once settled, so please fill in carefully',
			errorMsg1: 'Please fill in the complete token information!！',
			errorMsg2: 'Please enter an integer!',
			errorMsg3: 'The value should be between 1 and 100!',
			errorMsg4: 'Please enter capital letters!'
		},
		indePay: {
			msg0: 'You need to authorize at least ',
			msg1: ' for the payment',
			msg2: 'When the authorized token balance is less than the required value, your payment will fail',
			msg3: 'Token balance',
			msg4: 'Authorized token balance',
			msg5: 'Set authorization amount',
			msg6: 'Your autonomous organization is almost ready.',
			msg6_1: 'Your KYC information has been submitted!',
			msg7: 'Please make a payment of ',
			msg8: 'LittleBeeX will review your application soon. ',
			msg9: 'Once approved,You can run your company on the blockchain！',
			msg9_1: 'Once approved,You can join your organization and conduct online governance!！',
			tipMsg1: 'Done! We will process your<br/>application immediately!',
			tipMsg2: 'Authorized successfully!',
			errorMsg1: 'Insufficient balance for the token payment!',
			errorMsg2: 'Please top up the authorized balance!',
			btn1: 'Authorize',
			btn2: 'Pay LT',
			btn3: 'Payment has already been done'
		},
		home: {
			btn1: 'Dashboard',
			btn2: 'Cap table',
			btn3: 'Equity operations',
			btn4: 'Meeting Room',
			btn5: 'ESOP',
			btn6: 'Security token issuance',
		},
		homeOverview: {
			msg0: 'Basic information',
			msg1: 'Corporate information',
			msg1_1: 'Company name',
			msg1_2: 'Registration',
			msg1_3: 'Registered Capital',
			msg1_4: 'Date of formation',
			msg1_5: 'Place of registration',
			msg1_6: 'Constitution',
			msg1_6_1: 'No upload！',
			msg2: 'Personally information',
			msg2_1: 'Name',
			msg2_2: 'Nationality',
			msg2_3: 'Passport number',
			msg2_4: 'Birthdate ',
			msg2_5: 'Role in organization',
			msg2_6: 'Token Weights',
			msg3: 'Company dynamics',
			msg3_1: 'Started date',
			msg3_2: 'Proposals',
			msg3_3: 'Proposal status',
			msg3_4: 'No recently activities',
			btn1: 'Upload company logo',
			btn2: 'Upload constitution',
			btn3: 'Upload profile photo',
			btn4: 'Select my companies'
		},
		homeCapTable: {
			msg0: 'Organization structure',
			msg1: 'Personnel',
			msg1_1: 'Name',
			msg1_2: 'Role',
			msg1_3: 'Number of holding tokens',
			msg1_4: 'Token Weights',
			msg1_5: 'Current wallet address',
			msg2: 'Token information',
			msg2_1: 'name',
			msg2_2: 'symbol',
			msg2_3: 'Volume',
			msg2_4: 'Support Ratio',
			msg2_5: 'Min quorum',
			msg2_6: 'Duration',
			msg2_7: 'Contract address',
			msg3: 'Personally information',
			msg3_1: 'Current wallet address',
			msg3_2: 'Number of holding tokens',
			msg3_3: 'Weights of holding tokens',
		},
		homeTransfer: {
			msg0: 'Equity transfer and issuance',
			msg1: 'Equity transfer',
			msg1_1: 'Address of the transferor',
			msg1_2: 'Receiving address',
			msg1_3: 'Please select a receiving address',
			msg1_4: 'Transfer amount',
			msg1_5: 'Please enter a transfer amount',
			msg2: 'Equity issuance',
			msg2_1: 'Address of initiator',
			msg2_2: 'Receiving address',
			msg2_3: 'Please select a receiving address',
			msg2_4: 'Amount',
			msg2_5: 'Please specify an amount',
			msg3: 'Weight ',
			msg4:' Issue',
			msg4_1:' Transfer ',
			msg5: ' to ',
			msg6: ',weighing ',
			msg7: '',
			tipMsg1: 'The proposal has been submitted successfully!',
			errorMsg1: 'Token number should be a positive integer!',
			errorMsg2: 'The transferee needs KYC authentication!',
			btn1: 'Initiate a proposal'
		},
		homeVote: {
			msg0: 'Virtual meeting room',
			msg1: 'Search',
			msg2: 'Started date',
			msg3: 'Duration',
			msg3_1: 'About',
			msg3_2: 'h',
			msg4: 'Initiator',
			msg4_1: 'Representative',
			msg5: 'Proposal status',
			msg6: 'Min quorum',
			msg6_1: '(Required weight',
			msg7: 'Agree',
			msg7_1: '（The weight should be higher than',
			msg7_2: 'for the proposal to be valid',
			msg8: 'Disagress',
			msg9: 'New proposal',
			msg10: 'Please fill in the content of proposal',
			msg11: 'No record of resolution. Initiate a proposal immediately',
			tipMsg1: 'Proposal submitted successfully!',
			tipMsg2: 'Done!',
			errorMsg1: 'Empty content is not allowed',
			btn1: 'All',
			btn2: 'Ongoing',
			btn3: 'Approved',
			btn4: 'Rejected',
			btn5: 'Initiate a proposal'
		},
		homeESOP:{
			msg0:'Programmer is working hard on Development!',
			msg1:'Thank you for your support. Please be patient!'
		},
		homeSTO:{
			msg0:'Programmer Brother is working hard on Development!',
			msg1:'Thank you for your support. Please be patient!'
		}
	},
	cn: {
		locale: "EN",
		tipMsg1: '正在处理',
		errorMsg1: '暂无当前组织！',
		errorMsg2: '请先登录metamask钱包，刷新后进行操作！',
		errorMsg3: '加载超时！',
		errorMsg4: '登录超时,请从新登录！',
		errorMsg5: '无该成员信息！',
		errorMsg6: '加载失败！',
		errorMsg7: '组织名称不能为空！',
		errorMsg8: '暂无当前组织信息！',
		btn1: '上一步',
		btn2: '下一步',
		btn3: '提交',
		btn4: '确定',
		index: {
			msg1: 'LittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建',
			msg1_1: '治理以及资产流通。我们权衡了中心化和非中心化的优势，',
			msg1_2: '在保证效率和快速决策的同时，使公司治理透明化、自动化。',
			msg1_3: '',
			msg2: '@2018 LittleBeeX 版权所有',
			tipMsg1: '您的测试TOKEN已获取成功，<br/>请进入Metamask钱包查看！',
			errorMsg1: '已经获取足够TOKEN，请勿重新获取！',
			btn1: '首页',
			btn2: '公司注册',
			btn3: '在线治理',
			btn4: '资产交易',
			btn5: '注册',
			btn6: '登录',
			btn7: '退出',
			btn8: '简体中文'
		},
		indexConfig: {
			msg1: '欢迎来到LittleBeeX',
			msg2: '当前节点：以太坊测试网(Ropsten)',
			msg3: '请先解锁Metamask钱包，并选择所需的服务器节点',
			msg4: '创建一个新组织，并开始KYC组织认证',
			msg5: '你的ETH余额为0，请先获取不少于0.1ETH',
			msg6: '或打开现有组织',
			tipMsg1: '您的测试TOKEN已获取成功，<br/>请进入Metamask钱包查看！',
			errorMsg1: '已经获取足够TOKEN，请勿重新获取！',
			btn1: '获取测试TOKEN',
			btn2: '获取（Ropsten）节点Eth',
			btn3: '开始创建',
			btn4: '打开组织'
		},
		indexUser: {
			msg0: '创建者个人信息认证',
			msg0_1: '提交者个人信息认证',
			msg1: '名',
			msg1_1: '请输入名',
			msg2: '姓',
			msg2_1: '请输入姓',
			msg3: '性别',
			msg3_1: '请选择性别',
			msg3_2: '男',
			msg3_3: '女',
			msg4: '国籍',
			msg4_1: '请选择国籍',
			msg5: '出生日期',
			msg5_1: '请输入出生日期',
			msg6: '护照号码',
			msg6_1: '请输入护照号码',
			msg7: '钱包地址',
			msg7_1: '请输入钱包地址',
			msg8: '组织角色',
			msg8_1: '请选择组织角色',
			msg8_2: '股东',
			msg8_3: '董事',
			msg8_4: '员工',
			msg8_5: '股东兼董事',
			msg8_6: '股东兼员工',
			msg9: '护照上传',
			msg10: '查看图片',
			tipMsg1: '个人信息已重新提交，请等待审核通过！',
			tipMsg2: '个人认证正在加速审核中，请耐心等耐！',
			tipMsg3: '个人认证审核未通过，请核对信息后重新提交',
			tipMsg4: '个人认证审核已经通过',
			errorMsg1: '请填写完整的个人认证信息！',
			errorMsg2: '文件提交错误',
			errorMsg3: '请上传护照信息',
			btn1: '确定',
			btn1: '上传护照',
		},
		indeCompany: {
			msg0: '公司信息认证',
			msg1: '公司名称',
			msg1_1: '请输入公司名称',
			msg2: '注册号码',
			msg2_1: '请输入注册号码',
			msg3: '注册国家',
			msg3_1: '请选择注册国家',
			msg4: '注册资本',
			msg4_1: '请输入注册资本',
			msg5: '成立日期',
			msg5_1: '请选择成立日期',
			msg6: '链上组织名称',
			msg6_1: '请输入链上组织名称',
			msg7: '链上组织名称：链上组织名称是你在线治理公司的组织名称，唯一且不可更改！建议使用与公司名称相同的组织名称，设置前请先检查你的组织名称是否可用。',
			msg8: '链上组织名称设置成功后无法进行修改，因此请认真填写',
			tipMsg1: '该组织名称暂未被占用！',
			tipMsg2: '公司信息已重新提交，请等待审核通过！',
			tipMsg3: '公司认证正在加速审核中，请耐心等耐！',
			tipMsg4: '公司认证审核未通过，请核对信息后重新提交',
			tipMsg5: '公司认证审核已经通过',
			errorMsg1: '请填写完整的公司认证信息！',
			errorMsg2: '该组织名称已被占用',
			errorMsg3: '链上组织名称不能为空！'
		},
		indeToken: {
			msg0: '令牌设置',
			msg1: '支持占比',
			msg1_1: '请输入支持占比',
			msg2: '法定人数',
			msg2_1: '请输入法定人数',
			msg3: '投票时间',
			msg3_1: '请选择投票时间',
			msg4: '令牌名称',
			msg4_1: '请输入令牌名称',
			msg5: '令牌符号',
			msg5_1: '请输入令牌符号',
			msg6: '令牌数量',
			msg6_1: '请输入令牌数量',
			msg7: '支持占比：设置公司决议的投票占比，必须高于此占比才能通过决议',
			msg8: '法定人数：设置公司决议的人数占比，必须高于此占比才能通过决议',
			msg9: '持续时间：设置发起一次决议的投票有效时间，必须在设置的时间范围内进行投票',
			msg10: '令牌设置成功后无法进行修改，因此请认真填写',
			errorMsg1: '请填写完整的令牌设置信息！',
			errorMsg2: '请输入数字值!',
			errorMsg3: '数值应为1-100之间！',
			errorMsg4: '请输入大写英文字母！'
		},
		indePay: {
			msg0: '您至少需要授权不少于',
			msg1: '用于支付手续费',
			msg2: '当已授权TOKEN余额小于支付额度时，您的支付将失败',
			msg3: 'TOKEN总余额',
			msg4: '已授权TOKEN余额',
			msg5: '设置授权额度',
			msg6: '您的自治组织准备好了,',
			msg6_1: '您的个人认证信息已提交！',
			msg7: '现在需要您支付',
			msg8: 'LittleBeeX将审核您已提交的信息，审核通过后，',
			msg9: '您将在LittleBeeX上治理您的公司！',
			msg9_1: '您将成功加入该组织并进行在线治理！',
			tipMsg1: '操作成功！等待人员审核！',
			tipMsg2: '授权成功！',
			errorMsg1: '没有足够的TOKEN用来支付！',
			errorMsg2: '请增加授权额度！',
			btn1: '授权',
			btn2: '支付LT',
			btn3: '已支付'
		},
		home: {
			btn1: '基本信息',
			btn2: '组织结构',
			btn3: '转让和增发',
			btn4: '虚拟会议室',
			btn5: '员工期权激励',
			btn6: '证券代币发行',
		},
		homeOverview: {
			msg0: '基本信息',
			msg1: '公司信息',
			msg1_1: '公司名称',
			msg1_2: '注册号码',
			msg1_3: '注册资本',
			msg1_4: '成立日期',
			msg1_5: '注册国家',
			msg1_6: '公司章程',
			msg1_6_1: '暂无上传！',
			msg2: '个人信息',
			msg2_1: '姓名',
			msg2_2: '国籍',
			msg2_3: '护照号码',
			msg2_4: '出生日期',
			msg2_5: '组织角色',
			msg2_6: '持股比例',
			msg3: '公司动态',
			msg3_1: '发起日期',
			msg3_2: '决议事项',
			msg3_3: '决议状态',
			msg3_4: '暂无动态',
			btn1: '上传公司LOGO',
			btn2: '上传公司章程',
			btn3: '上传个人头像',
			btn4: '选择我的公司'
		},
		homeCapTable: {
			msg0: '组织结构',
			msg1: '人员信息',
			msg1_1: '姓名',
			msg1_2: '角色',
			msg1_3: '持有TOKEN数量',
			msg1_4: '持股比例',
			msg1_5: '钱包地址',
			msg2: 'TOKEN信息',
			msg2_1: '名称',
			msg2_2: '符号',
			msg2_3: '总量',
			msg2_4: '支持占比',
			msg2_5: '法定人数',
			msg2_6: '投票时间',
			msg2_7: '合约地址',
			msg3: '个人信息',
			msg3_1: '钱包地址',
			msg3_2: '持有TOKEN数量',
			msg3_3: '持有TOKEN比例',
		},
		homeTransfer: {
			msg0: '转让和增发',
			msg1: '股权转让',
			msg1_1: '转让方地址',
			msg1_2: '受让方地址',
			msg1_3: '请选择受让方地址',
			msg1_4: '转让数量',
			msg1_5: '请输入转发数量',
			msg2: '股权增发',
			msg2_1: '代表方地址',
			msg2_2: '受让方地址',
			msg2_3: '请选择受让方地址',
			msg2_4: '增发数量',
			msg2_5: '请输入增发数量',
			msg3: '股权占比',
			msg4:' 增发 ',
			msg4_1:' 转让 ',
			msg5: ' 枚TOKEN给 ',
			msg6: '，占比为 ',
			msg7: ' 股权 ',
			tipMsg1: '决议提交成功！',
			errorMsg1: 'TOKEN数量应为正整数！',
			errorMsg2: '受让方需通过KYC认证！',
			btn1: '发起决议'
		},
		homeVote: {
			msg0: '虚拟会议室',
			msg1: '决议查询',
			msg2: '发起日期',
			msg3: '投票时间',
			msg3_1: '剩余约',
			msg3_2: '小时',
			msg4: '决议发起人',
			msg4_1: '发起代表人',
			msg5: '决议状态',
			msg6: '法定人数',
			msg6_1: '（需高于',
			msg7: '同意',
			msg7_1: '（高于',
			msg7_2: '，决议生效)',
			msg8: '否决',
			msg9: '新的决议',
			msg10: '请填写决议内容',
			msg11: '暂无决议记录，立即发起决议',
			tipMsg1: '决议发起成功',
			tipMsg2: '表决成功',
			errorMsg1: '决议内容不能为空',
			btn1: '全部',
			btn2: '表决中',
			btn3: '已通过',
			btn4: '未通过',
			btn5: '发起决议'
		},
		homeESOP:{
			msg0:'程序员小哥正在努力开发中!',
			msg1:'谢谢支持，请耐心等待!'
		},
		homeSTO:{
			msg0:'程序员小哥正在努力开发中!',
			msg1:'谢谢支持，请耐心等待!'
		}
	}
}

export default messages;
