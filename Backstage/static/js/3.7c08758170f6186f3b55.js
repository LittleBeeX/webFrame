webpackJsonp([3],{AIDV:function(e,t){},GPdl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("6iV/"),n=a.n(s),r=a("9rMa"),i={data:function(){return{file:null,loadingStatus:!1,userType:{isShow:!1,setMes:"",type:"info"},userIdent:{name:"",surname:"",sex:"",nationality:"",birDate:""},sexList:[{value:"1",label:"男"},{value:"2",label:"女"}],nationalityList:[{country:"中国",en:"China",code:"86"},{country:"中国香港",en:"Hong Kong",code:"852"}],ruleInline:{Name:[{required:!0,message:"请输入名",trigger:"blur"}],Surname:[{required:!0,message:"请输入姓",trigger:"blur"}],BirDate:[{required:!0,type:"date",message:"请选择出生日期",trigger:"change"}],Sex:[{required:!0,message:"请选择性别",trigger:"change"}],nationality:[{required:!0,message:"请选择国籍",trigger:"change"}]},defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"}],imgName:"",visible:!1,uploadList:[]}},computed:Object(r.b)({Address:function(e){return e.web3.coinbase}}),methods:{backConfig:function(){this.$router.push({path:"Config"})},goCompany:function(e){var t=this;this.$refs[e].validate(function(e){if(e){alert(333);var a={address:t.Address,name:t.userIdent.name,surname:t.userIdent.surname,sex:t.userIdent.sex,nationality:t.userIdent.nationality,birthtime:t.userIdent.birDate};console.log(a),t.$axios({method:"post",url:"/index.php/cn/home/node_su/geren_tijiao",data:n.a.stringify(a)}).then(function(e){0==e.data.state&&console.log(e)})}else t.$Notice.warning({title:"请正确输入表单信息！"})})},handleView:function(e){this.imgName=e,this.visible=!0},handleSuccess:function(e,t){console.log(e),t.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleBeforeUpload:function(e){var t=this.$refs.upload.fileList;return this.$refs.upload.fileList.splice(t.indexOf(e),1),!0}},mounted:function(){var e=this;this.uploadList=this.$refs.upload.fileList,this.$axios.post("/index.php/cn/home/node_se/nationality").then(function(t){e.nationalityList=t.data.info}),console.log(this.$store.state.web3,this.$store.state.web3[0]);var t={address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_se/chain",data:n.a.stringify(t)}).then(function(t){var a=t.data.info;0==t.data.state&&(e.userIdent.surname=a.surname,e.userIdent.name=a.name,e.userIdent.sex=a.sex,e.userIdent.nationality=a.nationality,e.userIdent.birDate=a.birthtime,e.defaultList[0].url=a.picture)})}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"inner"},[a("h3",[e._v("个人信息认证")]),e._v(" "),a("div",[a("Form",{ref:"userIdent",attrs:{model:e.userIdent,"label-position":"left","label-width":80,inline:"",rules:e.ruleInline}},[a("FormItem",{attrs:{label:"名",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入名"},model:{value:e.userIdent.name,callback:function(t){e.$set(e.userIdent,"name",t)},expression:"userIdent.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"姓",prop:"surname"}},[a("Input",{attrs:{placeholder:"请输入姓"},model:{value:e.userIdent.surname,callback:function(t){e.$set(e.userIdent,"surname",t)},expression:"userIdent.surname"}})],1),e._v(" "),a("FormItem",{attrs:{label:"性别",prop:"sex"}},[a("Select",{model:{value:e.userIdent.sex,callback:function(t){e.$set(e.userIdent,"sex",t)},expression:"userIdent.sex"}},e._l(e.sexList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"国籍",prop:"nationality"}},[a("Select",{model:{value:e.userIdent.nationality,callback:function(t){e.$set(e.userIdent,"nationality",t)},expression:"userIdent.nationality"}},e._l(e.nationalityList,function(t,s){return a("Option",{key:s,attrs:{value:t.code}},[e._v(e._s(t.country))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"出生日期",prop:"birDate"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"出生日期"},model:{value:e.userIdent.birDate,callback:function(t){e.$set(e.userIdent,"birDate",t)},expression:"userIdent.birDate"}})],1),e._v(" "),a("br"),e._v(" "),a("FormItem",{staticClass:"address",attrs:{label:"钱包地址"}},[a("Input",{attrs:{readonly:""},model:{value:e.Address,callback:function(t){e.Address=t},expression:"Address"}})],1),e._v(" "),a("FormItem",{attrs:{label:"护照上传"}},[a("Upload",{ref:"upload",attrs:{data:{address:e.Address},"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"before-upload":e.handleBeforeUpload,multiple:"",name:"picture",action:"/index.php/cn/home/node_su/geren_tijiao"}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("Select the file to upload")])],1),e._v(" "),a("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?a("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+e.imgName+"/large"}}):e._e()]),e._v(" "),e._l(e.uploadList,function(t,s){return a("div",{staticClass:"demo-upload-list"},["finished"===t.status?[a("img",{attrs:{src:t.url}}),e._v(" "),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(a){e.handleView(t.name)}}})],1)]:[t.showProgress?a("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)})],2)],1),e._v(" "),e.userType.isShow?a("Alert",{staticClass:"w96",attrs:{type:e.userType.type}},[e._v(e._s(e.userType.setMes))]):e._e(),e._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.backConfig()}}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.goCompany("userIdent")}}},[e._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),a("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)])])},staticRenderFns:[]};var l=a("C7Lr")(i,o,!1,function(e){a("AIDV"),a("IGEm")},"data-v-1eb10176",null);t.default=l.exports},IGEm:function(e,t){}});
//# sourceMappingURL=3.7c08758170f6186f3b55.js.map