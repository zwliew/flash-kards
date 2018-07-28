<template>
  <div class="container">
    <h1>Manage</h1>
    <div v-if="deck !== undefined">
      <div>
        <p><strong>Title</strong>: {{ deck.title }}</p>
        <p><strong>Tags</strong>: {{ tagline }}</p>
        <p><strong>Number of cards</strong>: {{ lengthText }}</p>
      </div>
      <div class="action-container">
        <Button @click="study">Study</Button>
        <Button
          v-if="$store.getters.isAdmin"
          @click="edit">Edit</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  components: {
    Button
  },
  computed: {
    deck() {
      return this.$store.getters.getDeckById(this.id);
    },
    tagline() {
      if (this.deck === undefined) return '';
      return this.deck.tags.reduce((acc, cur) => acc + `, ${cur}`);
    },
    lengthText() {
      if (this.deck === undefined) return '';
      return `${this.deck.cards.length} card${this.deck.cards.length !== 1 ? 's' : ''}`;
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    study() {
      this.$router.push(`/study/${this.id}`);
    },
    edit() {
      this.$router.push(`/edit/${this.id}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center

.action-container
  display flex
  justify-content space-evenly
</style>
