 import Deck from '../components/Deck.js';

export default {
  data: () => ({
    styles: {
      container: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
      },
    },
  }),
  components: {
    Deck,
  },
  computed: {
    ...Vuex.mapGetters([
      'decks'
    ])
  },
  template: `
    <div :style="styles.container">
      <h1>Decks</h1>
      <div v-if="decks.length">
        <Deck
        v-for="deck in decks"
        :key="deck.id"
        :deck="deck"
        ></Deck>
      </div>
      <div v-else>
        Loading…
      </div>
    </div>
  `,
};
