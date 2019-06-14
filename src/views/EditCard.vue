<template>
  <div class="edit-card">
    <div v-if="deckTitle">
      <h1 class="edit-card__title">Editing a card in {{ deckTitle }}</h1>
      <div>
        <MyInput
          v-model="front"
          type="text"
          name="front"
          class="edit-card__input"
          placeholder="Front"
          required
          :disabled="!isAuthorized"
        />
      </div>
      <div>
        <textarea
          v-model="back"
          type="text"
          name="back"
          class="edit-card__input"
          placeholder="Back"
          :disabled="!isAuthorized"
          rows="8"
          required
        />
      </div>
      <Button :disabled="!isAuthorized" @click="saveCard">Save</Button>
    </div>
    <div v-else>Loading…</div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Button from '@/components/Button.vue';
import MyInput from '@/components/MyInput.vue';
import { Card as CardType } from '@/store';

@Component({
  components: {
    Button,
    MyInput,
  },
})
export default class NewCard extends Vue {
  private front!: string;
  private back!: string;

  private created() {
    const card = this.$store.getters.getDeckById(this.deckId).cards[
      this.cardIdx
    ];
    this.front = card.front;
    this.back = card.back;
  }

  get isAuthorized() {
    return this.$store.state.user !== null && this.$store.state.user.isAdmin;
  }

  get deckId() {
    return this.$route.params.deckId;
  }

  get cardIdx() {
    return this.$route.params.cardIdx;
  }

  get deckTitle() {
    return this.$store.getters.getDeckTitleById(this.deckId);
  }

  get cardAdded() {
    const deck = this.$store.getters.getDeckById(this.deckId);
    if (!deck) {
      return false;
    }
    return deck.cards.find(
      (card: CardType) => this.front === card.front && this.back === card.back,
    );
  }

  @Watch('cardAdded')
  private onCardAdded(now: CardType, old: CardType) {
    if (now !== old && now) {
      this.$router.push({
        name: 'manageDeck',
        params: {
          deckId: this.deckId,
        },
      });
    }
  }

  private saveCard() {
    if (!this.isAuthorized) {
      alert('You are not authorized to add a new card to this deck.');
      return;
    }

    if (this.front.length === 0 || this.back.length === 0) {
      alert('Please fill in both the front and back text.');
    } else {
      this.$store.dispatch('UPDATE_CARD', {
        deckId: this.deckId,
        cardIdx: this.cardIdx,
        front: this.front,
        back: this.back,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.edit-card__title {
  margin: 16px 0;
}

.edit-card__input {
  background: none;
  border: 0;
  border-bottom: 2px solid #b0b0b0;
  font-size: 1.25rem;
  margin-bottom: 8px;
  width: 100%;
}
</style>
