export default {
  decks: state => state.decks,
  getDeckById: (state, getters) => id => getters.decks.find(deck => deck.id === id),
  getDeckTitleById: (state, getters) => (id) => {
    const deck = getters.getDeckById(id);
    if (!deck) return null;
    return deck.title;
  },
};
