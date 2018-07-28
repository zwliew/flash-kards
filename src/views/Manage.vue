<template>
  <div class="container">
    <h1>Manage</h1>
    <div v-if="deck !== undefined">
      <div>
        <p><strong>Title</strong>: {{ deck.title }}</p>
        <p><strong>Tags</strong>: {{ tagline }}</p>
        <p><strong>Number of cards</strong>: {{ lengthText }}</p>
      </div>
      <div class="action-container">
        <button @click="practice">Practice</button>
        <button
          v-if="$store.getters.isAdmin"
          @click="addCard"
        >Add Card</button>
      </div>
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
    addCard() {
      this.$router.push(`/create/${this.$route.params.id}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center

.action-container
  display flex
  justify-content space-evenly
</style>
