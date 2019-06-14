import { Deck, State, Getters } from './types';

export default {
  getDeckById: (state: State, _: Getters) => (id: string) =>
    state.decks.find((deck: Deck) => deck.id === id),
  getDeckTitleById: (_: State, getters: Getters) => (id: string) => {
    const deck = getters.getDeckById(id);
    if (!deck) {
      return null;
    }
    return deck.title;
  },
  isAdmin: (state: State, _: Getters) =>
    state.user !== null && state.user.id === 'GFPwcwf8RJgq5glwtddLCW2bBNC3',
};
