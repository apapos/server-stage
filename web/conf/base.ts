import { BuildOptions, ServerOptions } from 'vite'

export const css = {
  preprocessorOptions: {
    scss: {
      additionalData: "@use 'frame/styles/var.scss' as *;@use 'frame/styles/mixins.scss' as *;",
    }
  }
}

export const server: ServerOptions = {
  port: 5566,
  host: '0.0.0.0',
  proxy: {
    '/api': {
      target: 'http://localhost:5600',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}

export const build: BuildOptions = {
  outDir: 'run',
  rollupOptions: {}
}