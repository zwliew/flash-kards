export default {
  data: () => ({
    styles: {
      container: {
        'font-family': 'Roboto, sans-serif',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
      },
      nav: {
        'text-align': 'center',
        padding: '32px',
      },
    },
  }),
  template: `
    <div :style="styles.container">
      <nav :style="styles.nav">
        <router-link to="/decks">Decks</router-link> |
        <router-link to="/account">Account</router-link>
      </nav>
      <router-view></router-view>
    </div>
  `,
};
