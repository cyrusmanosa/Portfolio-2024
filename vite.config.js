import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
