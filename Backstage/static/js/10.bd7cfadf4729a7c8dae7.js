webpackJsonp([10],{Vjjf:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("4YfN"),n=r.n(s),a=r("9rMa"),i=r("6iV/"),o=r.n(i),d={data:function(){return{mintAddress:"",mintNumber:"",transferAddress:"",transferNumber:""}},computed:n()({},Object(a.b)({Address:function(t){return t.web3.coinbase}})),methods:{mint:function(t,e){var r=this;""!=t&&""!=e&&this.$Modal.confirm({title:"增发",content:"<p>确定给"+t+"<br/>增发"+e+"枚Token吗</p>",onOk:function(){r.takeVote(1,t,1,e,"给"+t+"增发"+e+"枚Token")}})},transfer:function(t,e){var r=this;""!=t&&""!=e&&this.$Modal.confirm({title:"转让",content:"<p>确定给"+t+"<br/>转让"+e+"枚Token吗</p>",onOk:function(){r.takeVote(2,t,2,e,"给"+t+"转让"+e+"枚Token")}})},takeVote:function(t,e,r,s,n){var a=this,i={only:this.$route.query.only,state:t,type:r,content:n,address:this.Address,target:e,number:s};this.$axios({method:"post",url:"/index.php/cn/home/node_su/meeting",data:o.a.stringify(i)}).then(function(t){return 0==t.data.state?(a.$Notice.info({title:"会议提交成功！"}),a.$router.push({path:"VirtualBoardroom",query:{only:a.$route.query.only}}),!0):7==t.data.state?(a.$Notice.warning({title:"组织内无目标成员信息！"}),!1):9==t.data.state?(a.$Notice.warning({title:"成员的Token数量不足！"}),!1):t.data.state>0&&t.data.state<5?(a.$Notice.warning({title:"无当前组织信息！"}),a.$router.push({path:"/"}),!1):(a.$Notice.warning({title:"操作失败！"}),!1)})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumb",{staticClass:"bread"},[r("div",{staticClass:"title"},[t._v("增发和转让")])]),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Card",{staticClass:"mint",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("增发")]),t._v(" "),r("div",{staticClass:"msgBoard"},[r("p",[r("b",[t._v("钱包地址")]),t._v(t._s(t.Address))]),t._v(" "),r("p",[r("b",[t._v("目标地址")]),r("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入目标地址"},model:{value:t.mintAddress,callback:function(e){t.mintAddress=e},expression:"mintAddress"}})],1),t._v(" "),r("p",[r("b",[t._v("增发数量")]),r("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入增发数量"},model:{value:t.mintNumber,callback:function(e){t.mintNumber=e},expression:"mintNumber"}})],1),t._v(" "),r("div",{staticClass:"btn"},[r("Button",{attrs:{type:"primary",size:"large",icon:"md-git-compare"},on:{click:function(e){t.mint(t.mintAddress,t.mintNumber)}}},[t._v("执行")])],1)])])],1),t._v(" "),r("Col",{attrs:{span:"24"}},[r("Card",{staticClass:"transfer",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("转让")]),t._v(" "),r("div",{staticClass:"msgBoard"},[r("p",[r("b",[t._v("钱包地址")]),t._v(t._s(t.Address))]),t._v(" "),r("p",[r("b",[t._v("目标地址")]),r("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入目标地址"},model:{value:t.transferAddress,callback:function(e){t.transferAddress=e},expression:"transferAddress"}})],1),t._v(" "),r("p",[r("b",[t._v("转让数量")]),r("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入转发数量"},model:{value:t.transferNumber,callback:function(e){t.transferNumber=e},expression:"transferNumber"}})],1),t._v(" "),r("div",{staticClass:"btn"},[r("Button",{attrs:{type:"primary",size:"large",icon:"md-git-compare"},on:{click:function(e){t.transfer(t.transferAddress,t.transferNumber)}}},[t._v("执行")])],1)])])],1)],1)],1)},staticRenderFns:[]};var c=r("C7Lr")(d,l,!1,function(t){r("tuI+")},"data-v-2e14d8b1",null);e.default=c.exports},"tuI+":function(t,e){}});
//# sourceMappingURL=10.bd7cfadf4729a7c8dae7.js.map