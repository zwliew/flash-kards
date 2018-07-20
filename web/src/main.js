import router from './router.js';
import App from './App.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
