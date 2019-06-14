import { firestoreAction } from 'vuexfire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { State, Getters, User } from './types';

export default {
  BIND_DECKS: firestoreAction<State, State>(({ bindFirestoreRef }) =>
    bindFirestoreRef('decks', firebase.firestore().collection('decks')),
  ),
  LOG_IN: firestoreAction<State, State>(({ bindFirestoreRef }, user: User) => {
    const doc = firebase
      .firestore()
      .collection('users')
      .doc(user.id);

    // Create a new doc for the user if it's his/her first time
    doc.get().then((snapshot) => {
      if (!snapshot.exists) {
        doc.set({ name: user.name, photoUrl: user.photoUrl, isAdmin: false });
      }
    });

    return bindFirestoreRef('user', doc);
  }),
  LOG_OUT: firestoreAction<State, State>(({ unbindFirestoreRef }) =>
    unbindFirestoreRef('user'),
  ),
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
      });
  },
};
