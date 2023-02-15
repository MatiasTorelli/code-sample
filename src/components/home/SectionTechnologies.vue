<template>
  <section class="section">
    <span class="title">{{ $t('home.sectionTechnologies.title') }}</span>
    <span class="subtitle">{{ $t('home.sectionTechnologies.subtitle') }}</span>
    <div class="technologies">
      <div
        class="technologies__item"
        v-for="(technology, index) in technologiesList"
        :key="index"
      >
        <Component :is="getIcon(technology.icon)" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { readonly } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIcon } from '@/utils/composables/icon.js'

const { locale, messages } = useI18n()
const { getIcon } = useIcon()

const technologiesList = readonly(messages.value[locale.value].home.sectionTechnologies.technologies)
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.section {
  padding: 100px 0 200px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @add-mixin resolution-mobile {
    padding: 100px 40px 100px 40px;
  }

  .title {
    @extend #typography-headline-4;
    margin-bottom: 40px;

    @add-mixin resolution-mobile {
      text-align: center;
      @extend #typography-headline-5;
    }
  }

  .subtitle {
    @extend #typography-headline-6;
    text-align: center;
    max-width: 1152px;
    margin-bottom: 80px;
  }

  .technologies {
    max-width: 900px;
    width: 900;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    @add-mixin resolution-mobile {
      justify-content: space-around;
    }

    &__item {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      margin-right: 100px;
      background-color: $color-gray;
      display: flex;
      justify-content: center;
      align-items: center;

      @add-mixin resolution-mobile {
        width: 54px;
        height: 54px;
        margin-right: 0;
        padding: 12px;
        justify-content: space-around;
      }

      &:nth-child(5) {
        margin-right: 0;
        margin-bottom: 80px;

        @add-mixin resolution-mobile {
          margin-bottom: 24px;
        }
      }

      &:nth-child(6) {
        margin-left: 100px;

        @add-mixin resolution-mobile {
          margin: 0;
        }
      }
    }
  }
}
</style>
