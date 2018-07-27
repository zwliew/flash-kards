<template>
  <div class="container">
    <h1>Decks</h1>
    <div v-if="decks.length > 0">
      <Deck
      v-for="deck in decks"
      :key="deck.id"
      :deck="deck"
      ></Deck>
    </div>
    <div v-else>
      Loading…
    </div>
  </div>
</template>

<script>
import Deck from '../components/Deck.vue';

export default {
  components: {
    Deck,
  },
  computed: {
    decks() {
      return this.$store.state.decks;
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
