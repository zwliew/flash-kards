export default {
  SET_USER(state, { name, uid, photo }) {
    state.user = { name, uid, photo };
  },
};
