import vue from 'rollup-plugin-vue'
import postcss from "rollup-plugin-postcss"

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js'
    },
    plugins: [
      vue()
    ]
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    ]
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/library.js'
    },
    plugins: [
      vue()
    ]
  }
]