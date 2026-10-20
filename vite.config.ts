import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import app from './server/index';

const apiServerPlugin: Plugin = {
  name: 'api-server-middleware',
  configureServer(server) {
    // Mount the Express backend directly in Vite's development server
    server.middlewares.use(app);
  },
};

const copyIndexTo404Plugin: Plugin = {
  name: 'copy-index-to-404',
  closeBundle() {
    const distIndex = path.resolve(__dirname, 'dist/index.html');
    const dist404 = path.resolve(__dirname, 'dist/404.html');
    if (fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex, dist404);
    }
  },
};

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/moneyquest/' : '/',
  plugins: [react(), apiServerPlugin, copyIndexTo404Plugin],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('src/data/puzzles')) {
            return 'game-puzzles';
          }
        },
      },
    },
  },
});
