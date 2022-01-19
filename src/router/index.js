import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import apiTest from '@/components/apiTest'
import login from '@/components/login'
import Gridlayout from '@/components/gridlayout'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/gridlayout',
      name: 'Gridlayout',
      component: Gridlayout
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
    }
  ]
})
