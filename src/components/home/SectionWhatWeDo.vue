<template>
  <section class="section">
    <img
      class="image"
      src="@/assets/images/laptop.jpg"
      alt="Laptop"
    >
    <div class="info">
      <span class="info__title">{{ $t('home.sectionWhatWeDo.title') }}</span>
      <span class="info__subtitle">{{ $t('home.sectionWhatWeDo.subtitle') }}</span>
      <p class="info__description">{{ $t('home.sectionWhatWeDo.description') }}</p>
      <BaseButton to="contact">{{ $t('base.contactUs') }}</BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/shared/BaseButton.vue'
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/responsive.css';

.section {
  padding: 100px 0 200px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @add-mixin resolution-mobile {
    padding: 100px 40px 100px 40px;
  }

  .image {
    width: 800px;
    border-radius: 10px;
    margin-right: 160px;
    box-shadow: 0px 10px 13px 0px #00000033;
    box-shadow: 0px 21px 33px 0px #00000024;
    box-shadow: 0px 8px 40px 0px #0000001F;

    @add-mixin resolution-mobile {
      display: none;
    }
  }

  .info {
    max-width: 740px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    &__title {
      @extend #typography-headline-2;
      white-space: pre-line;
      margin-bottom: 28px;
    }

    &__subtitle {
      @extend #typography-headline-5;
      margin-bottom: 20px;
    }

    &__description {
      @extend #typography-subtitle-1;
      margin-bottom: 40px;
    }
  }
}
</style>
