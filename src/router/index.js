import Vue from 'vue'
import Router from 'vue-router'
import websocket from '@/views/websocket'
import apiTest from '@/views/apiTest'
import login from '@/views/login'
// import Gridlayout from '@/views/gridlayout'
// import Test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',     // 测试vuex以及自定义的tag组件
      name: 'Test',
      component: () => import( /* webpackChunkName: 'Test' */ '@/views/test' )   //实现路由懒加载
    },
    {
      path: '/test111',     // 测试$attrs和$listeners
      name: 'Test111',
      component: () => import( /* webpackChunkName: 'Test' */ '@/views/test111' )   //实现路由懒加载
    },
    {
      path: '/test222',     // 未配置
      name: 'Test222',
      component: () => import( /* webpackChunkName: 'Test' */ '@/views/test222' )   //实现路由懒加载
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
      path: '/websocket',  // websocket
      name: 'websocket',
      component: websocket
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
