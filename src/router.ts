import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/decks',
      name: 'decks',
      component: () =>
        import(/* webpackChunkName: "decks" */ './views/Decks.vue'),
    },
    {
      path: '/decks/:deckId',
      name: 'manageDeck',
      component: () =>
        import(/* webpackChunkName: "manageDeck" */ './views/ManageDeck.vue'),
    },
    {
      path: '/decks/:deckId/study',
      name: 'studyDeck',
      component: () =>
        import(/* webpackChunkName: "studyDeck" */ './views/StudyDeck.vue'),
    },
    {
      path: '/decks/:deckId/new',
      name: 'newCard',
      component: () =>
        import(/* webpackChunkName: "newCard" */ './views/NewCard.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "account" */ './views/Account.vue'),
    },
    {
      path: '/',
      redirect: '/decks',
    },
  ],
});
