export default {
  FETCH_DECKS: Vuexfire.firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('decks', firebase.firestore().collection('decks'));
  }),
};
