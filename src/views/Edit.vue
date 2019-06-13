<template>
  <div class="edit">
    <div v-if="title">
      <h1 class="edit__title">New card for {{ title }}</h1>
      <div>
        <MyInput
          v-model="front"
          type="text"
          name="front"
          class="edit__input"
          placeholder="Front"
          required
          :disabled="!isAdmin"
        />
      </div>
      <div>
        <textarea
          v-model="back"
          type="text"
          name="back"
          class="edit__input"
          placeholder="Back"
          :disabled="!isAdmin"
          rows="8"
          required
        />
      </div>
      <Button :disabled="!isAdmin" @click="submit">Submit</Button>
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
  computed: {
    ...mapGetters(['isAdmin']),
  },
})
export default class Edit extends Vue {
  private front = '';
  private back = '';

  get deckId() {
    return this.$route.params.id;
  }

  get title() {
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
      this.$router.push(`/manage/${this.deckId}`);
    }
  }

  private submit() {
    if (this.front.length === 0 || this.back.length === 0) {
      alert('Please fill in both the front and back text.');
    } else {
      this.$store.dispatch('ADD_CARD', {
        deckId: this.deckId,
        front: this.front,
        back: this.back,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.edit__title {
  margin: 16px 0;
}

.edit__input {
  background: none;
  border: 0;
  border-bottom: 2px solid #b0b0b0;
  font-size: 1.25rem;
  margin-bottom: 8px;
  width: 100%;
}
</style>
