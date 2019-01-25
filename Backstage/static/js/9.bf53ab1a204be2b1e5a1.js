webpackJsonp([9],{A2lp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),n=a.n(s),i=a("6iV/"),l=a.n(i),o=a("9rMa"),r=a("3Yup"),p={data:function(){return{helpBox:!1,isAddDrawer:!1,loading:!1,planDetail:{name:"【期权激励计划名称】",date:"【创建时间】",token:"【激励计划总Token数】",tokens:"【占比】",firstT:"【首次授权量】",dateType:"【时间类型】",size:"【周期数】",sysbol:"【TOKEN符号】"},approveDetail:{name:"【姓名】",planName:"【期权激励计划名称】",getToken:"【期权授予量】",getTokenS:"【授予占比】",getPay:"【期权行使价格】",getDate:"【期权行使价格】",index:0},planTabList:{rows:[{title:"机制名称",key:"name",slot:"name",align:"center"},{title:"期权授予量",key:"allNum",align:"center"},{title:"授予占比",key:"proportion",align:"center"},{title:"期权行使价格",key:"getPay",align:"center"},{title:"授权日期",key:"getDate",align:"center"},{title:"状态",key:"types",slot:"types",align:"center"}],cols:[]}}},computed:n()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{timeList:function(t){this.$router.push({path:"timePage",query:{only:this.$route.query.only,planId:t}})},showHelp:function(t){this.helpBox=!0,this.planDetail.name=t.name,this.planDetail.date=t.getDate,this.planDetail.token=t.token,this.planDetail.tokens=t.proportion,this.planDetail.firstT=t.firstT,this.planDetail.dateType=t.dateType,this.planDetail.size=t.size,this.planDetail.sysbol=t.sysbol},showDrawer:function(t,e){this.isAddDrawer=!0,this.approveDetail.name="爱丽丝",this.approveDetail.planName=t.name,this.approveDetail.getToken=t.allNum,this.approveDetail.getTokenS=t.proportion,this.approveDetail.getPay=t.getPay,this.approveDetail.getDate=t.getDate,this.approveDetail.index=e},agreePlan:function(t){var e=this.planTabList.cols[t].id;this.userChange(e,1)},cancelPlan:function(t){var e=this.planTabList.cols[t].id;this.userChange(e,2)},userChange:function(t,e){var a=this;console.log(t,e);var s={only:this.$route.query.only,address:this.Address,excitation:t,type:e};this.$axios({method:"post",url:"/index.php/cn/home/node_su/excitation_if",data:l.a.stringify(s)}).then(function(t){0==t.data.state&&a.$Notice.success({title:"操作成功！"}),a.isAddDrawer=!1})},goPlanList:function(){var t=this;this.disabled=!1;var e={only:this.$route.query.only,address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_se/option_user",data:l.a.stringify(e)}).then(function(e){if(0==e.data.state){for(var a=e.data.info,s=e.data.companyinfo,n=[],i=0;i<a.length;i++)console.log(a[i].type),n.push({id:a[i].id,name:a[i].name,allNum:a[i].token_number,token:a[i].token,proportion:parseInt(a[i].token_number)/parseInt(s.token_number)*100+"%",getPay:a[i].exercise_money,getDate:r.a.timestampToTime(a[i].option_time),types:a[i].type,dateType:t.returnTypeDate(a[i].grant_type),size:a[i].total_month,firstT:a[i].grant_shares+"%",sysbol:s.token_symbol});t.planTabList.cols=n}})},returnTypeDate:function(t){switch(t){case"1":t="月";break;case"2":t="季";break;case"3":t="半年";break;case"4":t="年"}return t}},created:function(){this.$emit("menuActiveName","14-3"),this.$emit("menuOpenNames","14"),this.goPlanList(),this.loading=!1}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Breadcrumb",{staticClass:"bread"},[a("div",{staticClass:"title"},[t._v("我的期权奖励")])]),t._v(" "),a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",{staticClass:"capTable",attrs:{bordered:!1}},[a("p",{staticClass:"tipMessage",attrs:{slot:"title"},slot:"title"},[t._v("期权奖励列表")]),t._v(" "),a("div",{staticClass:"tabBoard"},[a("Table",{attrs:{height:"700",loading:t.loading,border:!0,stripe:!0,columns:t.planTabList.rows,data:t.planTabList.cols},scopedSlots:t._u([{key:"name",fn:function(e){var s=e.row;return e.index,[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t"),a("Icon",{staticClass:"help",attrs:{type:"ios-help-circle-outline",size:"22"},on:{click:function(e){t.showHelp(s)}}})]}},{key:"types",fn:function(e){var s=e.row,n=e.index;return[0==s.types?a("Button",{staticClass:"tabBtn",staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.showDrawer(s,n)}}},[t._v("同意")]):t._e(),t._v(" "),0==s.types?a("Button",{staticClass:"tabBtn",attrs:{type:"error",size:"small"},on:{click:function(e){t.cancelPlan(n)}}},[t._v("取消")]):t._e(),t._v(" "),1==s.types?a("Button",{staticClass:"tabBtn",attrs:{type:"primary",size:"small"},on:{click:function(e){t.timeList(s.id)}}},[t._v("时间表")]):t._e(),t._v(" "),2==s.types?a("span",[t._v("已取消")]):t._e()]}}])})],1)])],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"期权机制描述","class-name":"vertical-center-modal"},model:{value:t.helpBox,callback:function(e){t.helpBox=e},expression:"helpBox"}},[a("p",[t._v("本公司计划于"),a("b",[t._v(t._s(t.planDetail.date))]),t._v("创建名为"),a("b",[t._v(t._s(t.planDetail.name))]),t._v("的期权激励计划（ESOP），该ESOP将预留共计"),a("b",[t._v(t._s(t.planDetail.token))]),t._v(" "+t._s(t.planDetail.sysbol)+"，约占公司股权的"+t._s(t.planDetail.tokens)+"作为期权池。")]),t._v(" "),a("p",[t._v("该期权激励机制下，员工将会在第一个到期日被授予"),a("b",[t._v(t._s(t.planDetail.firstT))]),t._v("的股份，其余的股份须于首个到期日期起按"),a("b",[t._v(t._s(t.planDetail.date))]),t._v(" 授予，总计"),a("b",[t._v(t._s(t.planDetail.size))]),t._v(" 个"),a("b",[t._v(t._s(t.planDetail.dateType))]),t._v("。")]),t._v(" "),a("div",{staticClass:"tipMsg",attrs:{slot:"footer"},slot:"footer"},[a("p",[t._v("期权发行条款:")]),t._v(" "),a("p",[t._v("期权严格按照既定计划发放。")]),t._v(" "),a("p",[t._v("如果员工不再受雇于公司,任何未成熟期权将自动失效，并放回公司期权池。")])])]),t._v(" "),a("Drawer",{staticClass:"newVoteBoard",attrs:{title:"授权",width:"400",closable:!1},model:{value:t.isAddDrawer,callback:function(e){t.isAddDrawer=e},expression:"isAddDrawer"}},[a("div",[a("h3",[t._v("员工期权计划授权书")]),t._v(" "),a("p",[t._v("\n\t\t\t\t亲爱的"+t._s(t.approveDetail.name)+",\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t感谢您成为LittleBee Pte Ltd的员工。在本公司董事会的指示下，本公司已根据名为“"+t._s(t.approveDetail.planName)+"”的公司期权计划向您授予"+t._s(t.approveDetail.getToken)+"个公司股权代币，约为"+t._s(t.approveDetail.getTokens)+"总股权。该期权的行使价格为"+t._s(t.approveDetail.getPay)+"美元。不论公司未来的股份价值如何，期权行使价格应保持不变。\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t你明白计划规则内所述的条款及条件规管该等股票期权，不论该等股票期权在本授权书日期前是否已获批。本规则将取代您与本公司之间关于期权的任何事先的理解或协议，无论是书面的还是其他形式的。\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t期权行使后可转换为公司的可赎回股份。请注意，授予的选择权不是雇佣合同的一部分。如果您同意本公司按照本函所列条款及名为“"+t._s(t.approveDetail.planName)+"”的期权方案，请用你的私钥签名，以表示您已接受本期权激励计划。\n\t\t\t")]),t._v(" "),a("p",[t._v(t._s(t.approveDetail.getDate))]),t._v(" "),a("div",{staticClass:"btn"},[a("Button",{attrs:{type:"success",long:""},on:{click:function(e){t.agreePlan(t.approveDetail.index)}}},[t._v("签名")])],1)])])],1)},staticRenderFns:[]};var d=a("C7Lr")(p,c,!1,function(t){a("sXQF"),a("d6lT")},"data-v-60f2ded8",null);e.default=d.exports},d6lT:function(t,e){},sXQF:function(t,e){}});
//# sourceMappingURL=9.bf53ab1a204be2b1e5a1.js.map