// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


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

Vue.config.productionTip = false

const Bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{Bus},
  router,
	i18n,
  components: { App },
  template: '<App/>'
})
