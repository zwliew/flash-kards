import Decks from './views/Decks.js';
import Practice from './views/Practice.js';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Decks,
    },
    {
      path: '/practice/:id',
      component: Practice,
    },
  ],
});
