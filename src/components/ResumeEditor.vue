<template>
  <div
    ref="container"
    class="resumeEditor"
    :class="{ htmlMode: enableHtml }"
  >
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{ result }}</pre>
  </div>
</template>

<script setup>
import { computed, useTemplateRef } from 'vue'
import { marked } from 'marked'

marked.use({
  hooks: {
    preprocess(markdown) {
      return markdown.replace(/^  ([*+-] )/gm, '    $1')
    },
  },
})

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
  enableHtml: {
    type: Boolean,
    default: false,
  },
})

const container = useTemplateRef('container')

const result = computed(() =>
  props.enableHtml ? marked.parse(props.markdown) : props.markdown
)

function goBottom() {
  if (container.value) {
    container.value.scrollTop = 100000
  }
}

function goTop() {
  if (container.value) {
    container.value.scrollTop = 0
  }
}

defineExpose({ goBottom, goTop })
</script>

<style scoped>
.htmlMode {
  animation: flip 2s;
}

@keyframes flip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style>
.resumeEditor ul,
.resumeEditor ol {
  list-style: none;
}

.resumeEditor ul > li::before {
  content: '•';
  margin-right: 0.5em;
}

.resumeEditor li > ul,
.resumeEditor li > ol {
  padding-left: 1.5em;
  margin-top: 0.25em;
}

.resumeEditor ul ul > li::before {
  content: '◦';
}

.resumeEditor ol ol > li::before {
  counter-increment: section;
  content: counters(section, '.') ' ';
}
</style>
