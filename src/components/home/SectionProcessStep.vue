<template>
  <div class="step">
    <div class="bulletWrapper">
      <div class="bulletWrapper__line" />
      <div class="bulletWrapper__bullet" />
    </div>

    <div class="icon">
      <component :is="getIcon(step.icon)" />
    </div>

    <div class="info">
      <span class="info__name">{{ step.name}}</span>
      <p class="info__description">{{ step.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useIcon } from '@/utils/composables/icon.js'

defineProps({
  step: {
    type: Object,
    required: true
  }
})

const { getIcon } = useIcon()
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.step {
  height: 120px;
  max-width: 960px;
  display: flex;
  flex-flow: row nowrap;

  .bulletWrapper {
    margin-right: 56px;

    @add-mixin resolution-mobile {
      margin-right: 20px;
    }

    &__line {
      width: 4px;
      height: 100%;
      margin-left: 2px;
      background-color: $color-light-gray;
    }
    
    &__bullet {
      width: 8px;
      height: 40px;
      background-color: $color-light-red;
      border-radius: 10px;
      position: absolute;
      top: 40px;
      left: 0;

      @add-mixin resolution-mobile {
        height: 24px;
        top: 48px;
      }
    }
  }

  .icon {
    margin-top: 20px;
    margin-right: 28px;
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    background-color: $color-dark-purple;


    @add-mixin resolution-mobile {
      width: 48px;
      height: 48px;
      margin-top: 36px;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .info {
    &__name {
      @extend #typography-headline-6;
      display: block;
      margin-top: 32px;

      @add-mixin resolution-mobile {
        margin-top: 12px;
      }
    }
    
    &__description {
      @extend #typography-body-1;
      margin-top: 8px;

      @add-mixin resolution-mobile {
        margin-top: 0;
        font-size: 14px;
      }
    }
  }
}
</style>
