export default {
  getDeckById: (state, _) => id => state.decks.find(deck => deck.id === id),
  getDeckTitleById: (_, getters) => (id) => {
    const deck = getters.getDeckById(id);
    if (!deck) return null;
    return deck.title;
  },
};
