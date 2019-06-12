<template>
  <div class="container">
    <header class="header">
      <h1>Study</h1>
    </header>
    <div v-if="deck">
      <Card :card="deck.cards[index]" />
      <div class="actions">
        <i
          class="material-icons action"
          title="Previous"
          @click="prev"
        >arrow_back</i>
        <i
          class="material-icons action"
          title="Shuffle"
          @click="shuffle"
        >shuffle</i>
        <i
          class="material-icons action"
          title="Next"
          @click="next"
        >arrow_forward</i>
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
    nextIndex() {
      return (this.index + 1) % this.deck.cards.length;
    },
    prevIndex() {
      return (this.index - 1 + this.deck.cards.length) % this.deck.cards.length;
    },
  },
  mounted() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
        case 's':
          this.shuffle();
          break;
      }
    });
  },
  methods: {
    shuffle() {
      this.index = Math.floor(Math.random() * this.deck.cards.length);
    },
    next() {
      this.index = this.nextIndex;
    },
    prev() {
      this.index = this.prevIndex;
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
