import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
