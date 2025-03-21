import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import * as sass from 'sass';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ 
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      sourceMap: true
    }),
    postcss({
      extensions: ['.css', '.scss'],
      use: {
        sass: {
          implementation: sass,
          sassOptions: {
            outputStyle: 'compressed'
          }
        }
      },
      extract: 'index.css',
      minimize: true,
      modules: {
        generateScopedName: '[local]___[hash:base64:5]'
      }
    })
  ],
  external: ['react', 'react-dom', 'antd']
}; 