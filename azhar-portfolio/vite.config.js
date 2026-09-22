import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// `base: './'` keeps asset paths relative so the built site works from any
// sub-path, including the GitHub Pages URL the portfolio already lives at.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
