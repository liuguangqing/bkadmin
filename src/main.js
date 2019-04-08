import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import '@/assets/css/reset.css'
import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters

import VueHighlightJS from 'vue-highlightjs'
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

// import './utils/lineHeight.css'
// import hljs from './utils/lineHeight.js'
// Vue.use(hljs)
// Vue.directive('hljs', function(el) {
//   const blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block)
//   })
// })

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
