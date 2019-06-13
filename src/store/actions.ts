import { firestoreAction } from 'vuexfire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { State, Getters } from './types';

export default {
  SET_DECKS_REF: firestoreAction<State, State>(({ bindFirestoreRef }) => {
    bindFirestoreRef('decks', firebase.firestore().collection('decks'));
  }),
  ADD_CARD(
    { getters }: { getters: Getters },
    { deckId, front, back }: { deckId: string; front: string; back: string },
  ) {
    firebase
      .firestore()
      .collection('decks')
      .doc(deckId)
      .update({
        cards: [
          ...getters.getDeckById(deckId).cards,
          {
            front,
            back,
          },
        ],
      })
      .catch(() => undefined);
  },
};
