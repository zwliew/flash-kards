<template>
  <div :class="$style.studyDeck">
    <header :class="$style.studyDeck__header" v-if="deckTitle">
      <h1 :class="$style.studyDeck__title">Studying {{ deckTitle }}</h1>
    </header>
    <div v-if="cards">
      <Card :card="cards[indices[curIndex]]"/>
      <div :class="$style.studyDeck__actions">
        <button :class="$style.studyDeck__action" @click="prev" title="Previous">
          <i class="material-icons">arrow_back</i>
        </button>
        <button :class="$style.studyDeck__action" @click="shuffle" title="Shuffle">
          <i class="material-icons">shuffle</i>
        </button>
        <button :class="$style.studyDeck__action" @click="next" title="Next">
          <i class="material-icons">arrow_forward</i>
        </button>
        <button :class="$style.studyDeck__action" @click="editCurCard" title="Edit">
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
    return this.deck !== undefined ? this.deck.cards : null;
  }

  get deckTitle() {
    return this.deck !== undefined ? this.deck.title : null;
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

<style lang="scss" module>
.studyDeck {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 16px;

  &__header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  &__title {
    margin: 16px 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  &__action {
    $focused-color: #eee;

    background: none;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #b0b0b0;
    height: 42px;
    margin: 0 4px;
    padding: 8px;
    transition: background-color 0.2s ease-out;

    &:hover {
      cursor: pointer;
      background-color: $focused-color;
    }

    &:focus {
      background-color: $focused-color;
    }
  }
}
</style>
