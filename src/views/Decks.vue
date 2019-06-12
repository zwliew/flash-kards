<template>
  <div class="container">
    <h1>Decks</h1>
    <div v-if="decks.length > 0" class="deck-list">
      <Deck
        v-for="deck in decks"
        :key="deck.id"
        :deck="deck" />
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
  align-items center
  display flex
  flex-direction column

.deck-list
  display grid
  grid-column-gap 16px
  grid-row-gap 16px
  padding 0 16px

@media (min-width: 600px)
  .deck-list
    grid-template-columns repeat(2, 1fr)

@media (min-width: 900px)
  .deck-list
    grid-template-columns repeat(3, 1fr)
</style>
