import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRandom, faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faRandom, faArrowRight, faArrowLeft, faStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAnnRBfU4g3s3jGUWP59_TkSsHUisG3dCw",
      authDomain: "flash-cards-e27e5.firebaseapp.com",
      databaseURL: "https://flash-cards-e27e5.firebaseio.com",
      projectId: "flash-cards-e27e5",
      storageBucket: "flash-cards-e27e5.appspot.com",
      messagingSenderId: "629649052365",
    });
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });
    firebase.auth().onAuthStateChanged((user) => {
      const payload = {};
      if (user) {
        payload.name = user.displayName;
        payload.photo = user.photoURL;
        payload.uid = user.uid;
      }
      this.$store.commit('SET_USER', payload);
    });
    this.$store.dispatch('SET_DECKS_REF');
  },
  render: h => h(App),
}).$mount('#app');
