<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  background: none;
  border: 0;
  border-bottom: 2px solid #b0b0b0;
  font-size: 1.25rem;
}
</style>
