<template>
  <router-link :to="{name: 'manageDeck', params: { deckId: deck.id }}" :class="$style.deck">
    <h1>{{ deck.title }}</h1>
    <div :class="$style.deck__info">
      <div>
        <Chip v-for="tag in tags" :key="tag" :class="$style.deck__tag">{{tag}}</Chip>
      </div>
      <span>
        {{ numCards }}
        <span class="material-icons-round" :class="$style.deck__icon">library_books</span>
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Deck as DeckType } from '@/store';
import Chip from '@/components/Chip.vue';

@Component({
  components: { Chip },
})
export default class Deck extends Vue {
  @Prop({ type: Object, default: null }) public readonly deck!: DeckType;

  get tags() {
    return this.deck.tags;
  }

  get numCards() {
    return this.deck.cards.length;
  }
}
</script>

<style lang="scss" module>
.deck {
  $focused-box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  border: 1px solid #b0b0b0;
  border-radius: 4px;
  color: inherit;
  padding: 8px 16px 16px 16px;
  text-decoration: none;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: $focused-box-shadow;
  }

  &:focus {
    box-shadow: $focused-box-shadow;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  &__icon {
    vertical-align: bottom;
  }

  &__tag:not(:first-child) {
    margin-left: 4px;
  }
}
</style>
