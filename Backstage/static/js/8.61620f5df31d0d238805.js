webpackJsonp([8],{"WUU/":function(t,s){},fM9J:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("4YfN"),n=e.n(i),r=e("6iV/"),a=e.n(r),o=e("9rMa"),l=e("FdiW"),d={props:["BreadTitle"],data:function(){return{bSearch:"",userAddress:"",businessList:{rows:[{title:"钱包地址",key:"address",tooltip:!0},{title:"姓名",key:"name",tooltip:!0},{title:"持有Token数",key:"tokenNum",tooltip:!0},{title:"持有比例",key:"ratio",tooltip:!0}],cols:[]},tokenList:[{title:"名称",vals:""},{title:"符号",vals:""},{title:"总量",vals:""},{title:"支持占比",vals:""},{title:"法定人数",vals:""},{title:"投票时间",vals:""}],userMsgList:[{title:"持有Token数量",vals:""},{title:"持有Token比例",vals:""}]}},computed:n()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{mountedRefreshListMsg:function(){var t=this,s={only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/chain_list",data:a.a.stringify(s)}).then(function(s){if(0==s.data.state){for(var e=s.data.info,i=0;i<e.length;i++)t.businessList.cols.push({address:e[i].address,name:e[i].surname+e[i].name,tokenNum:e[i].token_number,ratio:e[i].token_proportion});return!0}return t.$Notice.warning({title:"无当前组织信息！"}),t.$router.push({path:"/"}),!1})},mountedRefreshTokenMsg:function(){var t=this,s={only:this.$route.query.only,address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:a.a.stringify(s)}).then(function(s){if(0==s.data.state){for(var e=s.data.info.chain,i=s.data.info.company,n=[e.token_number,e.token_proportion],r=[i.token_name,i.token_symbol,i.token_number,i.support,i.quorum,i.duration+"H"],a=0;a<t.tokenList.length;a++)t.tokenList[a].vals=4==a||3==a?r[a]+"%":r[a];for(var o=0;o<t.userMsgList.length;o++)t.userMsgList[o].vals=n[o];return t.userMsgList[1].vals=t.userMsgList[1].vals+"%",!0}return t.$Notice.warning({title:"无当前组织信息！"}),t.$router.push({path:"/"}),!1})}},mounted:function(){this.mountedRefreshListMsg(),this.mountedRefreshTokenMsg(),this.userAddress=l.f}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Breadcrumb",{staticClass:"bread"},[e("div",{staticClass:"title"},[t._v("组织结构")])]),t._v(" "),e("div",[e("Row",[e("Col",{attrs:{span:"18"}},[e("Card",{staticClass:"capTable",attrs:{bordered:!1}},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("股权信息")]),t._v(" "),e("div",{staticClass:"tabBoard"},[e("Table",{attrs:{height:"700",columns:t.businessList.rows,data:t.businessList.cols}})],1)])],1),t._v(" "),e("Col",{attrs:{span:"6"}},[e("Card",{staticClass:"tokenBoard",attrs:{bordered:!1}},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("Token信息")]),t._v(" "),e("div",{staticClass:"msgBoard"},[t._l(t.tokenList,function(s){return e("p",[e("b",[t._v(t._s(s.title))]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.vals)+"\n\t\t\t\t\t\t\t")])}),t._v(" "),e("p",[e("b",[t._v("合约地址")]),t._v(t._s(t.userAddress))])],2)]),t._v(" "),e("Card",{staticClass:"userBoard",attrs:{bordered:!1}},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("个人信息")]),t._v(" "),e("div",{staticClass:"msgBoard"},[e("p",[e("b",[t._v("钱包地址")]),t._v(t._s(t.Address))]),t._v(" "),t._l(t.userMsgList,function(s){return e("p",[e("b",[t._v(t._s(s.title))]),t._v("\n\t\t\t\t\t\t\t"+t._s(s.vals)+"\n\t\t\t\t\t\t")])})],2)])],1)],1)],1)],1)},staticRenderFns:[]};var v=e("C7Lr")(d,u,!1,function(t){e("WUU/")},"data-v-f7ce2110",null);s.default=v.exports}});
//# sourceMappingURL=8.61620f5df31d0d238805.js.map