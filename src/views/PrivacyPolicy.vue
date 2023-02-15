<template>
  <main>
    <section class="section">
      <p
        class="terms"
        v-html="$t('legal.privacyPolicy')"
      />
    </section>
  </main>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';

.section {
  padding: 100px 200px 100px 200px;
}
</style>