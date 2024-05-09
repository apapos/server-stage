import { defineConfig } from 'vite'
import { resolve } from 'path'
import { css, server, build, plugins } from './conf'

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
  css,
  plugins,
  server,
  build
})
