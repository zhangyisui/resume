import { ref, onMounted, nextTick } from 'vue'

export function useResumeAnimation(fullStyle, fullMarkdown, getRefs, options = {}) {
  const interval = options.interval ?? 40
  const scrollResumeOnNewline = options.scrollResumeOnNewline ?? true

  const currentStyle = ref('')
  const currentMarkdown = ref('')
  const enableHtml = ref(false)

  function showHtml() {
    return new Promise((resolve) => {
      enableHtml.value = true
      if (options.scrollToTopOnHtml) {
        nextTick(() => getRefs().resumeEditor?.goTop())
      }
      resolve()
    })
  }

  function progressivelyShowStyle(n) {
    return new Promise((resolve) => {
      const showStyle = () => {
        const style = fullStyle[n]
        if (!style) {
          resolve()
          return
        }

        const length = fullStyle
          .filter((_, index) => index <= n)
          .reduce((sum, item) => sum + item.length, 0)
        const prefixLength = length - style.length

        if (currentStyle.value.length < length) {
          const l = currentStyle.value.length - prefixLength
          const char = style.substring(l, l + 1) || ' '
          currentStyle.value += char

          if (style.substring(l - 1, l) === '\n') {
            nextTick(() => getRefs().styleEditor?.goBottom())
          }
          setTimeout(showStyle, interval)
        } else {
          resolve()
        }
      }
      showStyle()
    })
  }

  function progressivelyShowResume() {
    return new Promise((resolve) => {
      const showResume = () => {
        const length = fullMarkdown.length
        if (currentMarkdown.value.length < length) {
          currentMarkdown.value = fullMarkdown.substring(
            0,
            currentMarkdown.value.length + 1
          )
          const prevChar = currentMarkdown.value[currentMarkdown.value.length - 2]
          if (scrollResumeOnNewline && prevChar === '\n') {
            nextTick(() => getRefs().resumeEditor?.goBottom())
          }
          setTimeout(showResume, interval)
        } else {
          resolve()
        }
      }
      showResume()
    })
  }

  async function makeResume() {
    await progressivelyShowStyle(0)
    await progressivelyShowResume()
    await progressivelyShowStyle(1)
    await showHtml()
    await progressivelyShowStyle(2)
  }

  onMounted(() => {
    makeResume()
  })

  return {
    currentStyle,
    currentMarkdown,
    enableHtml,
  }
}
