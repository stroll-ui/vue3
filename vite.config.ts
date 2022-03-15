import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, '.', dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let build = {}
  if (mode === 'buildUI') {
    build = BuildUI()
  }
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      extensions: ['.ts', 'js', '.tsx', 'jsx', '.vue', '.styl', '.json'],
      alias: {
        '@': resolve('src'),
        '@modules': resolve('src/modules')
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9900,
    },
    build
  }
})

function BuildUI () {
  return {
    outDir: 'dist',
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: resolve(__dirname, 'src/modules/index.ts'),
      name: 'SUI',
      fileName: (format: string) => `stroll-ui.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}
