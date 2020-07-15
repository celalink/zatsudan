import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import * as firebase from "firebase/app";
import "firebase/firestore";
import VueAdsense from 'vue-adsense';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD8DBur_joCb_hZG8_gEfa8pycjlUFEVOM",
  authDomain: "zatsudan-prod.firebaseapp.com",
  databaseURL: "https://zatsudan-prod.firebaseio.com",
  projectId: "zatsudan-prod",
  storageBucket: "zatsudan-prod.appspot.com",
  messagingSenderId: "842758073742",
  appId: "1:842758073742:web:ca340c617e22f808de48df",
};
firebase.initializeApp(firebaseConfig);

Vue.component('adsense', VueAdsense);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');