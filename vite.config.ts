
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changez en '/nom-du-repo/' si vous déployez sur GitHub Pages sans domaine personnalisé
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
