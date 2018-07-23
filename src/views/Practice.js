import Card from '../components/Card.js';

export default {
  data: () => ({
    styles: {
      main: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'max-width': '80%',
        'max-height': '80%',
        margin: 'auto',
      },
      nav: {
        padding: '16px',
        display: 'flex',
        'justify-content': 'space-evenly',
      },
      header: {
        display: 'flex',
        'justify-content': 'space-evenly',
        'align-items': 'center',
      },
    },
    index: 0,
    hovering: false,
  }),
  computed: {
    deck() {
      return this.$store.getters.getDeckById(this.$route.params.id);
    },
    nextIndex() {
      return this.index === this.deck.cards.length - 1 ? 0 : this.index + 1;
    },
    prevIndex() {
      return this.index === 0 ? this.deck.cards.length - 1 : this.index - 1;
    },
    navButtonStyle() {
      return {
        padding: '16px',
        'border-radius': '50%',
        border: '1px solid #b0b0b0',
        cursor: `${this.hovering ? 'pointer' : 'default'}`,
      };
    },
    addButtonStyle() {
      return {
        'margin-left': '16px',
        padding: '8px',
        cursor: `${this.hovering ? 'pointer' : 'default'}`,
      };
    },
  },
  methods: {
    nextCard() {
      this.index = this.nextIndex;
    },
    prevCard() {
      this.index = this.prevIndex;
    },
    addCard() {
      this.$router.push(`/create/${this.$route.params.id}`);
    },
  },
  components: {
    Card,
  },
  template: `
    <div :style="styles.main">
      <header :style="styles.header">
        <h1>Practice</h1>
        <i
          v-if="$store.getters.isAdmin"
          class="fas fa-plus-circle"
          :style="addButtonStyle"
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
          title="Add card"
          @click="addCard"
        ></i>
      </header>
      <div v-if="deck">
        <Card :card="deck.cards[index]"></Card>
        <nav :style="styles.nav">
          <i
            :style="navButtonStyle"
            class="fas fa-arrow-left"
            title="Previous"
            @mouseover="hovering = true"
            @mouseleave="hovering = false"
            @click="prevCard"
          ></i>
          <i
            :style="navButtonStyle"
            class="fas fa-arrow-right"
            title="Next"
            @mouseover="hovering = true"
            @mouseleave="hovering = false"
            @click="nextCard"
          ></i>
        </nav>
      </div>
      <div v-else>
        Loading…
      </div>
    </div>
  `,
};
