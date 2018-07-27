<template>
  <div class="container">
    <h1>Manage</h1>
    <div>
      <p><strong>Title</strong>: {{ deck.title }}</p>
      <p><strong>Tags</strong>: {{ tagline }}</p>
      <p>Number of cards: {{ lengthText }}</p>
    </div>
    <div>
      <button @click="practice">Practice</button>
      <button>Add Card</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tagline() {
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
    lengthText() {
      return `${this.deck.cards.length} card${this.deck.cards.length !== 1 ? 's' : ''}`;
    },
    id() {
      return this.$route.params.id;
    },
    deck() {
      return this.$store.getters.getDeckById(this.id);
    },
  },
  methods: {
    practice() {
      this.$router.push(`/practice/${this.id}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center
</style>
