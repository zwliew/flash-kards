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
      },
      inputContainer: {
        padding: '16px',
      },
    },
  }),
  computed: {
    title() {
      return this.$store.getters.getDeckTitleById(this.$route.params.id);
    },
  },
  template: `
    <div :style="styles.container">
      <div v-if="title" :style="styles.container">
        <h1>New card for {{ title }}</h1>
        <div :style="styles.inputContainer">
          <label>
            Front
            <input type="text" name="front" id="front">
          </label>
        </div>
        <div :style="styles.inputContainer">
          <label>
            Back
            <input type="text" name="back" id="back">
          </label>
        </div>
        <Button>Submit</Button>
      </div>
      <div v-else>
        Loading…
      </div>
    </div>
  `,
};
