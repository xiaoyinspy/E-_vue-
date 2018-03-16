
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import './mock/mockServer'

import loading from './common/img/loading.png'

Vue.use(VueLazyload,{
  loading
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
