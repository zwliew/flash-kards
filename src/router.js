import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter);

const Decks = () => import('./views/Decks.js');
const Practice = () => import('./views/Practice.js');
const CreateCard = () => import('./views/CreateCard.js');
const Account = () => import('./views/Account.vue');

export default new VueRouter({
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
