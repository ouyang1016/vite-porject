import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  plugins: [react()]
})
