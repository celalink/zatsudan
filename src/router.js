import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
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
    },
    {
      path: '/load',
      component:Load
    },
    {
      path: '/howto',
      component: Howto
    },
    {
      path: '/policy',
      component:Policy
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