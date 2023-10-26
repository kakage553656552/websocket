// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Dialog from '@/components/dialog'
import kaTag from '@/components/tag'
// Vue.use(axios)
import Bus from 'vue-happy-bus'
import {store} from '@/store'
import '@/assets/css/common.css'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
Vue.prototype.$Bus = Bus
axios.defaults.baseURL = 'http://localhost:9000'
Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(Dialog)
Vue.use(kaTag)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
