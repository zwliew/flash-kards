import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store, { User } from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBMaNVcvKJiVQhdA0wr5B7TZeZApJV1oAc',
      authDomain: 'flash-kards.firebaseapp.com',
      databaseURL: 'https://flash-kards.firebaseio.com',
      projectId: 'flash-kards',
      storageBucket: 'flash-kards.appspot.com',
      messagingSenderId: '664546075542',
      appId: '1:664546075542:web:171d8e625f0defdb',
    });
    firebase.firestore().settings({});
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        this.$store.dispatch('LOG_OUT');
      } else {
        this.$store.dispatch('LOG_IN', {
          id: user.uid,
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      }
    });
    this.$store.dispatch('SET_DECKS_REF');
  },
  render: (h) => h(App),
}).$mount('#app');
