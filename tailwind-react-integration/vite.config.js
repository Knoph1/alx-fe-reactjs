// vite.config.js
import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [
        react(),
        tailwindcss(), // ✅ Add this
  ],
})
