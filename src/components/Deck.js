export default {
  props: ['deck'],
  data: () => ({
    styles: {
      container: {
        'box-sizing': 'border-box',
        border: '1px solid #b0b0b0',
        'border-radius': '4px',
        'min-width': '240px',
        'min-height': '240px',
        padding: '16px',
        'margin': '16px',
        transition: 'box-shadow 0.12s',
      },
    },
    hovering: false,
  }),
  computed: {
    tagline() {
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
    hoverStyle() {
      if (this.hovering) {
        return {
          'box-shadow': '0px 1px 6px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
        };
      }
      return null;
    },
    lengthText() {
      return `${this.deck.cards.length} card${this.deck.cards.length !== 1 ? 's' : ''}`;
    },
  },
  methods: {
    openDeck(id) {
      this.$router.push(`/manage/${id}`);
    },
  },
  template: `
    <div
      :style="[styles.container, hoverStyle]"
      @click="openDeck(deck.id)"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
      <h1>{{ deck.title }}</h1>
      <em>{{ tagline }}</em>
      <p>{{ lengthText }}</p>
    </div>
  `,
};
