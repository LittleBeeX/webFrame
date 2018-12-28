<template>
  <div id="app">
			<router-view/>
  </div>
</template>

<script>
import pollWeb3 from '@/util/pollWeb3'
export default {
  name: 'App',
	mounted () {
		this.$store.dispatch('getContractInstance')
	},
	beforeCreate(){
		pollWeb3()
		this.$store.dispatch('registerWeb3');
	},
	created(){
		this.$Notice.config({
	    duration: 10
	});
	}
}
</script>
<style>
	body{
		min-width: 100vh;
		min-height: 100vh;
		color: #000;
	}
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
		border-bottom: 1px solid rgba(255,255,255,0.1);
		padding: 19px 0px 19px 15px;
	}
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover,
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover{
		background: rgba(255,255,255,0.1);
    color: white;
	}
	.ivu-menu-item>i{
		position: relative;
    top: -2px;
	}
	
	.ivu-spin-main .ivu-spin-text div{
		margin-top: 20px;
		font-size: 16px;
	}
	.ivu-table-wrapper .ivu-table:after{
		background-color: transparent
	}
	.demo-spin-icon-load{
	    animation: ani-demo-spin 1s linear infinite;
	}
	@keyframes ani-demo-spin {
	    from { transform: rotate(0deg);}
	    50%  { transform: rotate(180deg);}
	    to   { transform: rotate(360deg);}
	}
</style>

