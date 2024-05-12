import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://fastapi-crm-system.onrender.com', // URL внешнего сервера
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Опционально: удаляет /api из URL перед отправкой
      },
    },
  },
});