import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import apiTest from '@/views/apiTest'
import login from '@/views/login'
// import Gridlayout from '@/views/gridlayout'
// import Test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: () => import( /* webpackChunkName: 'Test' */ '@/views/test' )   //实现路由懒加载
    },
    {
      path: '/vueHappyBus',
      name: 'vueHappyBus',
      component: () => import( /* webpackChunkName: 'Test111' */ '@/views/vue-happy-bus' )   //实现路由懒加载
    },
    {
      path: '/gridlayout',
      name: 'Gridlayout',
      component: () => import( /* webpackChunkName: 'Gridlayout' */ '@/views/gridlayout' )  //实现路由懒加载
    },
    {
      path: '/helloworld',  // websocket
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/apiTest',
      name: 'apiTest',
      component: apiTest
    }
  ]
})
