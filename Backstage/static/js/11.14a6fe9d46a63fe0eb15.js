webpackJsonp([11],{DapN:function(t,e){},FoKo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),s=a.n(n),o=a("9rMa"),i=a("6iV/"),r=a.n(i),d={data:function(){return{balanceOf:0,approveGetVal:0,approveSetVal:0,orderNum:0}},computed:s()({},Object(o.b)({Address:function(t){return t.web3.coinbase}})),methods:{goPay:function(){var t=this;if(this.approveGetVal>this.orderNum){var e=this,a=""+this.orderNum+String(Math.pow(10,18)).split("").slice(1).join("");this.$store.state.tokenInstance().methods.transferFrom(this.Address,"0xDBD4c2a85423124a2Da3A656A455df4D6C873979",a).send({from:this.Address}).on("transactionHash",function(t){e.$Spin.show()}).then(function(e){t.$Spin.hide(),console.log(e.transactionHash),t.$Spin.hide();var a={address:t.Address,only:t.$route.query.only,jiaoyi_address:e.transactionHash};t.$axios({method:"post",url:"/index.php/cn/home/node_su/order",data:r.a.stringify(a)}).then(function(e){t.$Notice.warning({title:"操作成功！等待人员审核"}),t.allowance(),t.balanceof()})})}else this.$Notice.warning({title:"请增加授权额度！"})},goApprove:function(){var t=this,e=this,a=0==this.approveSetVal?0:""+this.approveSetVal+String(Math.pow(10,18)).split("").slice(1).join("");this.$store.state.tokenInstance().methods.approve(this.Address,a).send({from:this.Address}).on("transactionHash",function(t,a){e.$Spin.show()}).then(function(e){t.$Notice.warning({title:"授权成功！"}),t.$Spin.hide(),t.approveGetVal=t.approveSetVal,t.approveSetVal=0})},allowance:function(){var t=this;this.$store.state.tokenInstance().methods.allowance(this.Address,this.Address).call({from:this.Address}).then(function(e){t.approveGetVal=e/Math.pow(10,18)})},balanceof:function(){var t=this;this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({from:this.Address}).then(function(e){t.balanceOf=e/Math.pow(10,18)})},getOrderNum:function(){var t=this,e={address:this.Address,only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/order",data:r.a.stringify(e)}).then(function(e){0==e.data.state?t.orderNum=e.data.info.money:(t.$Notice.warning({title:"无当前组织信息！"}),t.$router.push({path:"/"}))})}},mounted:function(){this.allowance(),this.balanceof(),this.getOrderNum()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"approve"},[a("div",{staticClass:"content-describe"},[t._v("\n\t\t\t您需要授权一定量的LT用于支付"),a("br"),t._v("\n\t\t\t如果剩余额度小于支付额度，将支付失败"),a("br"),t._v("\n\t\t\t剩余Token额度："+t._s(t.balanceOf)+" LT"),a("br"),t._v("\n\t\t\t剩余授权额度："+t._s(t.approveGetVal)+" LT"),a("br"),t._v("\n\t\t\t设置授权额度："),a("Input",{staticStyle:{width:"150px"},attrs:{size:"large"},model:{value:t.approveSetVal,callback:function(e){t.approveSetVal=e},expression:"approveSetVal"}})],1),t._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:t.goApprove}},[t._v("授权")])],1)]),t._v(" "),a("div",{staticClass:"payment"},[a("div",{staticClass:"content-describe"},[t._v("\n\t\t\t您的自治组织准备好了！"),a("br"),t._v("\n\t\t\t现在需要您支付"+t._s(t.orderNum)+"LT，"),a("br"),t._v("我们将审核您已提交的信息，审核通过后，"),a("br"),t._v("您将在LittleBeeX上治理您的公司！\n\t\t")]),t._v(" "),a("div",{staticClass:"btn-con"},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:t.goPay}},[t._v("支付LT")])],1)])])},staticRenderFns:[]};var l=a("C7Lr")(d,c,!1,function(t){a("DapN")},"data-v-699fa4d4",null);e.default=l.exports}});
//# sourceMappingURL=11.14a6fe9d46a63fe0eb15.js.map