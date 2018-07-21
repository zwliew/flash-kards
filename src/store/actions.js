export default {
  FETCH_DECKS({ commit }) {
    fetch('/api/db.json')
      .then(res => res.json())
      .then(json => json.decks)
      .then(decks => commit('SET_DECKS', { decks }));
  },
};
