import { createApp } from 'vue'
import '@fontsource-variable/bodoni-moda/opsz.css'
import '@fontsource-variable/bodoni-moda/opsz-italic.css'
import '@fontsource-variable/hanken-grotesk/index.css'
import './style.css'
import App from './App.vue'
import reveal from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
