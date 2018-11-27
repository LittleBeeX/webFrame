// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import {store} from './store/'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh-CN',    
    messages: {
      'zh-CN': require('@/assets/data/zh'),
      'en-US': require('@/assets/data/en'),
      'ko-KR': require('@/assets/data/kr'),
      'it-JP': require('@/assets/data/jp')    
    }
})

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);

import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.timeout = 5000

axios.interceptors.request.use(request => {
		iView.LoadingBar.start();
		if(store.state.web3.coinbase == null || store.state.web3.coinbase == ''){
			Vue.nextTick(() => {
				if(store.state.web3.coinbase == null || store.state.web3.coinbase == ''){
					iView.Notice.warning({
							title: '请先登录metamask钱包，刷新后进行操作！',
					});
				}
			})
		}
		return request
}, error => {
		iView.LoadingBar.error();
		iView.Notice.warning({
				title: '加载超时！',
		});
		return Promise.reject(error);
})

axios.interceptors.response.use(response => {
	  iView.LoadingBar.finish()
		if(response.data.state == 101 || response.data.state == 102){
			iView.Notice.warning({
					title: '请先登录！',
			});
			router.push({
				path:'/'
			})
		}
		return response
		
}, error => {
		iView.LoadingBar.error();
		iView.Notice.warning({
				title: '加载失败！',
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
