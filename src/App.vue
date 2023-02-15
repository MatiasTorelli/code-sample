<template>
  <NavigationMenu/>
  <RouterView />
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationMenu from '@/components/shared/NavigationMenu.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
</script>
