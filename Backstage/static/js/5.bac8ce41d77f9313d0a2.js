webpackJsonp([5],{UYWU:function(t,a){},fZI7:function(t,a){},gwi3:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"layout"},[n("Layout",[n("Header",[n("nav",{staticClass:"navbar navbar-default"},[n("a",{staticClass:"float-left navbar-brand"}),t._v(" "),n("div",{staticClass:"funcall"},[n("ul",{staticClass:"float-left nav-fnc"},[n("li",[n("a",{attrs:{href:"http://www.baidu.com"}},[t._v("公司注册")])]),t._v(" "),n("li",[n("router-link",{attrs:{to:"config"}},[t._v("在线治理")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"config"}},[t._v("资产交易")])],1)]),t._v(" "),n("ul",{staticClass:"float-right nav-token"},[t.isLogin?n("li",[n("span",[n("a",{attrs:{href:"register.html"}},[t._v("注册")])])]):t._e(),t._v(" "),t.isLogin?n("li",[n("span",[n("a",{attrs:{href:"login.html"}},[t._v("登录")])])]):n("li",[n("span",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeLogin}},[t._v("退出")])])]),t._v(" "),n("Dropdown",{attrs:{trigger:"click"}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t简体中文\n\t\t\t\t\t\t\t\t"),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.lang,function(a){return n("DropdownItem",{on:{click:function(n){t.changeLanguage(a.type,a.name)}}},[t._v(t._s(a.name))])}))],1)],1)])])]),t._v(" "),n("Content",[n("router-view")],1),t._v(" "),n("Footer",[n("footer",[n("div",{staticClass:"footer-logo"}),t._v(" "),n("div",{staticClass:"footer-board"},[n("div",{staticClass:"float-left"},[n("p",[t._v("\n\t\t\t\t\t\t\tLittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、"),n("br"),t._v("\n\t\t\t\t\t\t\t治理以及资产流通。我们权衡了中心化和非中心化的优势，在保"),n("br"),t._v("\n\t\t\t\t\t\t\t证效率和快速决策的同时，是公司治理透明化、自动化。\n\t\t\t\t\t\t")]),t._v(" "),n("p",[t._v("@2018 LittleBeeX 版权所有")])]),t._v(" "),n("ul",{staticClass:"float-right"},[n("li",[t._v("152 BEACH ROAD")]),t._v(" "),n("li",[t._v("#14-02 GATEWAY EASY")]),t._v(" "),n("li",[t._v("SINGAPORE(189721)")]),t._v(" "),n("li",[t._v("support@LittleBeeX.com")]),t._v(" "),n("li",[t._v("+65 86870888")])])])])])],1)],1)},staticRenderFns:[]};var i=n("C7Lr")({data:function(){return{language:"简体中文",lang:[{name:"English",type:"en-US"},{name:"简体中文",type:"zh-CN"},{name:"한글",type:"ko-KR"},{name:"日本語",type:"it-JP"}],isLogin:!1}},methods:{closeLogin:function(){var t=this;this.$axios.post("/index.php/cn/home/index/exit_ajax").then(function(){t.$Notice.info({title:"已成功退出！"}),t.isLogin=!0,t.$router.push({path:"/"})})}}},e,!1,function(t){n("UYWU"),n("fZI7")},"data-v-2acbf80a",null);a.default=i.exports}});
//# sourceMappingURL=5.bac8ce41d77f9313d0a2.js.map