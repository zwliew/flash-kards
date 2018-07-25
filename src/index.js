import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import router from './router.js';
import store from './store/index.js';
import App from './App.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRandom, faPlusCircle, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faRandom, faPlusCircle, faArrowRight, faArrowLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
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
}).$mount('#app');
