<template>
  <div
    class="container"
    @click="openDeck(deck.id)">
    <h1>{{ deck.title }}</h1>
    <em>{{ tagline }}</em>
    <p>{{ lengthText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      default: null
    }
  },
  computed: {
    tagline() {
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
    lengthText() {
      return `${this.deck.cards.length} card${this.deck.cards.length !== 1 ? 's' : ''}`;
    },
  },
  methods: {
    openDeck(id) {
      this.$router.push(`/manage/${id}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  border 1px solid #b0b0b0
  border-radius 4px
  min-width 240px
  min-height 240px
  padding 0 16px
  text-align center
  transition box-shadow 0.2s
  &:hover
    cursor pointer
    box-shadow 0px 1px 6px rgba(0, 0, 0, 0.25)
</style>
