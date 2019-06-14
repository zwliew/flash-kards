export interface User {
  name: string;
  id: string;
  photoUrl: string;
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
  isAdmin: (state: State, _: any) => boolean;
}
