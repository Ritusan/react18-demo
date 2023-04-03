import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // npm i -D @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
