webpackJsonp([1],{GPdl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"inner"},[a("h3",[e._v("个人信息认证")]),e._v(" "),a("div",[a("Form",{ref:"userIdent",attrs:{model:e.userIdent,"label-position":"left","label-width":80,inline:"",rules:e.ruleInline}},[a("FormItem",{attrs:{label:"名",prop:"Name"}},[a("Input",{attrs:{placeholder:"请输入名"},model:{value:e.userIdent.Name,callback:function(t){e.$set(e.userIdent,"Name",t)},expression:"userIdent.Name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"姓",prop:"Surname"}},[a("Input",{attrs:{placeholder:"请输入姓"},model:{value:e.userIdent.Surname,callback:function(t){e.$set(e.userIdent,"Surname",t)},expression:"userIdent.Surname"}})],1),e._v(" "),a("FormItem",{attrs:{label:"性别",prop:"Sex"}},[a("Select",{model:{value:e.userIdent.Sex,callback:function(t){e.$set(e.userIdent,"Sex",t)},expression:"userIdent.Sex"}},e._l(e.sexList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"国籍",prop:"nationality"}},[a("Select",{model:{value:e.userIdent.nationality,callback:function(t){e.$set(e.userIdent,"nationality",t)},expression:"userIdent.nationality"}},e._l(e.nationalityList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"出生日期",prop:"BirDate"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"出生日期"},model:{value:e.userIdent.BirDate,callback:function(t){e.$set(e.userIdent,"BirDate",t)},expression:"userIdent.BirDate"}})],1),e._v(" "),a("br"),e._v(" "),a("FormItem",{staticClass:"address",attrs:{label:"Address"}},[a("Input",{attrs:{readonly:""},model:{value:e.userIdent.Address,callback:function(t){e.$set(e.userIdent,"Address",t)},expression:"userIdent.Address"}})],1),e._v(" "),a("FormItem",{attrs:{label:"护照上传"}},[a("Upload",{ref:"upload",attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,multiple:"",action:"/index.php/cn/home/node_su/geren_tijiao_img"}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("Select the file to upload")])],1),e._v(" "),a("Modal",{attrs:{title:"View Image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?a("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+e.imgName+"/large"}}):e._e()]),e._v(" "),e._l(e.uploadList,function(t){return a("div",{staticClass:"demo-upload-list"},["finished"===t.status?[a("img",{attrs:{src:t.url}}),e._v(" "),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(a){e.handleView(t.name)}}}),e._v(" "),a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){e.handleRemove(t)}}})],1)]:[t.showProgress?a("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)})],2)],1),e._v(" "),a("Alert",{staticClass:"w96"},[e._v("当前个人信息审核中")]),e._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.backConfig()}}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.goCompany("userIdent")}}},[e._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),a("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)])])},staticRenderFns:[]};var s=a("VU/8")({data:function(){return{file:null,loadingStatus:!1,userIdent:{Name:"",Surname:"",Sex:"",nationality:"",BirDate:"",Address:""},sexList:[{value:"1",label:"男"},{value:"2",label:"女"}],nationalityList:[{value:"1",label:"中国"},{value:"2",label:"美国"}],ruleInline:{Name:[{required:!0,message:"请输入名",trigger:"blur"}],Surname:[{required:!0,message:"请输入姓",trigger:"blur"}],BirDate:[{required:!0,type:"date",message:"请选择出生日期",trigger:"change"}],Sex:[{required:!0,message:"请选择性别",trigger:"change"}],nationality:[{required:!0,message:"请选择国籍",trigger:"change"}]},defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[]}},methods:{backConfig:function(){this.$router.push({path:"Config"})},goCompany:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$router.push({path:"CompanyIdent"}):t.$Message.error("请正确输入表单信息！")})},handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(e),1)},handleSuccess:function(e,t){t.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+e.name+" is too large, no more than 2M."})},handleBeforeUpload:function(){var e=this.uploadList.length<5;return e||this.$Notice.warning({title:"Up to five pictures can be uploaded."}),e}},mounted:function(){this.uploadList=this.$refs.upload.fileList}},n,!1,function(e){a("oeOT"),a("MBuH")},"data-v-9b88476c",null);t.default=s.exports},MBuH:function(e,t){},oeOT:function(e,t){}});
//# sourceMappingURL=1.048abe532bd654da79e6.js.map