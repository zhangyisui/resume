<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle" />
    <ResumeEditor
      ref="resumeEditor"
      :markdown="currentMarkdown"
      :enable-html="enableHtml"
    />
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue'
import StyleEditor from './StyleEditor.vue'
import ResumeEditor from './ResumeEditor.vue'
import { useResumeAnimation } from '../composables/useResumeAnimation.js'
import { fullMarkdown } from '../data/resumeContent.js'
import '../assets/reset.css'

const props = defineProps({
  fullStyle: {
    type: Array,
    required: true,
  },
  scrollToTopOnHtml: {
    type: Boolean,
    default: false,
  },
})

const styleEditor = useTemplateRef('styleEditor')
const resumeEditor = useTemplateRef('resumeEditor')

const { currentStyle, currentMarkdown, enableHtml } = useResumeAnimation(
  props.fullStyle,
  fullMarkdown,
  () => ({
    styleEditor: styleEditor.value,
    resumeEditor: resumeEditor.value,
  }),
  { scrollToTopOnHtml: props.scrollToTopOnHtml }
)
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:global(html) {
  min-height: 100vh;
}
</style>
