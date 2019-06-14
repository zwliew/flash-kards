import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/decks',
      name: 'Decks',
      component: () =>
        import(/* webpackChunkName: "decks" */ './views/Decks.vue'),
    },
    {
      path: '/Study/:id',
      name: 'Study',
      component: () =>
        import(/* webpackChunkName: "study" */ './views/Study.vue'),
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () =>
        import(/* webpackChunkName: "edit" */ './views/Edit.vue'),
    },
    {
      path: '/:deckId/new',
      name: 'New Card',
      component: () =>
        import(/* webpackChunkName: "newCard" */ './views/NewCard.vue'),
    },
    {
      path: '/manage/:id',
      name: 'Manage',
      component: () =>
        import(/* webpackChunkName: "manage" */ './views/Manage.vue'),
    },
    {
      path: '/account',
      name: 'Account',
      component: () =>
        import(/* webpackChunkName: "account" */ './views/Account.vue'),
    },
    {
      path: '/',
      redirect: '/decks',
    },
  ],
});
