import Deck from '../components/Deck.js';

export default {
  data: () => ({
    title: 'Decks',
    hover: false,
  }),
  components: {
    Deck,
  },
  computed: {
    ...Vuex.mapGetters([
      'decks'
    ])
  },
  mounted() {
    this.$store.dispatch('FETCH_DECKS');
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <Deck
        v-for="deck in this.decks"
        :key="deck.id"
        :deck="deck"
      ></Deck>
    </div>
  `,
};
