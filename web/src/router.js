import Decks from './views/Decks.js';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Decks,
    },
  ],
});
