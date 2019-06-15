<template>
  <input
    :class="$style.input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyInput extends Vue {
  @Prop({ type: String, default: '' }) public readonly type!: string;
  @Prop({ type: String, default: '' }) public readonly name!: string;
  @Prop({ type: String, default: '' }) public readonly placeholder!: string;
  @Prop({ type: String, default: '' }) public readonly value!: string;
  @Prop({ type: Boolean, default: false }) public readonly required!: boolean;
  @Prop({ type: Boolean, default: false }) public readonly disabled!: boolean;
}
</script>

<style lang="scss" module>
.input {
  background: none;
  border: 0;
  border-bottom: 2px solid #b0b0b0;
  font-size: 1.25rem;
}
</style>
