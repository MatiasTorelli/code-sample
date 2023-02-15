<template>
  <section class="section">
    <div class="message">
      <span class="message__title">{{ $t('home.sectionWelcome.title') }}</span>
      <span class="message__subtitle">{{ $t('home.sectionWelcome.subTitle') }}</span>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.section {
  width: 100%;
  height: calc(100vh - 80px);
  background: url('@/assets/images/meeting-room.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .message {
    color: $color-white;
    text-transform: uppercase;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    &__title {
      font-family: 'Fira Code';
      font-size: 9.7rem;
      line-height: 100px;
      font-weight: 600;
      letter-spacing: 0;
      margin-bottom: 20px;

      @add-mixin resolution-mobile {
        font-size: 3rem;
        line-height: 40px;
      }
    }

    &__subtitle {
      @extend #typography-headline-6;
    }
  }
}
</style>
