import router from './router.js';
import store from './store.js';
import App from './App.js';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
