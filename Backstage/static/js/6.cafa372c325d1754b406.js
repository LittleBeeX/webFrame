webpackJsonp([6],{Mtnv:function(t,n){},WBkb:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("6iV/"),i=a.n(e),s={data:function(){return{companyName:"",loading:!1,isClick:!1}},methods:{openOrganization:function(){var t=this,n={only:this.companyName,address:this.$store.state.web3.coinbase};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:i.a.stringify(n)}).then(function(n){t.$router.push({path:"UserIdent",query:{only:t.companyName}})})},createOrganization:function(){this.$router.push({path:"UserIdent"})}},watch:{companyName:function(){this.isClick=""!=this.companyName}}},o={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"inner"},[a("h2",[t._v("欢迎来到LittleBeeX")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"config-item"},[a("label",[t._v("创建一个新组织，并开始KYC组织认证")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.createOrganization}},[t._v("开始创建")])],1),t._v(" "),a("div",{staticClass:"config-item"},[a("label",[t._v("打开现有组织")]),t._v(" "),a("p",[a("Input",{attrs:{size:"large",maxlength:20,type:"text"},model:{value:t.companyName,callback:function(n){t.companyName=n},expression:"companyName"}})],1),t._v(" "),a("Button",{attrs:{type:"primary",disabled:!t.isClick,loading:t.loading},on:{click:t.openOrganization}},[t._v("打开组织")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"node"},[this._v("\n\t\t\t当前节点：以太坊测试网(Ropsten)\n\t\t\t"),n("span",{staticClass:"hint"},[this._v("需解锁Metamask钱包，并选择所需的服务器节点")])])}]};var c=a("C7Lr")(s,o,!1,function(t){a("Mtnv")},"data-v-260698ba",null);n.default=c.exports}});
//# sourceMappingURL=6.cafa372c325d1754b406.js.map