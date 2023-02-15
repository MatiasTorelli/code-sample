<template>
  <section class="section">
    <div class="section__left">
      <span class="title">{{ $t('home.sectionProcess.title') }}</span>
      <div class="stepList">
        <div v-for="(step, index) in steps" :key="index">
          <SectionProcessStep :step="step" />
        </div>
      </div>
    </div>
    <div class="section__right">
      <img class="image" src="@/assets/images/board.jpg" alt="Board">
    </div>

  </section>
</template>

<script setup>
import { readonly } from 'vue'
import SectionProcessStep from '@/components/home/SectionProcessStep.vue'
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const steps = readonly(messages.value[locale.value].home.sectionProcess.steps)
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/responsive.css';

.section {
  padding: 80px 0;
  display: flex;
  flex-flow: row nowrap;

  &__left {
    .title {
      @extend #typography-headline-2;
      margin-left: 80px;

      @add-mixin resolution-mobile {
        @extend #typography-headline-4;
        margin-left: 40px;
      }
    }
  
    .stepList {
      margin-top: 60px;
      margin-left: 80px;

      @add-mixin resolution-mobile {
        margin-left: 24px;
      }
    }
  }

  &__right {
    @add-mixin resolution-mobile {
      display: none;
    }

    .image {
      width: 600px;
      height: 700px;
      margin-left: 96px;
      border-radius: 15px;
      box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
