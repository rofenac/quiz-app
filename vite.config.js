import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.100.2:3000',
        changeOrigin: true,
      }
    }
  }
})