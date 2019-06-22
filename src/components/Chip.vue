<template>
  <div :class="$style.chip">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Chip extends Vue {}
</script>

<style lang="scss" module>
.chip {
  background-color: #e0e0e0;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.87);
  display: inline-block;
  font-size: 0.875rem;
  padding: 6px 10px;
}
</style>