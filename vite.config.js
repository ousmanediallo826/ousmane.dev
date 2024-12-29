import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr'; // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // Add the plugin here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.JPG'],
});
