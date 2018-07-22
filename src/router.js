import Vue from 'vue';
import VueRouter from 'vue-router';
import Decks from './views/Decks.js';
import Practice from './views/Practice.js';
import CreateCard from './views/CreateCard.js';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      alias: '/decks',
      component: Decks,
    },
    {
      path: '/practice/:id',
      component: Practice,
    },
    {
      path: '/create/:id',
      component: CreateCard,
    },
  ],
});
