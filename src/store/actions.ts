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
      });
  },
  LOG_OUT({ commit }: { commit: (type: string) => void }) {
    commit('RESET_USER');
  },
  LOG_IN(
    { commit }: { commit: (type: string, payload: any) => void },
    { id, name, photoUrl }: { id: string; name: string; photoUrl: string },
  ) {
    commit('SET_USER', {
      id,
      name,
      photoUrl,
    });

    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .set(
        {
          id,
          name,
          photoUrl,
        },
        {
          merge: true,
        },
      );
  },
};
