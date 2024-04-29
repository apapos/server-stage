import { defineConfig } from 'vite'
import * as path from 'path'
import { css, server, build, plugins } from './conf'

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@assets': path.resolve(__dirname, './frame/assets'),
      '@styles': path.resolve(__dirname, './frame/styles'),
      '@router': path.resolve(__dirname, './frame/router'),
      '@types': path.resolve(__dirname, './frame/types'),
      '@hooks': path.resolve(__dirname, './frame/hooks'),
      '@component': path.resolve(__dirname, './frame/component'),
      '@layout': path.resolve(__dirname, './frame/layout'),
      '@atom': path.resolve(__dirname, './atom')
    }
  },
  css,
  plugins,
  server,
  build
})
