<template>
  <div class="manage">
    <h1 class="manage__title">Manage</h1>
    <div v-if="deck !== undefined">
      <div>
        <p>
          <strong>Title</strong>
          : {{ deck.title }}
        </p>
        <p>
          <strong>Tags</strong>
          : {{ tagline }}
        </p>
        <p>
          <strong>Number of cards</strong>
          : {{ lengthText }}
        </p>
      </div>
      <div class="manage__actions">
        <Button @click="study">Study</Button>
        <Button v-if="isAuthorized" @click="edit">Edit</Button>
      </div>
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
export default class Manage extends Vue {
  get isAuthorized() {
    return this.$store.state.user !== null && this.$store.state.user.isAdmin;
  }

  get deck() {
    return this.$store.getters.getDeckById(this.id);
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

  get id() {
    return this.$route.params.id;
  }

  private study() {
    this.$router.push(`/study/${this.id}`);
  }

  private edit() {
    this.$router.push(`/edit/${this.id}`);
  }
}
</script>

<style lang="scss" scoped>
.manage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manage__title {
  margin: 16px 0;
}

.manage__actions {
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
}
</style>
