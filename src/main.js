import { createApp } from 'vue'
import App from './App.vue'
import Mobile from './Mobile.vue'

const width = document.documentElement.clientWidth
const RootComponent = width > 500 ? App : Mobile

createApp(RootComponent).mount('#app')
