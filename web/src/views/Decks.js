import Deck from '../components/Deck.js';

export default {
  data: () => ({
    title: 'Decks',
    hover: false,
  }),
  components: {
    Deck,
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <Deck
        v-for="deck in this.$store.state.decks"
        :key="deck.id"
        :deck="deck"
      ></Deck>
    </div>
  `,
};
