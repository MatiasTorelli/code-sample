<template>
  <div
    class="button"
    @click="onClick()"
  >
    <slot />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  to: {
    type: String,
    required: false
  },
})

const onClick = () => {
  if (props.to) {
    router.push({ name: props.to})
  }
}
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';

.button {
  @extend #typography-button;
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  padding: 20px 32px;
  border-radius: 4px;
  color: $color-white;
  background-color: $color-dark-purple;
}
</style>
