import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/M005-Coop-Ysa/' : '/',
  plugins: [react()],
}));
