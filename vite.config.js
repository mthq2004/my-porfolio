import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-porfolio/",
  plugins: [react()],
  server:{
    port: 1111,
    open: true
  }
})
