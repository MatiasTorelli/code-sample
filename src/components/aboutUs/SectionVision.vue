<template>
  <section class="section">
    <div class="info">
      <span class="info__title">{{ $t('aboutUs.sectionVision.title') }}</span>
      <p class="info__paragraph">{{ $t('aboutUs.sectionVision.description.paragraphOne') }}</p>
      <p class="info__paragraph">{{ $t('aboutUs.sectionVision.description.paragraphTwo') }}</p>
      <p class="info__paragraph">{{ $t('aboutUs.sectionVision.description.paragraphThree') }}</p>
      <BaseButton to="contact">{{ $t('base.contactUs') }}</BaseButton>
    </div>

    <img
      class="image"
      src="@/assets/images/office-conversation.jpg"
      alt="Office conversation"
    >
  </section>
</template>

<script setup>
import BaseButton from '@/components/shared/BaseButton.vue'

</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/responsive.css';

.section {
  padding: 100px 100px 200px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @add-mixin resolution-mobile {
    padding: 0 40px 200px 40px;
    grid-template-columns: 1fr;
  }

  .info {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    @add-mixin resolution-mobile {
      align-items: center;
    }

    &__title {
      @extend #typography-headline-2;
      display: block;
      margin: 80px 0 76px 0;

      @add-mixin resolution-mobile {
        @extend #typography-headline-4;
        margin-bottom: 28px;
      }
    }

    &__paragraph {
      @extend #typography-body-1;
      margin-bottom: 40px;
      max-width: 620px;
      
      @add-mixin resolution-mobile {
        text-align: center;
      }
    }
  }

  .image {
    width: 1000px;
    border-radius: 40px;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2);

    @add-mixin resolution-mobile {
      display: none;
    }
  }

}
</style>