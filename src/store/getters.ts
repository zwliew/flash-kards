import { Deck, State, Getters } from './types';

export default {
  getDeckById: ({ decks }: State, _: Getters) => (id: string) =>
    decks.find((deck: Deck) => deck.id === id),
  getDeckTitleById: (_: State, getters: Getters) => (id: string) => {
    const deck = getters.getDeckById(id);
    if (!deck) {
      return null;
    }
    return deck.title;
  },
};
