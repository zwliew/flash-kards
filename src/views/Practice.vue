<template>
  <div class="container">
    <header class="header">
      <h1>Practice</h1>
      <font-awesome-icon
        icon="random"
        class="icon"
        title="Shuffle"
        @click="shuffle"
      ></font-awesome-icon>
    </header>
    <div v-if="deck">
      <Card :card="deck.cards[index]"></Card>
      <nav class="nav">
        <font-awesome-icon
          class="nav-button"
          icon="arrow-left"
          title="Previous"
          @click="prevCard"
        ></font-awesome-icon>
        <font-awesome-icon
          class="nav-button"
          icon="arrow-right"
          title="Next"
          @click="nextCard"
        ></font-awesome-icon>
      </nav>
    </div>
    <div v-else>
      Loading…
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  data: () => ({
    index: 0,
  }),
  computed: {
    deck() {
      return this.$store.getters.getDeckById(this.$route.params.id);
    },
  },
  methods: {
    nextCard() {
      this.index = do {
        if (this.index === this.deck.cards.length - 1) {
          0;
        } else {
          this.index + 1;
        }
      };
    },
    prevCard() {
      this.index = do {
        if (this.index === 0) {
          this.deck.cards.length - 1;
        } else {
          this.index - 1;
        }
      };
    },
    shuffle() {
      this.index = Math.floor(Math.random() * this.deck.cards.length);
    },
  },
  components: {
    Card,
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center
  max-width 80%
  max-height 80%
  margin auto

.nav
  padding 16px
  display flex
  justify-content space-evenly

.header
  display flex
  justify-content space-evenly
  align-items center

.icon
  margin-left 16px
  padding 8px
  &:hover
    cursor pointer

.nav-button
  padding 16px
  border-radius 50%
  border 1px solid #b0b0b0
  &:hover
    cursor pointer
</style>
