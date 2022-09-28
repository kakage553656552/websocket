import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import apiTest from '@/components/apiTest'
import login from '@/components/login'
import lineChart from '@/components/line-chart'
// import Gridlayout from '@/components/gridlayout'
// import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: () => import( /* webpackChunkName: 'Test' */ '@/components/test' )   //实现路由懒加载
    },
    {
      path: '/test111',
      name: 'Test111',
      component: () => import( /* webpackChunkName: 'Test111' */ '@/components/vue-happy-bus' )   //实现路由懒加载
    },
    {
      path: '/gridlayout',
      name: 'Gridlayout',
      component: () => import( /* webpackChunkName: 'Gridlayout' */ '@/components/gridlayout' )  //实现路由懒加载
    },
    {
      path: '/helloworld',
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
    },
    {
      path: '/lineChart',
      name: 'lineChart',
      component: lineChart
    }
  ]
})
