<template>
  <router-link :to="`/manage/${deck.id}`" class="deck">
    <h1>{{ deck.title }}</h1>
    <em>{{ tagline }}</em>
    <p>{{ lengthText }}</p>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Deck as DeckType } from '@/store';

export default class Deck extends Vue {
  @Prop({ type: Object, default: null }) public readonly deck!: DeckType;

  get tagline() {
    return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
  }

  get lengthText() {
    return `${this.deck.cards.length} card${
      this.deck.cards.length !== 1 ? 's' : ''
    }`;
  }
}
</script>

<style lang="scss" scoped>
.deck {
  $focused-box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  border: 1px solid #b0b0b0;
  border-radius: 4px;
  color: inherit;
  padding: 8px 16px 16px 16px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: $focused-box-shadow;
  }

  &:focus {
    box-shadow: $focused-box-shadow;
  }
}
</style>
