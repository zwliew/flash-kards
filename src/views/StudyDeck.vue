<template>
  <div class="study-deck">
    <header class="study-deck__header">
      <h1 class="study-deck__title">Studying {{ deckTitle }}</h1>
    </header>
    <div v-if="cards">
      <Card :card="cards[indices[curIndex]]"/>
      <div class="study-deck__actions">
        <button class="study-deck__action" @click="prev" title="Previous">
          <i class="material-icons">arrow_back</i>
        </button>
        <button class="study-deck__action" @click="shuffle" title="Shuffle">
          <i class="material-icons">shuffle</i>
        </button>
        <button class="study-deck__action" @click="next" title="Next">
          <i class="material-icons">arrow_forward</i>
        </button>
        <button class="study-deck__action" @click="editCurCard" title="Edit">
          <i class="material-icons">edit</i>
        </button>
      </div>
    </div>
    <div v-else>Loading…</div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { Card as CardType } from '@/store';

@Component({
  components: { Card },
})
export default class StudyDeck extends Vue {
  private curIndex = 0;
  private indices: number[] = [];

  private created() {
    this.onCardsChanged(this.deck.cards);
  }

  get deckId() {
    return this.$route.params.deckId;
  }

  get deck() {
    return this.$store.getters.getDeckById(this.deckId);
  }

  get cards() {
    return this.deck.cards;
  }

  get deckTitle() {
    return this.deck.title;
  }

  @Watch('cards')
  private onCardsChanged(newCards: CardType[]) {
    this.indices = newCards.map((_, idx) =>
      idx < this.indices.length ? this.indices[idx] : idx,
    );
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
    const newIndices = [...this.indices];
    for (let i = 0; i < newIndices.length; i++) {
      const j = Math.floor(Math.random() * (newIndices.length - i)) + i;
      const tmp = newIndices[j];
      newIndices[j] = newIndices[i];
      newIndices[i] = tmp;
    }
    this.indices = newIndices;
  }

  private next() {
    this.curIndex = (this.curIndex + 1) % this.indices.length;
  }

  private prev() {
    this.curIndex =
      (this.curIndex - 1 + this.indices.length) % this.indices.length;
  }

  private editCurCard() {
    this.$router.push({
      name: 'editCard',
      params: {
        deckId: this.deckId,
        cardIdx: this.indices[this.curIndex].toString(),
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.study-deck {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 16px;
}

.study-deck__header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.study-deck__title {
  margin: 16px 0;
}

.study-deck__actions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.study-deck__action {
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
