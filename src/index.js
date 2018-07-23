import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import router from './router.js';
import store from './store/index.js';
import App from './App.js';

let firestore;

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
    firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });
  },
  mounted() {
    this.$store.commit('STORE_REFS', {
      decks: firestore.collection('decks'),
    });
    this.$store.dispatch('SET_DECKS_REF', {
      ref: this.$store.state.refs.decks,
    });
  },
}).$mount('#app');
