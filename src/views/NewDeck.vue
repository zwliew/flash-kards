<template>
  <div :class="$style.newDeck">
    <h1 :class="$style.newDeck__title">New deck</h1>
    <MyInput
      v-model="title"
      type="text"
      name="title"
      placeholder="Title"
      required
      :disabled="!isAuthorized"
      :class="$style.newDeck__input"
    />
    <MyInput
      v-model="tagline"
      type="text"
      name="tagline"
      placeholder="Tagline (i.e. x, y, z)"
      required
      :disabled="!isAuthorized"
      :class="$style.newDeck__input"
    />
    <Button @click="saveNewDeck">Save</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyInput from '@/components/MyInput.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    MyInput,
    Button,
  },
})
export default class NewDeck extends Vue {
  private title = '';
  private tagline = '';

  get isAuthorized() {
    return this.$store.state.user !== null && this.$store.state.user.isAdmin;
  }

  private async saveNewDeck() {
    if (!this.isAuthorized) {
      alert('You are not authorized to add a new card to this deck.');
      return;
    }

    const title = this.title.trim();
    const tagline = this.tagline.trim();
    if (title.length === 0 || tagline.length === 0) {
      alert('Please fill in both the title and tagline.');
    } else {
      const deckId = await this.$store.dispatch('ADD_DECK', {
        title,
        tags: tagline.split(',').map((tag) => tag.trim()),
      });
      this.$router.push({
        name: 'manageDeck',
        params: {
          deckId,
        },
      });
    }
  }
}
</script>

<style lang="scss" module>
.newDeck {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 16px;
  }

  &__input {
    margin: 8px 0;
  }
}
</style>