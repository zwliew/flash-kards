import Button from '../components/Button.js';

export default {
  components: {
    Button,
  },
  data: () => ({
    styles: {
      container: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        padding: '16px',
        'text-align': 'center',
      },
      input: {
        background: 'none',
        border: 0,
        'border-bottom': '2px solid #b0b0b0',
        margin: '16px',
        'font-size': '1.25rem',
      },
    },
    front: '',
    back: '',
  }),
  computed: {
    deckId() {
      return this.$route.params.id;
    },
    title() {
      return this.$store.getters.getDeckTitleById(this.deckId);
    },
    cardAdded() {
      const deck = this.$store.getters.getDeckById(this.deckId);
      if (!deck) return false;
      return deck.cards.find(card => this.front === card.front && this.back === card.back);
    },
  },
  methods: {
    submit() {
      const REGEX_TEST = /^[A-Za-z0-9(),;. ]+$/;
      if (this.front.length === 0 || this.back.length === 0) {
        alert('Please fill in both the front and back text.')
      } else if (!REGEX_TEST.test(this.front) || !REGEX_TEST.test(this.back)) {
        alert('Please input only valid characters.');
      } else {
        this.$store.dispatch('ADD_CARD', {
          deckId: this.deckId,
          front: this.front,
          back: this.back,
        });
      }
    }
  },
  watch: {
    cardAdded(now, old) {
      if (now !== old && now) {
        this.$router.push('/');
      }
    }
  },
  template: `
    <div :style="styles.container">
      <div v-if="title" :style="styles.container">
        <h1>New card for {{ title }}</h1>
        <div :style="styles.inputContainer">
          <input
            type="text"
            name="front"
            id="front"
            :style="styles.input"
            placeholder="Front"
            required
            v-model="front">
        </div>
        <div :style="styles.inputContainer">
          <input
            type="text"
            name="back"
            id="back"
            :style="styles.input"
            placeholder="Back"
            v-model="back"
            required>
        </div>
        <Button @click="submit">Submit</Button>
      </div>
      <div v-else>
        Loading…
      </div>
    </div>
  `,
};
