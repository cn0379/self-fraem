/*
 * @Author: your name
 * @Date: 2020-10-15 22:57:25
 * @LastEditTime: 2020-11-29 23:44:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\main.js
 */
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import * as filters from '@/filters'
import * as directives from '@/directives'
import '@/plugins/element-ui-vue'

// 白屏过渡
import { preloaderFinished } from '@/utils/preload'
preloaderFinished()
Vue.config.productionTip = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]()))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
