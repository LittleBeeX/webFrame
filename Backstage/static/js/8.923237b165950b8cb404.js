webpackJsonp([8],{gwi3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("9rMa"),s=e("3Yup"),a={data:function(){return{language:"简体中文",lang:[{title:"简体中文",type:"cn"},{title:"English",type:"en"}],isLogin:!0}},methods:{closeLogin:function(){var t=this;this.$axios.post("/index.php/cn/home/index/exit_ajax").then(function(){t.$Notice.success({title:"已成功退出！"}),t.isLogin=!0,t.$router.push({path:"/"})})},changeLanguage:function(t){this.$i18n.locale="en"==t?"en":"cn",this.$i18n.locale=t,this.language=this.$t("index.btn8"),s.a.setSection("lang",t)},refreshLang:function(){void 0!=this.$route.query.lang?(s.a.setSection("lang",this.$route.query.lang),this.changeLanguage(this.$route.query.lang)):this.changeLanguage(s.a.getSection("lang"))}},computed:Object(i.b)({Address:function(t){return t.web3.coinbase}}),created:function(){var t=this;this.refreshLang(),this.$axios.post("/index.php/cn/home/node_se/session_user").then(function(n){t.isLogin=!n})}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout"},[e("Layout",[e("Header",[e("nav",{staticClass:"navbar navbar-default"},[e("a",{staticClass:"float-left navbar-brand",attrs:{href:"/index.php/cn/home/index"}}),t._v(" "),e("div",{staticClass:"funcall"},[e("ul",{staticClass:"float-left nav-fnc"},[e("li",[e("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("index.btn2")))])]),t._v(" "),e("li",[e("router-link",{attrs:{to:"config"}},[t._v(t._s(t.$t("index.btn3")))])],1),t._v(" "),e("li",[e("a",{attrs:{href:"/index.php/cn/home/index"}},[t._v(t._s(t.$t("index.btn4")))])])]),t._v(" "),e("ul",{staticClass:"float-right nav-token"},[t.isLogin?e("li",{staticClass:"login"},[e("span",[e("a",{attrs:{href:"/index.php/cn/home/index/login"}},[t._v(t._s(t.$t("index.btn6")))])])]):t._e(),t._v(" "),t.isLogin?e("li",{staticClass:"register"},[e("span",[e("a",{attrs:{href:"/index.php/cn/home/index/register"}},[t._v(t._s(t.$t("index.btn5")))])])]):e("li",{staticClass:"backup"},[e("span",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeLogin}},[t._v(t._s(t.$t("index.btn7")))])])]),t._v(" "),e("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.changeLanguage}},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.language)+"\n\t\t\t\t\t\t\t\t"),e("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.lang,function(n){return e("DropdownItem",{attrs:{name:n.type,types:n.type}},[t._v(t._s(n.title))])}),1)],1)],1)])])]),t._v(" "),e("Content",[e("router-view")],1),t._v(" "),e("Footer",[e("footer",[e("div",{staticClass:"footer-logo"}),t._v(" "),e("div",{staticClass:"footer-board"},[e("div",{staticClass:"float-left"},[e("p",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("index.msg1"))),e("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("index.msg1_1"))),e("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("index.msg1_2"))),e("br"),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("index.msg1_3"))),e("br")]),t._v(" "),e("p",[t._v(t._s(t.$t("index.msg2")))])]),t._v(" "),e("ul",{staticClass:"float-right"},[e("li",[t._v("152 BEACH ROAD")]),t._v(" "),e("li",[t._v("#14-02 GATEWAY EASY")]),t._v(" "),e("li",[t._v("SINGAPORE(189721)")]),t._v(" "),e("li",[t._v("support@LittleBeeX.com")]),t._v(" "),e("li",[t._v("+65 86870888")])])])])])],1)],1)},staticRenderFns:[]};var r=e("C7Lr")(a,o,!1,function(t){e("qTjB"),e("jFUP")},"data-v-8c03d22e",null);n.default=r.exports},jFUP:function(t,n){},qTjB:function(t,n){}});
//# sourceMappingURL=8.923237b165950b8cb404.js.map