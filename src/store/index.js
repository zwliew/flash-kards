import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default new Vuex.Store({
  state: {
    refs: {
      decks: null,
    },
    "decks": [],
  },
  getters,
  actions,
  mutations: {
    ...mutations,
    ...Vuexfire.firebaseMutations,
  },
});
