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
      const payload: User = { name: null, photo: null, uid: null };
      if (user) {
        payload.name = user.displayName;
        payload.photo = user.photoURL;
        payload.uid = user.uid;
      }
      this.$store.commit('SET_USER', payload);
    });
    this.$store.dispatch('SET_DECKS_REF');
  },
  render: (h) => h(App),
}).$mount('#app');
