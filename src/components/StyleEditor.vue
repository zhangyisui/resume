<template>
  <div ref="container" class="styleEditor">
    <div class="code" v-html="codeInStyleTag"></div>
    <pre v-html="highlightedCode"></pre>
  </div>
</template>

<script setup>
import { computed, useTemplateRef } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-css'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
})

const container = useTemplateRef('container')

const highlightedCode = computed(() =>
  Prism.highlight(props.code, Prism.languages.css, 'css')
)

const codeInStyleTag = computed(() => `<style>${props.code}</style>`)

function goBottom() {
  if (container.value) {
    container.value.scrollTop = 100000
  }
}

defineExpose({ goBottom })
</script>

<style scoped>
.code {
  display: none;
}
</style>
