<template>
  <div>
    <button
      class="button"
      :disabled="disabled"
      @click="$emit('click')">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
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
  transition background 0.2s
  background white
  &:hover
    cursor pointer
    background #eee
</style>
