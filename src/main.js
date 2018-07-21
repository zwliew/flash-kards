import router from './router.js';
import store from './store/index.js';
import App from './App.js';

firebase.initializeApp({
  projectId: 'flash-cards-e27e5',
  databaseURL: 'https://flash-cards-e27e5.firebaseio.com',
});
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('FETCH_DECKS');
  },
}).$mount('#app');
