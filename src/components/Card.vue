<template>
  <div class="card">
    <h1 v-if="!flipped">{{ visibleText }}</h1>
    <p v-if="flipped">{{ visibleText }}</p>
    <Button class="card__action" @click="flipped = !flipped">Flip</Button>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    flipped: false,
  }),
  computed: {
    visibleText() {
      return this.flipped ? this.card.back : this.card.front;
    },
  },
  watch: {
    card() {
      this.flipped = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px 8px 8px 8px;
}

.card__action {
  margin-top: 8px;
}
</style>
