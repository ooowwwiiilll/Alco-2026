import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          onlyExplicitManualChunks: true,
          // Stable vendor/library chunks can be cached independently of editor changes.
          manualChunks(id) {
            if (id.includes('/src/data/library/')) return 'component-library-v1';
            if (id.includes('/node_modules/@firebase/firestore/')) return 'firebase-firestore';
            if (id.includes('/node_modules/@firebase/auth/')) return 'firebase-auth';
            if (id.includes('/node_modules/@firebase/storage/')) return 'firebase-storage';
            if (id.includes('/node_modules/jspdf/')) return 'pdf-writer';
            if (id.includes('/node_modules/html2canvas-pro/')) return 'pdf-capture';
          },
        },
      },
    },
    server: {
      // Optional switch for environments where file watching is unavailable.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable watching alongside HMR when explicitly requested.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
