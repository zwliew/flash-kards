<template>
  <div>
    <button
      class="button"
      @click="$emit('click')"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    'disabled',
  ],
};
</script>

<style lang="stylus" scoped>
.button
  border none
  border-radius 4px
  padding 0 16px 0 16px
  height 36px
  color secondary-color
  text-transform uppercase
  font-weight bold
  transition background 0.3s
  background white
  &:hover
    cursor pointer
    background #eee
</style>
