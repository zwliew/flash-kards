import Vue from 'vue';
import VueRouter from 'vue-router';
import Decks from './views/Decks.js';
import Practice from './views/Practice.js';
import CreateCard from './views/CreateCard.js';
import Account from './views/Account.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/decks',
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
    {
      path: '/account',
      component: Account,
    },
    {
      path: '/',
      redirect: '/decks',
    },
  ],
});
