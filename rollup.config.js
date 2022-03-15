import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import { resolve } from 'path'

export default {
  input: "./src/modules/index.ts",
  output: [
    {
      file: './lib/stroll-ui.umd.js',
      format: 'umd',
      name: 'myLib'   
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      file: './lib/stroll-ui.es.js',
      format: 'es'
    },
    {
      file: './lib/stroll-ui.cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[ // 这个插件是有执行顺序的
    alias({
      resolve: ['.js', '.jsx', '.ts', '.tsx'],
      entries: {
        '@': resolve(__dirname, 'src'),
        '@modules': resolve('src/modules'),
        '@methods': resolve('src/methods')
      },
    }),
    nodeResolve({
      extensions:['.ts', '.tsx', '.js', '.jsx']
    }),
    ts({
      tsconfig: resolve(__dirname, 'tsconfig.json')
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ["@vue/babel-preset-jsx"]
    })
  ]
}
