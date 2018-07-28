<template>
  <div class="container">
    <h1>{{ visibleText }}</h1>
    <Button
      @click="flipped = !flipped">Flip</Button>
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
      default: null
    }
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

<style lang="stylus" scoped>
.container
  margin auto
  min-width 240px
  min-height 120px
  border 1px solid #b0b0b0
  border-radius 4px
  text-align center
  padding 16px
</style>
