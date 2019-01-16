<template>
  <div id="app">
			<router-view/>
  </div>
</template>

<script>
import pollWeb3 from '@/util/pollWeb3'
import mutil from '@/util/mutil'
export default {
  name: 'App',
	mounted () {
		this.$store.dispatch('getContractInstance')
	},
	beforeCreate(){
		pollWeb3()
		this.$store.dispatch('registerWeb3');
	},
	methods:{
		changeLanguage(type) {
				if(type=="en"){
			      this.$i18n.locale="en"
			    }else{
			      this.$i18n.locale="cn"
			    }
            	this.$i18n.locale = type
            	this.language = this.$t('index.btn8')
            	mutil.setSection('lang', type)
            	console.log(mutil.getSection('lang'))
			},
			refreshLang(){
				if(this.$route.query.lang != undefined){
					mutil.setSection('lang', this.$route.query.lang)
					this.changeLanguage(this.$route.query.lang)
				}else{
					this.changeLanguage(mutil.getSection('lang'))
				}
			},
	},
	created(){
		this.$Notice.config({
		    duration: 10
		})
		this.refreshLang()
	}
}
</script>
<style>
	body{
		min-width: 100vh;
		min-height: 100vh;
		color: #000;
	}
	.ivu-btn{
		border-radius: 0 !important;
	}
	.ivu-select-selection,.ivu-input-number,.ivu-input,.ivu-input-group-append{
		border-radius: 0 !important;
	}
	.companyMessage, .world, .userMessage, .companyBusiness,.ivu-card,.ivu-notice-notice{
		border-radius: 0 !important;
	}
	.ivu-form-item-required .ivu-form-item-label:before {
		content: ""!important;
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

