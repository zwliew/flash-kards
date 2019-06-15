<template>
  <div :class="$style.decks">
    <h1 :class="$style.decks__title">Decks</h1>
    <div v-if="decks.length > 0" :class="$style.decks__list">
      <Deck v-for="deck in decks" :key="deck.id" :deck="deck"/>
    </div>
    <div v-else>Loading…</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Deck from '@/components/Deck.vue';

@Component({
  components: {
    Deck,
  },
})
export default class Decks extends Vue {
  get decks() {
    return this.$store.state.decks;
  }
}
</script>

<style lang="scss" module>
.decks {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__title {
    margin: 16px 0;
  }

  &__list {
    display: grid;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    padding: 0 8px;

    @media (min-width: 600px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 900px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
</style>
