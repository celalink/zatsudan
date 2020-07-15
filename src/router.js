import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main';
import Login from './components/Login';
import Start from './components/Start';
import Card from './components/Card';
import Top from './components/Top';
import Load from './components/Load';
import Howto from './components/HowTo';
import Policy from './components/Policy';
import Maintenance from './components/Maintenance';
import * as firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
      name: 'Maintenance',
      component: Maintenance,
      meta: { requiresAuth: true },
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// メンテナンス画面を開く場合はログインが必須
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // 認証状態を取得
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        // 認証されていない場合、認証画面へ
        next({ name: 'Login' });
      }
    });
  } else {
    next();
  }
});

export default router;