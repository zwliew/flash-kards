<template>
  <div class="decks">
    <h1 class="decks__title">Decks</h1>
    <div v-if="decks.length > 0" class="decks__list">
      <Deck v-for="deck in decks" :key="deck.id" :deck="deck"/>
    </div>
    <div v-else>Loading…</div>
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

<style lang="scss" scoped>
.decks {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.decks__title {
  margin: 16px 0;
}

.decks__list {
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 0 8px;
}

@media (min-width: 600px) {
  .decks__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .decks__list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
