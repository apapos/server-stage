import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const cssMap = ['.sass', '.scss', '.css', '.less', '.stylus', '.styl']

export const plugins = [
  react(),
  {
    name: 'plugin',
    transform(code, id) {
      // 查询同级目录下是否存在同名的scss/css文件，自动导入
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
