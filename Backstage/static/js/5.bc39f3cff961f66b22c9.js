webpackJsonp([5],{"+BpL":function(t,n){},gwi3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("9rMa"),i={data:function(){return{language:"简体中文",lang:[{name:"English",type:"en-US"},{name:"简体中文",type:"zh-CN"},{name:"한글",type:"ko-KR"},{name:"日本語",type:"it-JP"}],isLogin:!1}},methods:{closeLogin:function(){var t=this;this.$axios.post("/index.php/cn/home/index/exit_ajax").then(function(){t.$Notice.info({title:"已成功退出！"}),t.isLogin=!0,t.$router.push({path:"/"})})}},computed:Object(a.b)({Address:function(t){return t.web3.coinbase}}),mounted:function(){var t=this;this.$axios.post("/index.php/cn/home/node_se/session_user").then(function(n){n.data.info&&""!=n.data.info&&(t.isLogin=!1)})}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout"},[e("Layout",[e("Header",[e("nav",{staticClass:"navbar navbar-default"},[e("a",{staticClass:"float-left navbar-brand"}),t._v(" "),e("div",{staticClass:"funcall"},[e("ul",{staticClass:"float-left nav-fnc"},[e("li",[e("a",{attrs:{href:"/"}},[t._v("首页")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/"}},[t._v("公司注册")])]),t._v(" "),e("li",[e("router-link",{attrs:{to:"config"}},[t._v("在线治理")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"config"}},[t._v("资产交易")])],1)]),t._v(" "),e("ul",{staticClass:"float-right nav-token"},[t.isLogin?e("li",[e("span",[e("a",{attrs:{href:"/index.php/cn/home/index/register"}},[t._v("注册")])])]):t._e(),t._v(" "),t.isLogin?e("li",[e("span",[e("a",{attrs:{href:"/index.php/cn/home/index/login"}},[t._v("登录")])])]):e("li",[e("span",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeLogin}},[t._v("退出")])])]),t._v(" "),e("Dropdown",{attrs:{trigger:"click"}},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t简体中文\n\t\t\t\t\t\t\t\t"),e("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.lang,function(n){return e("DropdownItem",{on:{click:function(e){t.changeLanguage(n.type,n.name)}}},[t._v(t._s(n.name))])}))],1)],1)])])]),t._v(" "),e("Content",[e("router-view")],1),t._v(" "),e("Footer",[e("footer",[e("div",{staticClass:"footer-logo"}),t._v(" "),e("div",{staticClass:"footer-board"},[e("div",{staticClass:"float-left"},[e("p",[t._v("\n\t\t\t\t\t\t\tLittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、"),e("br"),t._v("\n\t\t\t\t\t\t\t治理以及资产流通。我们权衡了中心化和非中心化的优势，在保"),e("br"),t._v("\n\t\t\t\t\t\t\t证效率和快速决策的同时，是公司治理透明化、自动化。\n\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("@2018 LittleBeeX 版权所有")])]),t._v(" "),e("ul",{staticClass:"float-right"},[e("li",[t._v("152 BEACH ROAD")]),t._v(" "),e("li",[t._v("#14-02 GATEWAY EASY")]),t._v(" "),e("li",[t._v("SINGAPORE(189721)")]),t._v(" "),e("li",[t._v("support@LittleBeeX.com")]),t._v(" "),e("li",[t._v("+65 86870888")])])])])])],1)],1)},staticRenderFns:[]};var s=e("C7Lr")(i,o,!1,function(t){e("yEi0"),e("+BpL")},"data-v-ab547ef6",null);n.default=s.exports},yEi0:function(t,n){}});
//# sourceMappingURL=5.bc39f3cff961f66b22c9.js.map