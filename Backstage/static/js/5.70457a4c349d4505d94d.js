webpackJsonp([5],{Ujxd:function(t,n){},X9Ui:function(t,n){},gwi3:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{language:"简体中文",lang:[{name:"English",type:"en-US"},{name:"简体中文",type:"zh-CN"},{name:"한글",type:"ko-KR"},{name:"日本語",type:"it-JP"}],isLogin:!1}},methods:{closeLogin:function(){var t=this;this.$axios.post("/index.php/cn/home/index/exit_ajax").then(function(){t.$Notice.info({title:"已成功退出！"}),t.isLogin=!0,t.$router.push({path:"/"})})}},mounted:function(){this.$axios.post("/index.php/cn/home/node_se/session_user").then(function(t){""==t.data.info&&console.log("跳转登录")})}},i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"layout"},[a("Layout",[a("Header",[a("nav",{staticClass:"navbar navbar-default"},[a("a",{staticClass:"float-left navbar-brand"}),t._v(" "),a("div",{staticClass:"funcall"},[a("ul",{staticClass:"float-left nav-fnc"},[a("li",[a("a",{attrs:{href:"http://www.baidu.com"}},[t._v("公司注册")])]),t._v(" "),a("li",[a("router-link",{attrs:{to:"config"}},[t._v("在线治理")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"config"}},[t._v("资产交易")])],1)]),t._v(" "),a("ul",{staticClass:"float-right nav-token"},[t.isLogin?a("li",[a("span",[a("a",{attrs:{href:"register.html"}},[t._v("注册")])])]):t._e(),t._v(" "),t.isLogin?a("li",[a("span",[a("a",{attrs:{href:"login.html"}},[t._v("登录")])])]):a("li",[a("span",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeLogin}},[t._v("退出")])])]),t._v(" "),a("Dropdown",{attrs:{trigger:"click"}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t简体中文\n\t\t\t\t\t\t\t\t"),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.lang,function(n){return a("DropdownItem",{on:{click:function(a){t.changeLanguage(n.type,n.name)}}},[t._v(t._s(n.name))])}))],1)],1)])])]),t._v(" "),a("Content",[a("router-view")],1),t._v(" "),a("Footer",[a("footer",[a("div",{staticClass:"footer-logo"}),t._v(" "),a("div",{staticClass:"footer-board"},[a("div",{staticClass:"float-left"},[a("p",[t._v("\n\t\t\t\t\t\t\tLittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、"),a("br"),t._v("\n\t\t\t\t\t\t\t治理以及资产流通。我们权衡了中心化和非中心化的优势，在保"),a("br"),t._v("\n\t\t\t\t\t\t\t证效率和快速决策的同时，是公司治理透明化、自动化。\n\t\t\t\t\t\t")]),t._v(" "),a("p",[t._v("@2018 LittleBeeX 版权所有")])]),t._v(" "),a("ul",{staticClass:"float-right"},[a("li",[t._v("152 BEACH ROAD")]),t._v(" "),a("li",[t._v("#14-02 GATEWAY EASY")]),t._v(" "),a("li",[t._v("SINGAPORE(189721)")]),t._v(" "),a("li",[t._v("support@LittleBeeX.com")]),t._v(" "),a("li",[t._v("+65 86870888")])])])])])],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(e,i,!1,function(t){a("Ujxd"),a("X9Ui")},"data-v-7d181570",null);n.default=o.exports}});
//# sourceMappingURL=5.70457a4c349d4505d94d.js.map