// vitest.config.ts
import { defineConfig } from 'vitest/config';
import babel from 'vite-plugin-babel';
import typescript from '@rollup/plugin-typescript';
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  esbuild: false,
  root: './dist',
  plugins: [typescript() , babel()],
//   plugins:[babel({
//     babelConfig: {
//         babelrc: false,
//         configFile: false,
//         plugins: ['@babel/plugin-proposal-pipeline-operator']
//     }
//   })]
});