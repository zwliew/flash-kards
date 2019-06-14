export interface User {
  id: string;
  name: string;
  photoUrl: string;
  isAdmin: boolean;
}

export interface Card {
  front: string;
  back: string;
}

export interface Deck {
  id: string;
  title: string;
  tags: string[];
  cards: Card[];
}

export interface State {
  user: User | null;
  decks: Deck[];
}

export interface Getters {
  getDeckById: (id: string) => Deck;
  getDeckTitleById: (id: string) => string;
}
