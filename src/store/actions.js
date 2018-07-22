export default {
  SET_DECKS_REF: Vuexfire.firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('decks', ref);
  }),
  ADD_CARD({ state, getters }, { deckId, front, back }) {
    state.refs.decks.doc(deckId).update({
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
