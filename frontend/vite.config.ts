import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'fs'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: readFileSync(resolve(__dirname, '127.0.0.1-key.pem')),
      cert: readFileSync(resolve(__dirname, '127.0.0.1.pem'))
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
