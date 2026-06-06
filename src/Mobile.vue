<template>
  <ResumePage :full-style="mobileFullStyle" scroll-to-top-on-html />
</template>

<script setup>
import ResumePage from './components/ResumePage.vue'
import { mobileFullStyle } from './data/resumeContent.js'
</script>

<style scoped>
:deep(#app) {
  min-height: 100vh;
  position: relative;
}
</style>
