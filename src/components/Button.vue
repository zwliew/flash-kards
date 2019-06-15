<template>
  <button :class="$style.button" :disabled="disabled" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false }) public readonly disabled!: boolean;
}
</script>

<style lang="scss" module>
.button {
  $unfocused-color: white;
  $focused-color: #eee;

  border: none;
  border-radius: 4px;
  padding: 0 16px 0 16px;
  height: 36px;
  color: $secondary-color;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.2s ease-out;
  background-color: $unfocused-color;

  &:hover {
    cursor: pointer;
    background-color: $focused-color;
  }

  &:focus {
    background-color: $focused-color;
  }

  &[disabled] {
    cursor: inherit;
    background-color: $unfocused-color;
    color: grey;
  }
}
</style>
