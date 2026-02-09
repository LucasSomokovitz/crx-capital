import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// Para GitHub Pages, use base: '/crx-capital/'
// Para hospedagem normal (Netlify, Vercel, etc.), use base: '/'
// O base path é configurado via variável de ambiente VITE_BASE_PATH
// Se não definida, usa '/' por padrão (funciona no Netlify)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
