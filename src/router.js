import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Decks = () => import('./views/Decks.vue');
const Study  = () => import('./views/Study.vue');
const Edit = () => import('./views/Edit.vue');
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
      path: '/Study/:id',
      component: Study,
    },
    {
      path: '/edit/:id',
      component: Edit,
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
