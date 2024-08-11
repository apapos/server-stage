import { defineConfig } from 'vite'
import { resolve } from 'path'
import { plugins } from './conf'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './frame/assets'),
      '@style': resolve(__dirname, './frame/styles'),
      '@components': resolve(__dirname, './frame/components'),
      '@hooks': resolve(__dirname, './frame/hooks'),
      '@pages': resolve(__dirname, './frame/pages'),
      '@reducer': resolve(__dirname, './frame/reducer'),
      '@utils': resolve(__dirname, './frame/utils'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use 'frame/styles/root/theme.scss' as *;",
      }
    }
  },
  plugins,
  server: {
    port: 5566,
    proxy: {
      '/api': {
        target: 'http://localhost:5600',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'run',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@fluentui')) {
            return 'fluent'
          } else if (id.includes('node_modules')) {
            return 'vendor'
          } else {
            return
          }
        }
      }
    }
  }
})
