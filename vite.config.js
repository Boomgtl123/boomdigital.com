import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Configuración unificada
export default defineConfig(({ mode }) => {
  // Cargar variables del archivo .env
  const env = loadEnv(mode, process.cwd(), '')

  // Avisar si faltan las API Keys
  if (!env.VITE_DEEPSEEK_API_KEY) {
    console.warn('⚠️  VITE_DEEPSEEK_API_KEY not found. Some AI features may not work.')
  }
  if (!env.VITE_CHATBOT_API_KEY) {
    console.warn('⚠️  VITE_CHATBOT_API_KEY not found. Chatbot may not work.')
  }

  return {
    plugins: [tailwindcss()],

    // Necesario si vas a subir a GitHub Pages o Netlify
    base: './',

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },

    server: {
      port: 3000,
      open: true
    },

    optimizeDeps: {
      include: ['firebase/app', 'firebase/auth', 'firebase/firestore']
    }
  }
})