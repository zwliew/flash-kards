export default {
  data: () => ({
    style: {
      'font-family': 'Roboto, sans-serif',
    },
  }),
  template: `
    <div :style="style">
      <router-link to="/">Decks</router-link> |
      <router-link to="/create">Create</router-link>
      <router-view></router-view>
    </div>
  `,
};
