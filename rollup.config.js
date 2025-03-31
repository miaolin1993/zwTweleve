import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sass from 'sass';

export default {
  input: 'src/index.ts',
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
      modules: false,
      inject: false
    })
  ],
  external: ['react', 'react-dom', 'antd']
}; 