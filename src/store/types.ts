export interface User {
  name: string | null;
  uid: string | null;
  photo: string | null;
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
  user: User;
  decks: Deck[];
}

export interface Getters {
  getDeckById: (id: string) => Deck;
  getDeckTitleById: (id: string) => string;
  isAdmin: (state: State, _: any) => boolean;
}
