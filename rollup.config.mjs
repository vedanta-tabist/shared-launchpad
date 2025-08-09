import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named', // <-- ensures proper exports for CommonJS
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Ensure peer deps are marked as external automatically
    peerDepsExternal(),

    // Resolve non-peer deps
    resolve(),

    // Convert CommonJS modules to ES6
    commonjs(),

    // Compile TypeScript
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      emitDeclarationOnly: false,
    }),

    // Handle CSS imports
    postcss({
      modules: true,
      extract: 'index.css',
      minimize: true,
      sourceMap: true,
    }),

    // Minify JS
    terser(),
  ],

  // Force these packages to *never* be bundled, even if found in node_modules
  external: (id) =>
    ['react', 'react-dom', 'antd'].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    ),
};
