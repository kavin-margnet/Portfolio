import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Ensure the base matches your GitHub Pages repo
  optimizeDeps: {
    exclude: ['lucide-react'], // Only if excluding 'lucide-react' is necessary
  },
  build: {
    outDir: "dist", // Default folder for build output
    assetsDir: "assets", // Folder for storing assets
  },
  server: {
    open: true, // Automatically open the app in the browser during development
  },
});
