import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import * as firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false

const firebaseConfig = {
  projectId: "zatsudan-prod",
  databaseURL: "https://zatsudan-prod.firebaseio.com",
}; 
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')