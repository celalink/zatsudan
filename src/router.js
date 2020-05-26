import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import Start from './components/Start'
import Card from './components/Card'
import Top from './components/Top'
import Load from './components/Load'
import Howto from './components/HowTo'
import Policy from './components/Policy'
import Maintenance from './components/Maintenance'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top,
    },
    {
      path: '/main',
      component: Main,
      children:[
        {
          path: "",
          component: Start 
        },
        {
          path: '/main/card',
          name: 'card',
          component: Card,
          props: true
        },
        {
          path: '/load',
          name: 'load', 
          component:Load,
          props: true
        },
        {
          path: '/howto',
          component: Howto
        },
        {
          path: '/policy',
          component:Policy
        },
      ]
    },
    {
      path: '/maintenance',
      component: Maintenance,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router