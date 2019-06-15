<template>
  <div :class="$style.manageDeck" v-if="deck !== undefined">
    <h1 :class="$style.manageDeck__title">{{ deck.title }}</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <strong>Tags</strong>
          </td>
          <td>{{ tagline }}</td>
        </tr>
        <tr>
          <td>
            <strong>Number of cards</strong>
          </td>
          <td>{{ lengthText }}</td>
        </tr>
      </tbody>
    </table>
    <div :class="$style.manageDeck__actions">
      <Button @click="study">Study</Button>
      <Button v-if="isAuthorized" @click="addNewCard">Add card</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class ManageDeck extends Vue {
  get isAuthorized() {
    return this.$store.state.user !== null && this.$store.state.user.isAdmin;
  }

  get deckId() {
    return this.$route.params.deckId;
  }
  get deck() {
    return this.$store.getters.getDeckById(this.deckId);
  }

  get tagline() {
    if (this.deck === undefined) {
      return '';
    }
    return this.deck.tags.reduce(
      (acc: string, cur: string) => acc + `, ${cur}`,
    );
  }

  get lengthText() {
    if (this.deck === undefined) {
      return '';
    }
    return `${this.deck.cards.length} card${
      this.deck.cards.length !== 1 ? 's' : ''
    }`;
  }

  private study() {
    this.$router.push({
      name: 'studyDeck',
      params: {
        deckId: this.deckId,
      },
    });
  }

  private addNewCard() {
    this.$router.push({
      name: 'newCard',
      params: {
        deckId: this.deckId,
      },
    });
  }
}
</script>

<style lang="scss" module>
.manageDeck {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin: 16px 0;
  }

  &__actions {
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
  }
}
</style>
