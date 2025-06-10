import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
  // Main bundle
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/index.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      production && terser()
    ]
  },
  // Colors-only bundle
  {
    input: 'src/colors.js',
    output: [
      {
        file: 'dist/colors.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/colors.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      production && terser()
    ]
  }
];