webpackJsonp([9],{RqxP:function(t,e){},Vjjf:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("4YfN"),n=s.n(r),a=s("9rMa"),i=s("6iV/"),o=s.n(i),d={data:function(){return{mintAddress:"",mintNumber:0,transferAddress:"",transferNumber:0,allTokenNum:0,addressList:[],mappingMsg:[]}},computed:n()({},Object(a.b)({Address:function(t){return t.web3.coinbase}}),{mintCode:function(){return 0==this.mintNumber||NaN==this.mintNumber?this.$t("homeTransfer.msg3")+"0%":this.$t("homeTransfer.msg3")+(100*this.mintNumber/Number(this.allTokenNum+this.mintNumber)).toFixed(2)+"%"},transferCode:function(){return 0==this.transferNumber||NaN==this.transferNumber?this.$t("homeTransfer.msg3")+"0%":this.$t("homeTransfer.msg3")+(100*this.transferNumber/Number(this.allTokenNum)).toFixed(2)+"%"}}),methods:{balanceof:function(){this.$store.state.userInstance().methods.totalSupply().call({from:this.Address}).then(function(t){console.log(t)})},mint:function(t,e){var s=this;if(!/(^[1-9]\d*$)/.test(e))return this.$Notice.warning({title:this.$t("homeTransfer.errorMsg1")}),!1;var r=this;this.$store.state.userInstance().methods.getPosition(t).call().then(function(n){0!=n?s.$store.state.userInstance().methods.addVoteList(1,s.Address,t,e,"给"+t+"增发"+e+"枚Token").send({from:s.Address,gasPrice:"40000000000"}).on("transactionHash",function(t){r.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:32}}),t("div",r.$t("tipMsg1"))])}})}).then(function(r){var n=r.events.createVote.returnValues.codes;s.$Spin.hide();var a=s.mappingMsg[s.Address]+s.$t("homeTransfer.msg4_1")+e+"TOKEN"+s.$t("homeTransfer.msg5")+s.mappingMsg[t]+s.$t("homeTransfer.msg6")+s.mintCode+s.$t("homeTransfer.msg7");console.log(a),s.takeVote(t,1,e,a,n)}):s.$Notice.warning({title:s.$t("homeTransfer.errorMsg2")})})},transfer:function(t,e){var s=this;if(!/(^[1-9]\d*$)/.test(e))return this.$Notice.warning({title:this.$t("homeTransfer.errorMsg1")}),!1;var r=this;this.$store.state.userInstance().methods.getPosition(t).call().then(function(n){0!=n?s.$store.state.userInstance().methods.addVoteList(2,s.Address,t,e,"给"+t+"转让"+e+"枚Token").send({from:s.Address,gasPrice:"40000000000"}).on("transactionHash",function(t){r.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:32}}),t("div",r.$t("tipMsg1"))])}})}).then(function(r){var n=r.events.createVote.returnValues.codes;s.$Spin.hide();var a=s.mappingMsg[s.Address]+s.$t("homeTransfer.msg4_1")+e+"TOKEN"+s.$t("homeTransfer.msg5")+s.mappingMsg[t]+s.$t("homeTransfer.msg6")+s.transferCode+s.$t("homeTransfer.msg7");s.takeVote(t,2,e,a,n)}):s.$Notice.warning({title:s.$t("homeTransfer.errorMsg2")})})},takeVote:function(t,e,s,r,n){var a=this,i={only:this.$route.query.only,type:e,content:r,address:this.Address,target:t,number:s,keyname:n};this.$axios({method:"post",url:"/index.php/cn/home/node_su/meeting",data:o.a.stringify(i)}).then(function(t){return 0==t.data.state?(a.$Notice.success({title:a.$t("homeTransfer.tipMsg1")}),a.$router.push({path:"VirtualBoardroom",query:{only:a.$route.query.only}}),a.$emit("menuActiveName",13),!0):(a.$Notice.warning({title:a.$t("errorMsg8")}),a.$router.push({path:"/"}),!1)})}},created:function(){var t=this,e={only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/chain_list",data:o.a.stringify(e)}).then(function(e){if(0==e.data.state){for(var s=e.data.info,r=[],n=0;n<s.length;n++)s[n].address!=t.Address&&r.push({address:s[n].address,name:s[n].surname+s[n].name}),t.mappingMsg[s[n].address]=s[n].surname+s[n].name;return t.addressList=r,!0}return t.$Notice.warning({title:t.$t("errorMsg8")}),t.$router.push({path:"/"}),!1}),this.$store.state.userInstance().methods.totalSupply().call().then(function(e){t.allTokenNum=e/Math.pow(10,18)})}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Breadcrumb",{staticClass:"bread"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("homeTransfer.msg0")))])]),t._v(" "),s("Row",[s("Col",{attrs:{span:"24"}},[s("Card",{staticClass:"transfer",attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("homeTransfer.msg1")))]),t._v(" "),s("div",{staticClass:"msgBoard"},[s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg1_1")))]),t._v("\n\t\t\t\t\t\t "+t._s(t.Address)+"\n\t\t\t\t\t")]),t._v(" "),s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg1_2")))]),t._v(" "),s("Select",{staticStyle:{width:"500px"},attrs:{size:"large",placeholder:t.$t("homeTransfer.msg1_3")},model:{value:t.transferAddress,callback:function(e){t.transferAddress=e},expression:"transferAddress"}},t._l(t.addressList,function(e,r){return s("Option",{key:r,attrs:{value:e.address,label:e.address}},[s("span",[t._v(t._s(e.address))]),t._v(" "),s("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(t._s(e.name))])])}),1)],1),t._v(" "),s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg1_4")))]),t._v(" "),s("InputNumber",{staticStyle:{width:"500px"},attrs:{placeholder:t.$t("homeTransfer.msg1_5")},model:{value:t.transferNumber,callback:function(e){t.transferNumber=e},expression:"transferNumber"}}),t._v(" "),s("span",{staticClass:"nums"},[t._v(t._s(t.transferCode))])],1),t._v(" "),s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"primary",size:"large",icon:"md-git-compare"},on:{click:function(e){t.transfer(t.transferAddress,t.transferNumber)}}},[t._v(t._s(t.$t("homeTransfer.btn1")))])],1)])])],1),t._v(" "),s("Col",{attrs:{span:"24"}},[s("Card",{staticClass:"mint",attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("homeTransfer.msg2")))]),t._v(" "),s("div",{staticClass:"msgBoard"},[s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg2_1")))]),t._v("\n\t\t\t\t\t\t "+t._s(t.Address)+"\n\t\t\t\t\t")]),t._v(" "),s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg2_2")))]),t._v(" "),s("Select",{staticStyle:{width:"500px",height:"34px"},attrs:{size:"large",placeholder:t.$t("homeTransfer.msg2_3")},model:{value:t.mintAddress,callback:function(e){t.mintAddress=e},expression:"mintAddress"}},t._l(t.addressList,function(e,r){return s("Option",{key:r,attrs:{value:e.address,label:e.address}},[s("span",[t._v(t._s(e.address))]),t._v(" "),s("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(t._s(e.name))])])}),1)],1),t._v(" "),s("p",[s("b",[t._v(t._s(t.$t("homeTransfer.msg2_4")))]),t._v(" "),s("InputNumber",{staticStyle:{width:"500px",height:"34px"},attrs:{placeholder:t.$t("homeTransfer.msg2_5")},model:{value:t.mintNumber,callback:function(e){t.mintNumber=e},expression:"mintNumber"}}),t._v(" "),s("span",{staticClass:"nums"},[t._v(t._s(t.mintCode))])],1),t._v(" "),s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"primary",size:"large",icon:"md-git-compare"},on:{click:function(e){t.mint(t.mintAddress,t.mintNumber)}}},[t._v(t._s(t.$t("homeTransfer.btn1")))])],1)])])],1)],1)],1)},staticRenderFns:[]};var c=s("C7Lr")(d,m,!1,function(t){s("RqxP")},"data-v-a0157a58",null);e.default=c.exports}});
//# sourceMappingURL=9.ed05b0f2f6d82bb11daa.js.map