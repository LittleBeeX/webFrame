import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import {store} from '../store/'
import mutil from '@/util/mutil'

/*管理后台模块*/
const HomeLayout = () =>
	import('@/page/home/Layout')
const HomeOverview = () =>
	import('@/page/home/Overview')
const HomeCapTable = () =>
	import('@/page/home/CapTable')
const HomeMintTransfer = () =>
	import('@/page/home/MintTransfer')
const HomeTrustee = () =>
	import('@/page/home/Trustee')
const HomeStockholder = () =>
	import('@/page/home/Stockholder')
const HomeESOP = () =>
	import('@/page/home/ESOP')
const HomeCreatePlan = () =>
	import('@/page/home/CreatePlan')
const HomeManagePlan = () =>
	import('@/page/home/ManagePlan')
const HomeMyPlan = () =>
	import('@/page/home/MyPlan')
const HomeSTO = () =>
	import('@/page/home/STO')

/*注册，访问模块*/
const IndexLayout = () =>
	import('@/page/index/layout')
const IndexConfig = () =>
	import('@/page/index/Config')
const IndexUserIdent = () =>
	import('@/page/index/UserIdent')
const IndexCompanyIdent = () =>
	import('@/page/index/CompanyIdent')
const IndexTokenSet = () =>
	import('@/page/index/TokenSet')
const IndexTokenPayment = () =>
	import('@/page/index/TokenPayment')

/*路由跳转返回顶部*/
const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		return {
			x: 0,
			y: 0
		}
	}
}

const router = new Router({
	scrollBehavior,
	routes: [
		{
			path:'/',
			redirect:'/index'
		},
		{
			path: '/home',
			name: 'Home',
			redirect: '/home/overview',
			component: HomeLayout,
			children: [
				{
					path: 'overview',
					component: HomeOverview
				}, {
					path: 'capTable',
					component: HomeCapTable
				}, {
					path: 'mintTransfer',
					component: HomeMintTransfer
				}, {
					path: 'trustee',
					component: HomeTrustee
				}, {
					path: 'stockholder',
					component: HomeStockholder
				}, {
					path: 'esop',
					component: HomeESOP
				}, {
					path: 'createPlan',
					component: HomeCreatePlan
				}, {
					path: 'managePlan',
					component: HomeManagePlan
				}, {
					path: 'myPlan',
					component: HomeMyPlan
				}, {
					path: 'sto',
					component: HomeSTO
				},
			]
		},
		{
			path:'/index',
			redirect: '/index/config',
			name:'Index',
			component:IndexLayout,
			children:[
				{
					path:'config',
					component:IndexConfig
				},{
					path:'userIdent',
					component:IndexUserIdent
				},{
					path:'companyIdent',
					component:IndexCompanyIdent
				},{
					path:'tokenSet',
					component:IndexTokenSet
				},{
					path:'tokenPayment',
					component:IndexTokenPayment
				},
			]
		}
	]
})


 router.beforeEach((to, from ,next) => {
	if(store.state.web3.coinbase == null){
		store.commit('refreshCoinbase',mutil.getSection('myAddress'))
	}
	next();
}) 

export default router
