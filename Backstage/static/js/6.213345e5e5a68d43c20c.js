webpackJsonp([6],{BUFa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("6iV/"),o=n.n(a),r=n("9rMa"),i={data:function(){return{companyIdent:{Name:"",Number:"",Site:"",Fund:"",BirDate:"",IdentCode:""},companyType:{isShow:!1,setMes:"",type:"info"},nationalityList:[{country:"中国",en:"China",code:"86"},{country:"中国香港",en:"Hong Kong",code:"852"}],companyIsIdint:!1,ruleInline:{Name:[{required:!0,message:"请输入公司名称",trigger:"blur"}],Number:[{required:!0,message:"请输入注册号码",trigger:"blur"}],Site:[{required:!0,message:"请选择注册地点",trigger:"change"}],Fund:[{required:!0,message:"请输入注册资本",trigger:"blur"}],BirDate:[{required:!0,message:"请选择成立日期",trigger:"change",type:"date"}],IdentCode:[{required:!0,message:"请输入组织名称",trigger:"blur"}]}}},computed:Object(r.b)({Address:function(t){return t.web3.coinbase}}),methods:{backUser:function(){var t=void 0!=this.$route.query.only?this.$route.query.only:null;this.$router.push({path:"UserIdent",query:{only:t}})},goTokenSet:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var n={code:e.companyIdent.Number,name:e.companyIdent.Name,address:e.companyIdent.Site,capital:e.companyIdent.Fund,only:e.companyIdent.IdentCode,establish:e.companyIdent.BirDate};e.$axios({method:"post",url:"/index.php/cn/home/node_su/company_tijiao",data:o.a.stringify(n)}).then(function(t){0==t.data.state?void 0!=e.$route.query.only&&"error"==e.userType.type?(e.$Notice.info({title:"公司信息已重新提交，请等待审核通过！"}),e.$router.push({path:"/"})):e.$router.push({path:"TokenSet",query:{only:e.companyIdent.IdentCode}}):e.$Notice.warning({title:"该组织名称已被占用！"})})}else e.$Notice.warning({title:"请正确输入表单信息！"})})},isIdentCode:function(t){var e=this;if(""!=this.companyIdent.IdentCode)if(this.companyIdent.IdentCode!=this.$route.query.only){var n={address:this.Address,only:this.companyIdent.IdentCode};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:o.a.stringify(n)}).then(function(t){2==t.data.state?e.$Notice.info({title:"该组织名称暂无占用！"}):e.$Notice.warning({title:"该组织名称已被占用！"})})}else this.$Notice.info({title:"该组织名称暂无占用！"});else this.$Notice.warning({title:"组织名称不能为空！"})}},created:function(){var t=this;if(this.$axios.post("/index.php/cn/home/node_se/nationality").then(function(e){t.nationalityList=e.data.info}),void 0!=this.$route.query.only){var e={address:this.Address,only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:o.a.stringify(e)}).then(function(e){var n=e.data.info.company;0==e.data.state&&(t.companyIdent.Number=n.code,t.companyIdent.Name=n.name,t.companyIdent.Site=n.address,t.companyIdent.BirDate=n.establish,t.companyIdent.Fund=n.capital,t.companyIdent.IdentCode=n.only),1==n.state?(t.companyType.isShow=!0,t.companyType.setMes="公司认证正在加速审核中，请耐心等耐！",t.companyIsIdint=!0):3==n.state?(t.companyType.isShow=!0,t.companyType.type="error",t.companyType.setMes=n.remarks,t.companyIsIdint=!1):2==n.state&&(t.companyType.isShow=!0,t.companyType.setMes="公司认证审核已经通过！",t.companyIsIdint=!0)})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-board"},[n("div",{staticClass:"inner"},[n("h3",[t._v("公司信息认证")]),t._v(" "),n("div",[n("Form",{ref:"companyIdent",attrs:{model:t.companyIdent,"label-position":"left","label-width":75,inline:"",rules:t.ruleInline}},[n("FormItem",{staticClass:" w66",attrs:{label:"公司名称",prop:"Name"}},[n("Input",{attrs:{size:"large",placeholder:"请输入公司名称",readonly:t.companyIsIdint},model:{value:t.companyIdent.Name,callback:function(e){t.$set(t.companyIdent,"Name",e)},expression:"companyIdent.Name"}})],1),n("br"),t._v(" "),n("FormItem",{attrs:{label:"注册号码",prop:"Number"}},[n("Input",{attrs:{size:"large",placeholder:"请输入注册号码",readonly:t.companyIsIdint},model:{value:t.companyIdent.Number,callback:function(e){t.$set(t.companyIdent,"Number",e)},expression:"companyIdent.Number"}})],1),t._v(" "),n("FormItem",{attrs:{label:"注册国家",prop:"Site"}},[n("Select",{attrs:{readonly:t.companyIsIdint,size:"large"},model:{value:t.companyIdent.Site,callback:function(e){t.$set(t.companyIdent,"Site",e)},expression:"companyIdent.Site"}},t._l(t.nationalityList,function(e,a){return n("Option",{key:a,attrs:{value:a,label:e.country}},[n("span",[t._v(t._s(e.country))]),t._v(" "),n("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(t._s(e.en))])])}),1)],1),t._v(" "),n("FormItem",{attrs:{label:"注册资本",prop:"Fund"}},[n("Input",{attrs:{size:"large",placeholder:"请输入注册资本",readonly:t.companyIsIdint},model:{value:t.companyIdent.Fund,callback:function(e){t.$set(t.companyIdent,"Fund",e)},expression:"companyIdent.Fund"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("USD$")])])],1),t._v(" "),n("FormItem",{attrs:{label:"成立日期",prop:"BirDate"}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{size:"large",type:"date",placeholder:"成立日期",readonly:t.companyIsIdint},model:{value:t.companyIdent.BirDate,callback:function(e){t.$set(t.companyIdent,"BirDate",e)},expression:"companyIdent.BirDate"}})],1),t._v(" "),n("FormItem",{attrs:{label:"组织名称",prop:"IdentCode"}},[n("Input",{attrs:{placeholder:"企业组织名称",size:"large",readonly:t.companyIsIdint},model:{value:t.companyIdent.IdentCode,callback:function(e){t.$set(t.companyIdent,"IdentCode",e)},expression:"companyIdent.IdentCode"}},[n("Button",{attrs:{slot:"append"},on:{click:function(e){t.isIdentCode(t.companyIdent.IdentCode)}},slot:"append"},[n("Icon",{attrs:{type:"ios-search",size:"16"}})],1)],1)],1)],1),t._v(" "),t.companyType.isShow?n("Alert",{attrs:{type:t.companyType.type}},[t._v(t._s(t.companyType.setMes))]):n("div",{staticClass:"btn-con"},[n("Button",{staticClass:"fl",attrs:{type:"primary"},on:{click:function(e){t.backUser()}}},[n("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),t._v(" "),n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(e){t.goTokenSet("companyIdent")}}},[t._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),t._v(" "),"error"==t.companyType.type?n("div",{staticClass:"btn-con"},[n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(e){t.goTokenSet("companyIdent")}}},[t._v("\n\t\t\t\t\t提交\n\t\t\t\t\t"),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1):t._e()],1)])])},staticRenderFns:[]};var d=n("C7Lr")(i,s,!1,function(t){n("oo4D"),n("MbCG")},"data-v-c7c15d14",null);e.default=d.exports},MbCG:function(t,e){},oo4D:function(t,e){}});
//# sourceMappingURL=6.213345e5e5a68d43c20c.js.map