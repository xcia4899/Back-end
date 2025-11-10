import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/Back-end/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 這段會自動注入到每個 <style lang="scss"> 與 .scss 檔案
        additionalData: `
          @use "@/assets/variables" as *;
          @use "@/assets/mixins" as *;
        `
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',   // 你的後端主機
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
})
