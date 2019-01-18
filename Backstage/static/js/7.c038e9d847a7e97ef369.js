webpackJsonp([7],{"5qVC":function(t,e){},CSlG:function(t,e){},"t/XH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4Xi4"),r=a.n(n),s=a("4YfN"),l=a.n(s),i=a("6iV/"),o=a.n(i),p=a("9rMa"),u={props:["BreadTitle"],data:function(){return{helpBox:!1,plan:{date:"",name:"",num:"",plan:"",pay:""},userList:[],planList:[],ruleInline:{name:[{required:!0,message:"请选择员工名称",trigger:"change"}],num:[{required:!0,message:"请输入股权量",trigger:"blur"},{validator:d,trigger:"blur"}],plan:[{required:!0,message:"请选择计划",trigger:"blur"}],pay:[{required:!0,message:"请输入行使价格",trigger:"blur"},{validator:d,trigger:"blur"}],date:[{required:!0,type:"date",message:"请选择授权日期",trigger:"change"}]}}},computed:l()({},Object(p.b)({Address:function(t){return t.web3.coinbase}})),methods:{upCreatePlanUser:function(){var t=this;this.$refs.plan.validate(function(e){if(e){Number(t.plan.num),Number(t.AllToken);var a={address:t.Address,only:t.$route.query.only,option:t.plan.plan,target:t.plan.name,token_number:t.plan.num,exercise_money:t.plan.pay,content:"本公司已根据名为["+t.searchPlanList(t.plan.plan)+"]的公司期权计划向["+t.searchUserList(t.plan.name)+"]授予行使价格为"+t.plan.pay+"美元的公司股权代币"+t.plan.num+"个。"};t.$axios({method:"post",url:"/index.php/cn/home/node_su/excitation",data:o.a.stringify(a)}).then(function(e){0==e.data.state&&(t.$Notice.success({title:"创建成功！"}),t.$router.push({path:"managePlan",query:{only:t.$route.query.only}}))})}else t.$Notice.warning({title:"请填写完整的员工期权机制信息"})})},createUserList:function(){var t=this,e={only:this.$route.query.only,option:this.$route.query.planId};this.$axios({method:"post",url:"/index.php/cn/home/node_se/excitation_y",data:o.a.stringify(e)}).then(function(e){if(0==e.data.state){var a=e.data.info;t.userList=[];for(var n=0;n<a.length;n++)t.userList.push({name:a[n].surname+a[n].name,address:a[n].address});return!0}})},refreshPlanList:function(){var t=this,e={only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/option",data:o.a.stringify(e)}).then(function(e){if(0==e.data.state){var a=e.data.info;if(t.planList=[],a.length>0)for(var n=0;n<a.length;n++)t.planList.push({label:a[n].name,value:a[n].id})}})},searchPlanList:function(t){for(var e=0;e<this.planList.length;e++)if(this.planList[e].id=t)return this.planList[e].label},searchUserList:function(t){for(var e=0;e<this.userList.length;e++)if(this.userList[e].address=t)return this.userList[e].name}},created:function(){c=this,this.$emit("menuActiveName","14-2"),this.$emit("menuOpenNames","14"),this.refreshPlanList(),this.createUserList(),this.plan.plan=this.$route.query.planId}},c=void 0,d=function(t,e,a){r()(+e)?a():a(new Error(c.$t("indeToken.errorMsg2")))},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Breadcrumb",{staticClass:"bread"},[a("div",{staticClass:"title"},[t._v("添加激励对象")])]),t._v(" "),a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",{staticClass:"capTable",attrs:{bordered:!1}},[a("p",{staticClass:"tipMessage",attrs:{slot:"title"},slot:"title"},[t._v("员工期权计划授权"),a("Icon",{attrs:{type:"ios-help-circle-outline",color:"#2d8cf0",size:"22"},on:{click:function(e){t.helpBox=!t.helpBox}}})],1),t._v(" "),a("div",{staticClass:"fromBoard"},[a("Form",{ref:"plan",attrs:{model:t.plan,"label-position":"left","label-width":140,inline:"",rules:t.ruleInline}},[a("FormItem",{attrs:{label:"选择计划",prop:"plan"}},[a("Select",{model:{value:t.plan.plan,callback:function(e){t.$set(t.plan,"plan",e)},expression:"plan.plan"}},t._l(t.planList,function(e){return a("Option",{key:e.value,attrs:{size:"large",value:e.value}},[t._v(t._s(e.label))])}),1)],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"创建日期",prop:"date"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",size:"large"},model:{value:t.plan.date,callback:function(e){t.$set(t.plan,"date",e)},expression:"plan.date"}})],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"员工名称",prop:"name"}},[a("Select",{attrs:{size:"large"},model:{value:t.plan.name,callback:function(e){t.$set(t.plan,"name",e)},expression:"plan.name"}},t._l(t.userList,function(e,n){return a("Option",{key:n,attrs:{value:e.address,label:e.address}},[a("span",[t._v(t._s(e.address))]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(t._s(e.name))])])}),1)],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"授权数量",prop:"num"}},[a("Input",{attrs:{size:"large"},model:{value:t.plan.num,callback:function(e){t.$set(t.plan,"num",e)},expression:"plan.num"}})],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"行使价格",prop:"pay"}},[a("Input",{attrs:{size:"large"},model:{value:t.plan.pay,callback:function(e){t.$set(t.plan,"pay",e)},expression:"plan.pay"}})],1),a("br")],1),t._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary"},on:{click:t.upCreatePlanUser}},[t._v("发起决议")])],1)],1)])],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"员工期权计划授权书","class-name":"vertical-center-modal"},model:{value:t.helpBox,callback:function(e){t.helpBox=e},expression:"helpBox"}},[a("p",[t._v("2019年1月16日")]),t._v(" "),a("p",[t._v("亲爱的"),a("b",[t._v("【员工名称】")])]),t._v(" "),a("p",[t._v("感谢您成为LittleBeeX Pte Ltd的员工。\n\t\t        在本公司董事会的指示下，本公司已根据名为"),a("b",[t._v("【选择计划】")]),t._v("\n\t\t        的公司期权计划向您授予"),a("b",[t._v("【授权数量】")]),t._v("个公司股权代币，约占公司股权的 * %。\n\t\t        该期权中每个代币的的行使价格为"),a("b",[t._v("【行使价格】")]),t._v("美元。不论公司未来的股份价值如何，\n\t\t        期权行使价格应保持不变。\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t你明白计划规则内所述的条款及条件规管该等股票期权，不论该等股票期权在本授权书日期前是否已获批。\n\t\t\t本规则将取代您与本公司之间关于期权的任何事先的理解或协议，无论是书面的还是其他形式的。\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t期权行使后可转换为公司的可赎回股份。请注意，授予的选择权不是雇佣合同的一部分。\n\t\t\t如果您同意本公司按照本函所列条款及名为"),a("b",[t._v("【选择计划】")]),t._v("“普通员工期权计划”的期权方案，\n\t\t\t请用你的私钥签名，以表示您已接受本期权激励计划。\n\t\t")]),t._v(" "),a("div",{staticClass:"tipMsg",attrs:{slot:"footer"},slot:"footer"},[a("p",[t._v("期权发行条款:")]),t._v(" "),a("p",[t._v("期权严格按照既定计划发放。")]),t._v(" "),a("p",[t._v("如果员工不再受雇于公司,任何未成熟期权将自动失效，并放回公司期权池。")])])])],1)},staticRenderFns:[]};var m=a("C7Lr")(u,v,!1,function(t){a("5qVC"),a("CSlG")},"data-v-b450b78a",null);e.default=m.exports}});
//# sourceMappingURL=7.c038e9d847a7e97ef369.js.map