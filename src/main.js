
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import './mock/mockServer'
import {Button,Toast} from 'mint-ui'
import HeaderCode from './components/HeaderCode/HeaderCode.vue'

//注册全局组件
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)
Vue.component('HeaderCode', HeaderCode)

import loading from './common/img/loading.png'

Vue.use(VueLazyload,{
  loading
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    HeaderCode
  },
  template: '<App/>',
  router,
  store
})
