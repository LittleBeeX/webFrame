webpackJsonp([4],{WBkb:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("6iV/"),i=e.n(n),s={data:function(){return{companyName:"",loading:!1,isClick:!1}},methods:{openOrganization:function(){var t=this,a={only:this.companyName,address:this.$store.state.web3.coinbase};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:i.a.stringify(a)}).then(function(a){0==a.data.state?2==a.data.info.company.state?t.$router.push({path:"../home/Overview"}):2==a.data.info.chain.state?t.$router.push({path:"companyIdent",query:{only:t.companyName}}):t.$router.push({path:"UserIdent",query:{only:t.companyName}}):2==a.data.state&&t.$Notice.warning({title:"暂无当前组织！"})})},createOrganization:function(){this.$router.push({path:"UserIdent"})}},watch:{companyName:function(){this.isClick=""!=this.companyName}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"index-board"},[e("div",{staticClass:"inner"},[e("h2",[t._v("欢迎来到LittleBeeX")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"config-item"},[e("label",[t._v("创建一个新组织，并开始KYC组织认证")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:t.createOrganization}},[t._v("开始创建")])],1),t._v(" "),e("div",{staticClass:"config-item"},[e("label",[t._v("打开现有组织")]),t._v(" "),e("p",[e("Input",{attrs:{size:"large",maxlength:20,type:"text"},model:{value:t.companyName,callback:function(a){t.companyName=a},expression:"companyName"}})],1),t._v(" "),e("Button",{attrs:{type:"primary",disabled:!t.isClick,loading:t.loading},on:{click:t.openOrganization}},[t._v("打开组织")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"node"},[this._v("\n\t\t\t当前节点：以太坊测试网(Ropsten)\n\t\t\t"),a("span",{staticClass:"hint"},[this._v("需解锁Metamask钱包，并选择所需的服务器节点")])])}]};var r=e("C7Lr")(s,o,!1,function(t){e("Y3vl")},"data-v-f9dd688a",null);a.default=r.exports},Y3vl:function(t,a){}});
//# sourceMappingURL=4.a839054255720d42713c.js.map