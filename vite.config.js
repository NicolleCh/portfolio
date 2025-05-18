import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stripPlugin from 'vite-plugin-strip';

export default defineConfig({
  plugins: [
    react(),
    stripPlugin({
      include: ['**/*.(ts|tsx|js|jsx)'],
      functions: ['console.log', 'console.debug', 'console.warn']
    })
  ]
});
