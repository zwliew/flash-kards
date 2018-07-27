import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Decks = () => import('./views/Decks.js');
const Practice  = () => import('./views/Practice.js');
const CreateCard = () => import('./views/CreateCard.js');
const Account = () => import('./views/Account.vue');
const Manage = () => import('./views/Manage.vue');

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
      path: '/manage/:id',
      component: Manage,
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
