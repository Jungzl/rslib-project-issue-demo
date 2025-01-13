import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['src/**/*.{ts,tsx}'],
    },
  },
  lib: [
    {
      bundle: false,
      format: 'cjs',
      dts: {
        autoExtension: true,
      },
      output: {
        distPath: {
          root: 'dist/lib',
        },
      },
    },
    {
      bundle: false,
      format: 'esm',
      dts: {
        autoExtension: true,
      },
      output: {
        distPath: {
          root: 'dist/es',
        },
      },
    },
  ],
});
