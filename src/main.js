import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
console.log(store)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Dialog from '@/components/dialog'
import kaTag from '@/components/tag'
// Vue.use(axios)
import Bus from 'vue-happy-bus'
import '@/assets/css/common.scss'
import '@/assets/css/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$Bus = Bus
axios.defaults.baseURL = 'http://120.46.34.178'
// // 请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在请求发送前，添加自定义请求头
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers['token'] = token;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.use(Dialog)
Vue.use(kaTag)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
