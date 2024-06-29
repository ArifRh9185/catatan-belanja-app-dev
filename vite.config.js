import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          // tambahkan entri untuk manifest
          manifest: 'public/manifest.json'
        }
      }
    }
})
