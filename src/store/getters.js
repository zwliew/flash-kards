export default {
  decks: state => state.decks,
  getDeckById: (state, getters) => id => getters.decks.find(deck => deck.id === id),
};
