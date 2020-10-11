import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const base = {
  input: 'src/index.ts',

  output: {
    exports: 'named',
    sourcemap: true
  },

  plugins: [
    resolve(),
    typescript(),
    commonjs()
  ],

  external: ['slate', '@hediet/debug-visualizer-data-extraction']
}

const es = {
  ...base,

  output: {
    ...base.output,

    format: 'es',
    file: 'dist/index.es.js'
  }
}

const cjs = {
  ...base,

  output: {
    ...base.output,

    format: 'cjs',
    file: 'dist/index.cjs.js'
  }
}

const umd = {
  ...base,

  output: {
    ...base.output,

    format: 'umd',
    file: 'dist/index.umd.js',
    name: 'SlateDebugVisualizer',
    globals: {
      'slate': 'Slate'
    }
  },

  external: ['slate']
}

export default [
  es,
  cjs,
  umd
]
