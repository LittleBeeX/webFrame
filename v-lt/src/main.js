// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import {store} from './store/'
import VueI18n from 'vue-i18n'
import messages from "./assets/data/language"
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh',    
    messages: messages
})

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);

import mutil from '@/util/mutil'
import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.timeout = 15000

axios.interceptors.request.use(request => {
		iView.LoadingBar.start();
		setTimeout(() => {
			if(mutil.getSection('myAddress') == null || mutil.getSection('myAddress') == ''){
				iView.Notice.warning({
					title: '请先登录metamask钱包，刷新后进行操作！',
					duration: 0
				});
			}
		},1000)
		return request
}, error => {
		iView.LoadingBar.error();
		iView.Notice.warning({
				title: '加载超时！',
				duration: 0
		});
		return Promise.reject(error);
})

axios.interceptors.response.use(response => {
	  	iView.LoadingBar.finish()
		if(response.data.state == 101 || response.data.state == 102){
			iView.Notice.warning({
					title: '登录超时,请从新登录！',
					duration: 0
			});
			router.push({
				path:'/'
			})
			return false
		}else{
			return response 
		}
		
}, error => {
		iView.LoadingBar.error();
		iView.Notice.warning({
				title: '加载失败！',
				duration: 0
		});
		router.push({
			path:'/'
		})
		return Promise.reject(error);
})

Vue.config.productionTip = false

const Bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{Bus},
  router,
	i18n,
	store,
  components: { App },
  template: '<App/>'
})
