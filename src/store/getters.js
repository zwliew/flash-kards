export default {
  getDeckById: (state, _) => id => state.decks.find(deck => deck.id === id),
  getDeckTitleById: (_, getters) => (id) => {
    const deck = getters.getDeckById(id);
    if (!deck) return null;
    return deck.title;
  },
  isAdmin: (state, _) => state.user.uid === 'GFPwcwf8RJgq5glwtddLCW2bBNC3',
};
