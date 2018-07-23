import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refs: {
      decks: null,
    },
    decks: [],
    user: {
      name: null,
      uid: null,
      photo: null,
    },
  },
  getters,
  actions,
  mutations: {
    ...mutations,
    ...firebaseMutations,
  },
});
