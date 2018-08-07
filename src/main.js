import Vue from 'vue'
import App from './App'
import router from './Router'
import $ from 'jquery'
Vue.config.productionTip = false
if(!window.$) window.$ = $
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
