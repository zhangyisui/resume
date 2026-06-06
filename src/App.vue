<template>
  <ResumePage :full-style="desktopFullStyle" />
</template>

<script setup>
import ResumePage from './components/ResumePage.vue'
import { desktopFullStyle } from './data/resumeContent.js'
</script>
