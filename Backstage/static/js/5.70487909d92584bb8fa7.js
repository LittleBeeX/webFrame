webpackJsonp([5],{"/s+X":function(t,e){},fZg2:function(t,e){},yK50:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4YfN"),r=s.n(a),n=s("6iV/"),i=s.n(n),o=s("9rMa"),c=s("3Yup"),d={data:function(){return{searchInput:"",searchType:"表决中",addVoteInput:"",isShowDrawer:!1,isAddDrawer:!1,typeList:[{title:"表决中",vals:0},{title:"已通过",vals:1},{title:"未通过",vals:2}],pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},voteList:[]}},computed:r()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{addVote:function(){console.log("添加一个"),this.isAddDrawer=!this.isAddDrawer},detailDrawer:function(){this.isShowDrawer=!this.isShowDrawer},takeVote:function(){var t=this,e={only:this.$route.query.only,state:0,content:this.addVoteInput,address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_su/meeting",data:i.a.stringify(e)}).then(function(e){return 0==e.data.state?(t.$Notice.info({title:"会议提交成功！"}),!0):(t.$Notice.warning({title:"无该成员信息！"}),t.$router.push({path:"/"}),!1)})},searchVote:function(){var t={only:this.$route.query.only,address:this.Address,search:this.searchInput,state:l(this.searchType)};this.searchList(t)},changeSearchType:function(t){var e={only:this.$route.query.only,address:this.Address,state:l(t)};this.searchList(e)},searchList:function(t){var e=this,s=t;this.$axios({method:"post",url:"/index.php/cn/home/node_se/meeting_list",data:i.a.stringify(s)}).then(function(t){if(0==t.data.state){for(var s=t.data.info,a=0;a<s.length;a++)s[a].start_time=c.a.timestampToTime(s[a].start_time),s[a].name=s[a].surname+s[a].name,s[a].no_proportion=Number(s[a].no_proportion),s[a].yes_proportion=Number(s[a].yes_proportion),s[a].btn_show=!1,0==s[a].state&&0==s[a].throw&&(s[a].btn_show=!0),s[a].state=l(s[a].state);return e.voteList=s,!0}return e.$Notice.warning({title:"无该成员信息！"}),e.$router.push({path:"/"}),!1})},mountedRefreshList:function(){var t={only:this.$route.query.only,address:this.Address,state:0};this.searchList(t)}},created:function(){this.mountedRefreshList()}};function l(t){switch(t){case"表决中":t=0;break;case"已通过":t=1;break;case"未通过":t=2;break;case"0":t="表决中";break;case"1":t="已通过";break;case"2":t="未通过"}return t}var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Breadcrumb",{staticClass:"bread"},[s("div",{staticClass:"title"},[t._v("虚拟会议室")]),t._v(" "),s("div",{staticClass:"b_func"},[s("div",{staticClass:"searchForm"},[s("RadioGroup",{staticClass:"radio",on:{"on-change":function(e){t.changeSearchType(t.searchType)}},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},t._l(t.typeList,function(t){return s("Radio",{attrs:{label:t.title,value:t.vals}})})),t._v(" "),s("div",[s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"会议查询"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}},[s("Button",{attrs:{slot:"append"},on:{click:function(e){t.searchVote(t.searchInput)}},slot:"append"},[s("Icon",{attrs:{type:"ios-search",size:"16"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"addVote"},[s("Button",{attrs:{type:"primary",size:"large",icon:"md-barcode"},on:{click:function(e){t.addVote()}}},[t._v("发起决议")])],1)])]),t._v(" "),this.voteList.length>0?s("Row",t._l(t.voteList,function(e){return s("Col",{attrs:{xs:24,sm:12,lg:8}},[s("Card",{staticClass:"voteItem",attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Tooltip",{attrs:{content:e.content,placement:"top-start"}},[t._v("\n\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t")])],1),t._v(" "),s("div",{staticClass:"msgBoard"},[s("p",[s("b",[t._v("时间")]),t._v(t._s(e.start_time))]),t._v(" "),s("p",[s("b",[t._v("状态")]),t._v(t._s(e.state))]),t._v(" "),s("p",[s("b",[t._v("发起人")]),t._v(t._s(e.name))]),t._v(" "),s("p",[s("b",[t._v("同意"),s("span",[t._v("(50%可通过审核)")])]),t._v(" "),s("Progress",{attrs:{percent:e.yes_proportion,status:"active"}})],1),t._v(" "),s("p",[s("b",[t._v("否决")]),t._v(" "),s("Progress",{staticClass:"warningProgress",attrs:{percent:e.no_proportion}})],1),t._v(" "),e.btn_show?s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"success",size:"large",icon:"md-albums"}},[t._v("同意")]),t._v(" "),s("Button",{attrs:{type:"info",size:"large",icon:"md-albums"}},[t._v("否决")])],1):t._e()])])],1)})):s("div",{staticClass:"mouldBoard"},[s("Card",{staticClass:"mouldItem",attrs:{bordered:!1}},[s("div",{staticClass:"msgBoard"},[s("p",[t._v("暂无表决记录，立即发起表决")]),t._v(" "),s("Button",{attrs:{type:"primary",size:"large",icon:"md-barcode"},on:{click:function(e){t.addVote()}}},[t._v("发起决议")])],1)])],1),t._v(" "),s("Drawer",{staticClass:"newVoteBoard",attrs:{title:"新的表决",width:"350",closable:!1},model:{value:t.isAddDrawer,callback:function(e){t.isAddDrawer=e},expression:"isAddDrawer"}},[s("div",[s("h4",[t._v("新的表决")]),t._v(" "),s("p",[t._v("问题")]),t._v(" "),s("Input",{attrs:{placeholder:"Enter something..."},model:{value:t.addVoteInput,callback:function(e){t.addVoteInput=e},expression:"addVoteInput"}}),t._v(" "),s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"success",long:""},on:{click:t.takeVote}},[t._v("开始投票")]),t._v(" "),s("p",{staticClass:"hint"},[t._v("发起投票的者默认选择同意")])],1)],1)])],1)},staticRenderFns:[]};var p=s("C7Lr")(d,u,!1,function(t){s("/s+X"),s("fZg2")},"data-v-72e51c60",null);e.default=p.exports}});
//# sourceMappingURL=5.70487909d92584bb8fa7.js.map