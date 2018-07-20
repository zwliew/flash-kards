export default {
  props: ['deck'],
  data: () => ({
    styles: {
      main: {
        'box-sizing': 'border-box',
        border: '1px solid #b0b0b0',
        'border-radius': '4px',
        'max-width': '80vmin',
        'max-height': '80vmin',
        width: '240px',
        height: '240px',
        padding: '16px',
        'margin-top': '16px',
      },
    },
    hover: false,
  }),
  computed: {
    tagline() {
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
    hoverStyle() {
      return {
        cursor: `${this.hover ? 'pointer' : 'default'}`,
      };
    },
  },
  methods: {
    openDeck(id) {
      this.$router.push(`/decks/${id}`);
    },
  },
  template: `
    <div
      :style="[styles.main, hoverStyle]"
      @click="openDeck(deck.id)"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <h1>{{ deck.title }}</h1>
      <em>{{ tagline }}</em>
    </div>
  `,
};
