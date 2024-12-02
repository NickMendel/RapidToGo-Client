import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'localhost:5000', // URL Ihres Backends
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // optional, je nach Backend-API-Pfad
      }
    }
  }
});
