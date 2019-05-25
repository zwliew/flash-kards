import { firestoreAction } from 'vuexfire';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  SET_DECKS_REF: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('decks', firebase.firestore().collection('decks'));
  }),
  ADD_CARD({ getters }, { deckId, front, back }) {
    firebase.firestore().collection('decks').doc(deckId).update({
      cards: [
        ...getters.getDeckById(deckId).cards,
        {
          front,
          back,
        },
      ],
    }).catch(err => console.error(err));
  },
};
