import router from './router.js';
import store from './store/index.js';
import App from './App.js';

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('FETCH_DECKS');
  },
}).$mount('#app');
