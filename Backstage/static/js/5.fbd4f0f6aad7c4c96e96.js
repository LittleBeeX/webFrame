webpackJsonp([5],{"0u95":function(t,e){},BUFa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"inner userIdent-inner"},[a("h3",[t._v("公司信息认证")]),t._v(" "),a("div",[a("Form",{attrs:{model:t.userIdent,"label-position":"left","label-width":100,inline:""}},[a("FormItem",{staticClass:"w96",attrs:{label:"公司名称"}},[a("Input",{attrs:{placeholder:"请输入公司名称"},model:{value:t.userIdent.Name,callback:function(e){t.$set(t.userIdent,"Name",e)},expression:"userIdent.Name"}})],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"注册号码"}},[a("Input",{attrs:{placeholder:"请输入注册号码"},model:{value:t.userIdent.Surname,callback:function(e){t.$set(t.userIdent,"Surname",e)},expression:"userIdent.Surname"}})],1),t._v(" "),a("FormItem",{attrs:{label:"注册地点"}},[a("Input",{attrs:{placeholder:"请输入注册地点"},model:{value:t.userIdent.Sex,callback:function(e){t.$set(t.userIdent,"Sex",e)},expression:"userIdent.Sex"}})],1),a("br"),t._v(" "),a("FormItem",{attrs:{label:"注册资本"}},[a("Input",{attrs:{placeholder:"请输入注册资本"},model:{value:t.userIdent.nationality,callback:function(e){t.$set(t.userIdent,"nationality",e)},expression:"userIdent.nationality"}})],1),t._v(" "),a("FormItem",{attrs:{label:"成立日期"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"成立日期"},model:{value:t.userIdent.BirDate,callback:function(e){t.$set(t.userIdent,"BirDate",e)},expression:"userIdent.BirDate"}})],1),a("br"),t._v(" "),a("FormItem",{staticClass:"w96",attrs:{label:"企业唯一标识"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"企业唯一标识"}})],1)],1),t._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.backConfig()}}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.goCompany()}}},[t._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),a("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)])])},staticRenderFns:[]};var r=a("VU/8")({data:function(){return{userIdent:{Name:"",Surname:"",Sex:"",nationality:"",BirDate:"",Address:""}}},methods:{backConfig:function(){this.$router.push({path:"UserIdent"})},goCompany:function(){this.$router.push({path:"TokenSet"})}}},n,!1,function(t){a("0u95")},"data-v-0fc675cc",null);e.default=r.exports}});
//# sourceMappingURL=5.fbd4f0f6aad7c4c96e96.js.map