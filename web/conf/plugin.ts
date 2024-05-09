import react from '@vitejs/plugin-react'
import fs from 'fs'
import  * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

const cssMap = ['.sass', '.scss', '.css']

export const plugins = [
  react(),
  AutoImport({ dts: 'types/auto-import.d.ts', imports: ['react'], dirs: ['frame/hooks'] }),
  {
    name: 'plugin',
    transform(code, id) {
      // 查詢同級目錄下是否存在同名的scss/css文件，自動導入
      if (id.endsWith('.tsx')) {
        let cssCode = '';
        cssMap.forEach((ext) => {
          const cssPath = id.replace(/\.tsx?$/, ext)
          if (fs.existsSync(cssPath)) {
            cssCode += `import './${path.basename(cssPath)}';\n`
          }
        })
        return `${cssCode}${code}`
      }
      return code
    }
  }
]
