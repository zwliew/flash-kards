export default {
  STORE_REFS(state, { decks }) {
    state.refs.decks = decks;
  },
  SET_USER(state, { name, uid, photo }) {
    state.user = { name, uid, photo };
  },
};
