<template>
  <div :class="$style.newCard">
    <div v-if="deckTitle">
      <h1 :class="$style.newCard__title">New card for {{ deckTitle }}</h1>
      <div>
        <MyInput
          v-model="front"
          type="text"
          name="front"
          :class="$style.newCard__input"
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
          :class="$style.newCard__input"
          placeholder="Back"
          :disabled="!isAuthorized"
          rows="8"
          required
        />
      </div>
      <Button :disabled="!isAuthorized" @click="saveNewCard">Save</Button>
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
  private front = '';
  private back = '';

  get isAuthorized() {
    return this.$store.state.user !== null && this.$store.state.user.isAdmin;
  }

  get deckId() {
    return this.$route.params.deckId;
  }

  get deckTitle() {
    return this.$store.getters.getDeckTitleById(this.deckId);
  }

  private async saveNewCard() {
    if (!this.isAuthorized) {
      alert('You are not authorized to add a new card to this deck.');
      return;
    }

    const front = this.front.trim();
    const back = this.back.trim();
    if (front.length === 0 || back.length === 0) {
      alert('Please fill in both the front and back text.');
    } else {
      await this.$store.dispatch('ADD_CARD', {
        deckId: this.deckId,
        front,
        back,
      });
      this.$router.push({
        name: 'manageDeck',
        params: {
          deckId: this.deckId,
        },
      });
    }
  }
}
</script>

<style lang="scss" module>
.newCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__title {
    margin: 16px 0;
  }

  &__input {
    background: none;
    border: 0;
    border-bottom: 2px solid #b0b0b0;
    font-size: 1.25rem;
    margin-bottom: 8px;
    width: 100%;
  }
}
</style>
