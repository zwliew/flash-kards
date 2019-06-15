<template>
  <div :class="$style.decks">
    <h1 :class="$style.decks__title">Decks</h1>
    <Button @click="addNewDeck">Add deck</Button>
    <div v-if="decks.length > 0" :class="$style.decks__list">
      <Deck v-for="deck in decks" :key="deck.id" :deck="deck"/>
    </div>
    <div v-else>Loading…</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Deck from '@/components/Deck.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Deck,
    Button,
  },
})
export default class Decks extends Vue {
  get decks() {
    return this.$store.state.decks;
  }

  private addNewDeck() {
    this.$router.push({
      name: 'newDeck',
    });
  }
}
</script>

<style lang="scss" module>
.decks {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 16px;
  }

  &__list {
    display: grid;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    margin-top: 8px;
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
