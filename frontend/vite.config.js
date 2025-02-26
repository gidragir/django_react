import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000, // This is the port which we will use in docker
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
})
