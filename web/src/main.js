import router from './router.js';
import App from './App.js';

Vue.component('flash-deck', {
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
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
