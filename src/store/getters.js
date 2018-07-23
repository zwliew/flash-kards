export default {
  getDeckById: (state, _) => id => state.decks.find(deck => deck.id === id),
  getDeckTitleById: (_, getters) => (id) => {
    const deck = getters.getDeckById(id);
    if (!deck) return null;
    return deck.title;
  },
  isAdmin: (state, _) => state.user.uid === 'iQc1iLK3r3Yf98R51wT3B2D7vHq2',
};
