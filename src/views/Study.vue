<template>
  <div class="container">
    <header class="header">
      <h1>Study</h1>
    </header>
    <div v-if="deck">
      <Card :card="deck.cards[index]" />
      <div class="actions">
        <font-awesome-icon
          class="action"
          icon="arrow-left"
          title="Previous"
          @click="prevCard" />
        <font-awesome-icon
          class="action"
          icon="random"
          title="Shuffle"
          @click="shuffle" />
        <font-awesome-icon
          class="action"
          icon="arrow-right"
          title="Next"
          @click="nextCard" />
      </div>
    </div>
    <div v-else>
      Loading…
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
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

.header
  display flex
  justify-content space-evenly
  align-items center

.actions
  display flex
  justify-content center

  .action
    padding 16px
    margin 16px 8px
    border-radius 50%
    border 1px solid #b0b0b0
    transition: background 0.2s
    &:hover
      cursor pointer
      background: #eee
</style>
