import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/quiz-app/',
  server: {
    proxy: {
      '/quiz-app/api': {
        target: 'http://172.232.173.170:3000',
        changeOrigin: true,
      }
    }
  }
})