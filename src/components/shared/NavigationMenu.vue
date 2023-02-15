<template>
  <header class="header">
    <LogoCombinedLight class="logo-big" />
    <LogoDegradeVariant class="logo-small" />
    <nav class="nav">
      <RouterLink
        :to="{ name: 'home' }"
        class="nav__item"
      >
        {{ $t('base.routes.home') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'aboutUs' }"
        class="nav__item"
      >
        {{ $t('base.routes.aboutUs') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'contact' }"
        class="nav__item"
      >
        {{ $t('base.routes.contact') }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LogoCombinedLight from '@/assets/svg/LogoCombinedLight.vue'
import LogoDegradeVariant from '@/assets/svg/LogoDegradeVariant.vue'
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.header {
  height: 80px;
  padding: 0 80px;
  background-color: $color-white;
  position: sticky;
  top: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 25% 50% 25%;

  @add-mixin resolution-mobile {
    padding: 0 20px;
    display: flex;
    flex-flow: row nowrap;
  }

  .logo-big {
    @add-mixin resolution-mobile {
      display: none;
    }
  }

  .logo-small {
    height: 80px;
    display: none;
    
    @add-mixin resolution-mobile {
      display: block;
    }
  }

  .nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &__item {
      @extend #typography-subtitle-1;
      margin-right: 40px;
      cursor: pointer;
      text-decoration: none;
      color: $color-black;
      white-space: nowrap;

      @add-mixin resolution-mobile {
        margin-right: 28px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
