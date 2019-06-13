<template>
  <div class="study">
    <header class="study__header">
      <h1 class="study__title">Study</h1>
    </header>
    <div v-if="deck">
      <Card :card="deck.cards[index]"/>
      <div class="study__actions">
        <button class="study__action" @click="prev">
          <i class="material-icons" title="Previous">arrow_back</i>
        </button>
        <button class="study__action" @click="shuffle">
          <i class="material-icons" title="Shuffle">shuffle</i>
        </button>
        <button class="study__action" @click="next">
          <i class="material-icons" title="Next">arrow_forward</i>
        </button>
      </div>
    </div>
    <div v-else>Loading…</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: { Card },
})
export default class Study extends Vue {
  private index = 0;

  get deck() {
    return this.$store.getters.getDeckById(this.$route.params.id);
  }

  get nextIndex() {
    return (this.index + 1) % this.deck.cards.length;
  }

  get prevIndex() {
    return (this.index - 1 + this.deck.cards.length) % this.deck.cards.length;
  }

  private mounted() {
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
  }

  private shuffle() {
    this.index = Math.floor(Math.random() * this.deck.cards.length);
  }

  private next() {
    this.index = this.nextIndex;
  }

  private prev() {
    this.index = this.prevIndex;
  }
}
</script>

<style lang="scss" scoped>
.study {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 16px;
}

.study__header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.study__title {
  margin: 16px 0;
}

.study__actions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.study__action {
  $focused-color: #eee;

  background: none;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
  height: 42px;
  margin: 0 4px;
  padding: 8px;
  transition: background 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: $focused-color;
  }

  &:focus {
    background: $focused-color;
  }
}
</style>
