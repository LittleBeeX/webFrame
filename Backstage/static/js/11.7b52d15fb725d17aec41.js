webpackJsonp([11],{FoKo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),a=n.n(s),o=n("9rMa"),i=n("FdiW"),r=n("6iV/"),d=n.n(r),c={data:function(){return{balanceOf:0,approveGetVal:0,approveSetVal:0,orderNum:0}},computed:a()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{goPay:function(){var t=this,e=this,n=""+this.orderNum+String(Math.pow(10,18)).split("").slice(1).join("");this.$store.state.tokenInstance().methods.transferFrom(this.Address,"0x79793BE2287e05490058acb17513B2BfAcdfe070",n).send({from:this.Address}).on("transactionHash",function(t){e.$Spin.show()}).then(function(e){t.$Spin.hide();var n={address:t.Address,only:t.$route.query.only,jiaoyi_address:e.transactionHash};t.$axios({method:"post",url:"/index.php/cn/home/node_su/order",data:d.a.stringify(n)}).then(function(e){t.$Notice.warning({title:"操作成功！等待人员审核"})})})},goApprove:function(){var t=this,e=this;0==this.approveSetVal||(this.approveSetVal,String(Math.pow(10,18)).split("").slice(1).join(""));this.$store.state.tokenInstance().methods.mint(i.d,"2000000000000000000000").send({from:this.Address}).on("transactionHash",function(t,n){e.$Spin.show()}).then(function(e){t.$Notice.warning({title:"授权成功！"}),t.$Spin.hide(),t.approveGetVal=t.approveSetVal})},allowance:function(){var t=this;this.$store.state.tokenInstance().methods.allowance(this.Address,i.d).call({from:this.Address}).then(function(e){t.approveGetVal=e/Math.pow(10,18)})},balanceof:function(){var t=this;this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({from:this.Address}).then(function(e){t.balanceOf=e/Math.pow(10,18)})},getOrderNum:function(){var t=this,e={address:this.Address,only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/order",data:d.a.stringify(e)}).then(function(e){0==e.data.state?t.orderNum=e.data.info.money:(t.$Notice.warning({title:"无当前组织信息！"}),t.$router.push({path:"/"}))})}},mounted:function(){this.allowance(),this.balanceof(),this.getOrderNum()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-board"},[n("div",{staticClass:"approve"},[n("div",{staticClass:"content-describe"},[t._v("\n\t\t\t您需要授权一定量的LT用于支付"),n("br"),t._v("\n\t\t\t如果剩余额度小于支付额度，将支付失败"),n("br"),t._v("\n\t\t\t剩余Token额度："+t._s(t.balanceOf)+" LT"),n("br"),t._v("\n\t\t\t剩余授权额度："+t._s(t.approveGetVal)+" LT"),n("br"),t._v("\n\t\t\t设置授权额度："),n("Input",{staticStyle:{width:"150px"},attrs:{size:"large"},model:{value:t.approveSetVal,callback:function(e){t.approveSetVal=e},expression:"approveSetVal"}})],1),t._v(" "),n("div",{staticClass:"btn-con"},[n("Button",{attrs:{type:"primary",size:"large"},on:{click:t.goApprove}},[t._v("授权")])],1)]),t._v(" "),n("div",{staticClass:"payment"},[n("div",{staticClass:"content-describe"},[t._v("\n\t\t\t您的自治组织准备好了！"),n("br"),t._v("\n\t\t\t现在需要您支付"+t._s(t.orderNum)+"LT，"),n("br"),t._v("我们将审核您已提交的信息，审核通过后，"),n("br"),t._v("您将在LittleBeeX上治理您的公司！\n\t\t")]),t._v(" "),n("div",{staticClass:"btn-con"},[n("Button",{attrs:{type:"primary",size:"large"},on:{click:t.goPay}},[t._v("支付LT")])],1)])])},staticRenderFns:[]};var p=n("C7Lr")(c,l,!1,function(t){n("lpKQ")},"data-v-65e4d4ad",null);e.default=p.exports},lpKQ:function(t,e){}});
//# sourceMappingURL=11.7b52d15fb725d17aec41.js.map