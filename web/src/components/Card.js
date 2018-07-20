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
      },
    },
  }),
  computed: {
    tagline() {
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
  },
  template: `
    <div :style="styles.main">
      <h1>{{ deck.title }}</h1>
      <em>{{ tagline }}</em>
    </div>
  `,
};
