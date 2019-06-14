import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { State } from './types';
export * from './types';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    decks: [],
    user: null,
  },
  mutations: {
    ...mutations,
    ...vuexfireMutations,
  },
  actions,
  getters,
});
