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
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})