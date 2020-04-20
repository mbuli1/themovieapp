import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp ({
  apiKey: "AIzaSyC3lSCB_i6u3hK4cgDEtWh550S_SAd9MTA",
  authDomain: "projekt-5a779.firebaseapp.com",
  databaseURL: "https://projekt-5a779.firebaseio.com",
  projectId: "projekt-5a779",
  storageBucket: "projekt-5a779.appspot.com",
  messagingSenderId: "368376825961",
  appId: "1:368376825961:web:aeb4d9847bd92ab24b7af8",
  measurementId: "G-TL7EK68MLK"
});

export const db = firebase.firestore();
export const auth = firebase.auth();

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
