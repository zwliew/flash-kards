export default {
  decks(state) {
    return state.decks;
  },
  getDeckById: (state, getters) => id => getters.decks.find(deck => deck.id === id),
};
