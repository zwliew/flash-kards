import Card from '../components/Card.js';

export default {
  data: () => ({
    style: {
      display: 'flex',
      'justify-content': 'center',
    },
  }),
  computed: {
    deck() {
      return this.$store.getters.getDeckById(parseInt(this.$route.params.id));
    },
  },
  components: {
    Card,
  },
  template: `
    <div :style="style">
      <div v-if="deck">
        <Card v-for="(card, index) in deck.cards" :card="card" :key="index"></Card>
      </div>
      <div v-else>
        Loading…
      </div>
    </div>
  `,
};
