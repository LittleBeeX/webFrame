webpackJsonp([6],{fDrM:function(t,e){},gwi3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("9rMa"),i=n("3Yup"),s={data:function(){return{language:"简体中文",lang:[{name:"English",type:"en-US"},{name:"简体中文",type:"zh-CN"}],isLogin:!0}},methods:{closeLogin:function(){var t=this;this.$axios.post("/index.php/cn/home/index/exit_ajax").then(function(){t.$Notice.success({title:"已成功退出！"}),t.isLogin=!0,t.$router.push({path:"/"})})},changeLanguage:function(){console.log(333)},refreshLang:function(){i.a.getSection("lang")&&"en"==i.a.getSection("lang")?this.$i18n.locale="en":this.$i18n.locale="zh"}},computed:Object(a.b)({Address:function(t){return t.web3.coinbase}}),created:function(){var t=this;this.refreshLang(),this.$axios.post("/index.php/cn/home/node_se/session_user").then(function(e){t.isLogin=!e})}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",[n("Header",[n("nav",{staticClass:"navbar navbar-default"},[n("a",{staticClass:"float-left navbar-brand",attrs:{href:"/index.php/cn/home/index"}}),t._v(" "),n("div",{staticClass:"funcall"},[n("ul",{staticClass:"float-left nav-fnc"},[n("li",[n("a",{attrs:{href:"/"}},[t._v("首页")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/"}},[t._v("公司注册")])]),t._v(" "),n("li",[n("router-link",{attrs:{to:"config"}},[t._v("在线治理")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"/index.php/cn/home/index"}},[t._v("资产交易")])])]),t._v(" "),n("ul",{staticClass:"float-right nav-token"},[t.isLogin?n("li",[n("span",[n("a",{attrs:{href:"/index.php/cn/home/index/register"}},[t._v("注册")])])]):t._e(),t._v(" "),t.isLogin?n("li",[n("span",[n("a",{attrs:{href:"/index.php/cn/home/index/login"}},[t._v("登录")])])]):n("li",[n("span",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeLogin}},[t._v("退出")])])]),t._v(" "),n("Dropdown",{attrs:{trigger:"click"},on:{"on-click":function(e){t.changeLanguage()}}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.language)+"\n\t\t\t\t\t\t\t\t"),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.lang,function(e){return n("DropdownItem",[t._v(t._s(e.name))])}),1)],1)],1)])])]),t._v(" "),n("Content",[n("router-view")],1),t._v(" "),n("Footer",[n("footer",[n("div",{staticClass:"footer-logo"}),t._v(" "),n("div",{staticClass:"footer-board"},[n("div",{staticClass:"float-left"},[n("p",[t._v("\n\t\t\t\t\t\t\tLittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、"),n("br"),t._v("\n\t\t\t\t\t\t\t治理以及资产流通。我们权衡了中心化和非中心化的优势，在保"),n("br"),t._v("\n\t\t\t\t\t\t\t证效率和快速决策的同时，是公司治理透明化、自动化。\n\t\t\t\t\t\t")]),t._v(" "),n("p",[t._v("@2018 LittleBeeX 版权所有")])]),t._v(" "),n("ul",{staticClass:"float-right"},[n("li",[t._v("152 BEACH ROAD")]),t._v(" "),n("li",[t._v("#14-02 GATEWAY EASY")]),t._v(" "),n("li",[t._v("SINGAPORE(189721)")]),t._v(" "),n("li",[t._v("support@LittleBeeX.com")]),t._v(" "),n("li",[t._v("+65 86870888")])])])])])],1)],1)},staticRenderFns:[]};var r=n("C7Lr")(s,o,!1,function(t){n("fDrM"),n("jQ6I")},"data-v-38c8e7af",null);e.default=r.exports},jQ6I:function(t,e){}});
//# sourceMappingURL=6.858bae2b46d30ef63a91.js.map