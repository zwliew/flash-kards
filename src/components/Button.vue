<template>
  <button class="button" :disabled="disabled" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({type: Boolean, default: false}) public readonly disabled!: boolean;
}
</script>

<style lang="scss" scoped>
.button {
  $focused-color: #eee;

  border: none;
  border-radius: 4px;
  padding: 0 16px 0 16px;
  height: 36px;
  color: $secondary-color;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.2s ease-out;
  background: white;

  &:hover {
    cursor: pointer;
    background: $focused-color;
  }

  &:focus {
    background: $focused-color;
  }
}
</style>
