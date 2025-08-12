import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/icons/**/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'es2019',
  treeshake: true,
  minify: false,
  esbuildOptions(options) {
    options.legalComments = 'none';
    options.logOverride = { 'css-syntax-error': 'silent' };
    options.jsx = 'automatic';
    options.chunkNames = 'chunks/[name]-[hash]';
  },
  esbuildPlugins: [],
  workerThreads: false,
  // reducir concurrencia de typegen para evitar OOM
  tsconfig: 'tsconfig.json',
  external: ['react'],
  outDir: 'dist',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
});


