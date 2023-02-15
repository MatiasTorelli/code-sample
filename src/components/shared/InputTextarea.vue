<template>
  <div class="input">
    <span class="input__label">{{ label }}</span>
    <textarea
      class="input__textarea"
      v-model="value"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  }
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';

.input {
  display: flex;
  flex-flow: column nowrap;

  &__label {
    @extend #typography-body-1;
    margin-bottom: 8px;
  }

  &__textarea {
    @extend #typography-body-1;
    height: 240px;
    border-radius: 2px;
    border: none;
    background-color: $color-light-gray;
    padding: 20px 0 0 24px;
    resize: vertical;

    &:focus {
      outline: none;
      border: 1px solid $color-black;
    }
  }
}
</style>
