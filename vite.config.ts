import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_RAPIDTOGO_BACKEND_URL || 'http://localhost:5000', // URL Ihres Backends
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // optional, je nach Backend-API-Pfad
        secure: false
      }
    }
  }
});
