webpackJsonp([7],{GPdl:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("4YfN"),a=s.n(r),n=s("6iV/"),i=s.n(n),o=s("9rMa"),l=s("3Yup"),u={data:function(){return{file:null,loadingStatus:!1,userType:{isShow:!1,setMes:"",type:"info"},userIsIdint:!1,userIdent:{name:"",surname:"",passports:"",sex:"",nationality:"",birDate:""},sexList:[{value:"1",label:"男"},{value:"2",label:"女"}],nationalityList:[{country:"中国",en:"China",code:"86"},{country:"中国香港",en:"Hong Kong",code:"852"}],ruleInline:{name:[{required:!0,message:"请输入名",trigger:"blur"}],surname:[{required:!0,message:"请输入姓",trigger:"blur"}],passports:[{required:!0,message:"请输入护照号码",trigger:"blur"}],birDate:[{required:!0,type:"date",message:"请选择出生日期",trigger:"change"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],nationality:[{required:!0,message:"请选择国籍",trigger:"change"}]},defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"}],imgUrl:"",visible:!1,uploadList:[],onlys:""}},computed:a()({},Object(o.b)({Address:function(e){return e.web3.coinbase}})),methods:{backConfig:function(){this.$router.push({path:"Config"})},goCompany:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var s={address:t.Address,name:t.userIdent.name,surname:t.userIdent.surname,passports:t.userIdent.passports,sex:t.userIdent.sex,nationality:t.userIdent.nationality,birthtime:t.userIdent.birDate,only:t.onlys};t.$axios({method:"post",url:"/index.php/cn/home/node_su/geren_tijiao",data:i.a.stringify(s)}).then(function(e){0==e.data.state&&(void 0!=t.$route.query.only?t.$router.push({path:"TokenPayment",query:{only:t.onlys}}):"error"==t.userType.type?t.$router.push({path:"/"}):t.$router.push({path:"companyIdent"}))})}else t.$Notice.warning({title:"请正确输入表单信息！"})})},handleView:function(e){this.imgUrl=e,this.visible=!0},handleSuccess:function(e,t){t.url=e.picture,t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleBeforeUpload:function(e){var t=this.$refs.upload.fileList;return this.$refs.upload.fileList.splice(t.indexOf(e),1),!0}},created:function(){var e=this;if(this.$axios.post("/index.php/cn/home/node_se/nationality").then(function(t){e.nationalityList=t.data.info}),void 0!=this.$route.query.only){this.onlys=this.$route.query.only;var t={address:this.Address,only:this.onlys};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:i.a.stringify(t)}).then(function(t){var s=t.data.info.chain;0==t.data.state&&(e.userIdent.surname=s.surname,e.userIdent.passports=s.passports,e.userIdent.name=s.name,e.userIdent.sex=s.sex,e.userIdent.nationality=s.nationality,e.userIdent.birDate=l.a.timestampToTime(s.birthtime),e.defaultList[0].url=s.picture),1==s.state?(e.userType.isShow=!0,e.userType.setMes="个人认证正在加速审核中，请耐心等耐！",e.userIsIdint=!0):3==s.state?(e.userType.isShow=!0,e.userType.type="error",e.userType.setMes=s.remarks,e.nextBtn=!0):2==s.state&&(e.userType.isShow=!0,e.userType.setMes="个人认证审核已经通过！")})}else this.onlys=""},mounted:function(){this.uploadList=this.$refs.upload.fileList}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index-board"},[s("div",{staticClass:"inner"},[s("h3",[e._v("个人信息认证")]),e._v(" "),s("div",[s("Form",{ref:"userIdent",attrs:{model:e.userIdent,"label-position":"left","label-width":75,inline:"",rules:e.ruleInline}},[s("FormItem",{attrs:{label:"名",prop:"name"}},[s("Input",{attrs:{size:"large",placeholder:"请输入名",readonly:e.userIsIdint},model:{value:e.userIdent.name,callback:function(t){e.$set(e.userIdent,"name",t)},expression:"userIdent.name"}})],1),e._v(" "),s("FormItem",{attrs:{label:"姓",prop:"surname"}},[s("Input",{attrs:{size:"large",placeholder:"请输入姓",readonly:e.userIsIdint},model:{value:e.userIdent.surname,callback:function(t){e.$set(e.userIdent,"surname",t)},expression:"userIdent.surname"}})],1),e._v(" "),s("FormItem",{attrs:{label:"性别",prop:"sex"}},[s("Select",{attrs:{readonly:e.userIsIdint},model:{value:e.userIdent.sex,callback:function(t){e.$set(e.userIdent,"sex",t)},expression:"userIdent.sex"}},e._l(e.sexList,function(t){return s("Option",{key:t.value,attrs:{size:"large",value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),s("FormItem",{attrs:{label:"国籍",prop:"nationality"}},[s("Select",{attrs:{readonly:e.userIsIdint,size:"large"},model:{value:e.userIdent.nationality,callback:function(t){e.$set(e.userIdent,"nationality",t)},expression:"userIdent.nationality"}},e._l(e.nationalityList,function(t,r){return s("Option",{key:r,attrs:{value:r,label:t.country}},[s("span",[e._v(e._s(t.country))]),e._v(" "),s("span",{staticStyle:{float:"right",color:"#ccc"}},[e._v(e._s(t.en))])])}))],1),e._v(" "),s("FormItem",{attrs:{label:"出生日期",prop:"birDate"}},[s("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",size:"large",placeholder:"出生日期",readonly:e.userIsIdint},model:{value:e.userIdent.birDate,callback:function(t){e.$set(e.userIdent,"birDate",t)},expression:"userIdent.birDate"}})],1),e._v(" "),s("FormItem",{attrs:{label:"护照号码",prop:"passports"}},[s("Input",{attrs:{size:"large",placeholder:"请输入护照号码",readonly:e.userIsIdint},model:{value:e.userIdent.passports,callback:function(t){e.$set(e.userIdent,"passports",t)},expression:"userIdent.passports"}})],1),e._v(" "),s("br"),e._v(" "),s("FormItem",{staticClass:"address",attrs:{label:"钱包地址"}},[s("Input",{attrs:{size:"large",readonly:""},model:{value:e.Address,callback:function(t){e.Address=t},expression:"Address"}})],1),s("br"),e._v(" "),s("FormItem",{attrs:{label:"护照上传"}},[s("Upload",{ref:"upload",attrs:{readonly:e.userIsIdint,data:{address:e.Address,name:e.userIdent.name,surname:e.userIdent.surname,passports:e.userIdent.passports,sex:e.userIdent.sex,nationality:e.userIdent.nationality,birthtime:e.userIdent.birDate,only:e.onlys},"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"before-upload":e.handleBeforeUpload,multiple:"",name:"picture",action:"/index.php/cn/home/node_su/geren_tijiao"}},[s("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("上传护照")])],1),e._v(" "),s("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?s("img",{staticStyle:{width:"100%"},attrs:{src:e.imgUrl}}):e._e()]),e._v(" "),e._l(e.uploadList,function(t,r){return s("div",{staticClass:"demo-upload-list"},["finished"===t.status?[s("img",{attrs:{src:t.url}}),e._v(" "),s("div",{staticClass:"demo-upload-list-cover"},[s("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(s){e.handleView(t.url)}}})],1)]:[t.showProgress?s("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)})],2)],1),e._v(" "),e.userType.isShow?s("Alert",{attrs:{type:e.userType.type}},[e._v(e._s(e.userType.setMes))]):s("div",{staticClass:"btn-con"},[s("Button",{staticClass:"fl",attrs:{type:"primary"},on:{click:function(t){e.backConfig()}}},[s("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),e._v(" "),s("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(t){e.goCompany("userIdent")}}},[e._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),s("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),e._v(" "),"error"==e.userType.type?s("div",{staticClass:"btn-con"},[s("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(t){e.goCompany("userIdent")}}},[e._v("\n\t\t\t\t\t提交\n\t\t\t\t\t"),s("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1):e._e()],1)])])},staticRenderFns:[]};var c=s("C7Lr")(u,d,!1,function(e){s("ih5A"),s("tNwX")},"data-v-4744be0e",null);t.default=c.exports},ih5A:function(e,t){},tNwX:function(e,t){}});
//# sourceMappingURL=7.ffe61eb8974ce72f9ad0.js.map