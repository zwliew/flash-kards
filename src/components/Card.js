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
    buttonStyle() {
      return {
        border: 'none',
        'border-radius': '4px',
        padding: '0 16px 0 16px',
        height: '36px',
        color: '#6200ee',
        'text-transform': 'uppercase',
        'font-weight': 'bold',
        transition: 'background 0.3s',
        cursor: `${this.hovering ? 'pointer' : 'default'}`,
        background: `${this.hovering ? '#eee' : 'white'}`,
      };
    },
  },
  watch: {
    card() {
      this.flipped = false;
    },
  },
  template: `
    <div :style="styles.container">
      <h1>{{ visibleText }}</h1>
      <button
        :style="buttonStyle"
        @click="flipped = !flipped"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
      >Flip</button>
    </div>
  `,
};
