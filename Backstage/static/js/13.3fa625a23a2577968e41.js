webpackJsonp([13],{bpWW:function(t,e){},vtkP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),s=a.n(n),i=a("6iV/"),r=a.n(i),o=a("9rMa"),l=a("3Yup"),p={data:function(){return{thisPlan:"1",loading:!0,isAddDrawer:!1,approveDetail:{name:"",planName:"",getToken:"",getPay:"",getAllPay:"",getDate:"",index:0},planTabList:{rows:[{title:"到期日",key:"overDate",align:"center"},{title:"执行周期",key:"cycle",align:"center"},{title:"数量",key:"num",align:"center"},{title:"TOKEN市价(USD)",key:"getNum",align:"center"},{title:"TOKEN执行价格(USD)",key:"endNum",align:"center"},{title:"状态",key:"types",slot:"types",align:"center"}],cols:[]}}},computed:s()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{myPlanList:function(){this.$router.push({path:"myPlan",query:{only:this.$route.query.only}})},refreshPlanList:function(){var t=this,e={only:this.$route.query.only,address:this.Address,excitation:this.$route.query.planId};this.$axios({method:"post",url:"/index.php/cn/home//node_se/plan",data:r.a.stringify(e)}).then(function(e){if(0==e.data.state){var a=e.data.info;if(t.planList=[],a.length>0){for(var n=[],s=0;s<a.length;s++){var i=0==s?"首个期权执行日":a[s].cycle+"执行日";n.push({id:a[s].id,cycle:t.returnTypeDate(i),num:a[s].token_number,getNum:a[s].current_money,endNum:a[s].exercise_money,overDate:l.a.timestampToTime(a[s].expire_time),type:a[s].state,types:t.returnType(a[s].state)})}t.planTabList.cols=n}}})},showDrawer:function(t,e){this.isAddDrawer=!0,this.approveDetail.getToken=t.num,this.approveDetail.getPay=t.endNum,this.approveDetail.getAllPay=t.num*t.endNum,this.approveDetail.getDate=t.getDate,this.approveDetail.index=e},approvePlan:function(t){var e=this,a={only:this.$route.query.only,address:this.Address,plan:this.planTabList.cols[t].id};this.$axios({method:"post",url:"/index.php/cn/home/node_su/user_plan",data:r.a.stringify(a)}).then(function(t){0==t.data.state&&e.$Notice.success({title:"操作成功！"}),e.isAddDrawer=!1})},goPlanList:function(){var t=this;this.disabled=!1;var e={only:this.$route.query.only,address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_se/option_user",data:r.a.stringify(e)}).then(function(e){if(0==e.data.state)for(var a=e.data.info,n=e.data.chaininfo,s=0;s<a.length;s++)a[s].id==t.$route.query.planId&&(t.approveDetail.name=n.surname+n.name,t.approveDetail.planName=a[s].name)})},returnType:function(t){switch(t){case"0":t="等待";break;case"1":t="可执行";break;case"2":t="成功";break;case"3":t="失败"}return t},returnTypeDate:function(t){switch(t){case"1":t="月";break;case"2":t="季";break;case"3":t="半年";break;case"4":t="年"}return t}},created:function(){this.$emit("menuActiveName","14-3"),this.$emit("menuOpenNames","14"),this.loading=!1,this.refreshPlanList(),this.goPlanList()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Breadcrumb",{staticClass:"bread"},[a("div",{staticClass:"title"},[t._v("我的期权奖励")]),t._v(" "),a("Button",{attrs:{type:"primary",size:"large",icon:"md-barcode"},on:{click:t.myPlanList}},[t._v("返回")])],1),t._v(" "),a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",{staticClass:"capTable",attrs:{bordered:!1}},[a("p",{staticClass:"tipMessage",attrs:{slot:"title"},slot:"title"},[t._v("期权奖励列表")]),t._v(" "),a("div",{staticClass:"tabBoard"},[a("Table",{attrs:{loading:t.loading,height:"700",border:!0,stripe:!0,columns:t.planTabList.rows,data:t.planTabList.cols},scopedSlots:t._u([{key:"types",fn:function(e){var n=e.row,s=e.index;return[1==n.type?a("Button",{staticClass:"tabBtn",attrs:{type:"primary",size:"small"},on:{click:function(e){t.showDrawer(n,s)}}},[t._v("签名")]):a("span",[t._v(t._s(n.types))])]}}])})],1)])],1)],1)],1),t._v(" "),a("Drawer",{staticClass:"newVoteBoard",attrs:{title:"执行通知",width:"400",closable:!1},model:{value:t.isAddDrawer,callback:function(e){t.isAddDrawer=e},expression:"isAddDrawer"}},[a("div",[a("h3",[t._v("期权执行通知")]),t._v(" "),a("h4",[t._v("LittlebeeX Pte. Ltd ")]),t._v(" "),a("p",[t._v("\n\t\t\t\t1.根据贵方于"+t._s(t.approveDetail.getDate)+"授予的授权书，本人在此对在LittlebeeX有限公司的股本中按照"+t._s(t.approveDetail.getPay)+"美元的执行价格，认购"+t._s(t.approveDetail.getToken)+" 个公司股权Token，总计"+t._s(t.approveDetail.getAllPay)+"美元。\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t2.我希望通过电汇的方式支付1美元的执行价价，并向公司提供电汇的确认\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t3.本人谨此声明，本人为本人认购上述普通股，而非以他人名义认购。\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t4.本人承认本人将继续遵守《"+t._s(t.approveDetail.planName)+"》及《股东协议》中有关该期权的规定。\n\t\t\t")]),t._v(" "),a("p",[t._v("名字: "),a("b",[t._v(t._s(t.approveDetail.name))])]),t._v(" "),a("div",{staticClass:"btn"},[a("Button",{attrs:{type:"success",long:""},on:{click:function(e){t.approvePlan(t.approveDetail.index)}}},[t._v(t._s(t.$t("homeVote.btn5")))])],1)])])],1)},staticRenderFns:[]};var d=a("C7Lr")(p,c,!1,function(t){a("bpWW"),a("ysyI")},"data-v-160afc4c",null);e.default=d.exports},ysyI:function(t,e){}});
//# sourceMappingURL=13.3fa625a23a2577968e41.js.map