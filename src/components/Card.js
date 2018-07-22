import Button from '../components/Button.js';

export default {
  props: [
    'card',
  ],
  data: () => ({
    hovering: false,
    flipped: false,
    styles: {
      container: {
        margin: 'auto',
        'min-width': '240px',
        'min-height': '120px',
        border: '1px solid #b0b0b0',
        'border-radius': '4px',
        'text-align': 'center',
        padding: '16px',
      },
    },
  }),
  computed: {
    visibleText() {
      return this.flipped ? this.card.back : this.card.front;
    },
  },
  watch: {
    card() {
      this.flipped = false;
    },
  },
  components: {
    Button,
  },
  template: `
    <div :style="styles.container">
      <h1>{{ visibleText }}</h1>
      <Button
        @click="flipped = !flipped"
      >Flip</Button>
    </div>
  `,
};
