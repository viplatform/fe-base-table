import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/BaseTable/components'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mui-table',
      fileName: (format) => {
        return `mui-table.${format}.js`;
      },
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/icons-material',
        '@mui/x-date-pickers',
        '@emotion/react',
        '@emotion/styled',
        '@tanstack/react-table',
        'material-react-table',
        'dayjs',
        'lodash',
      ],
    },
  },
  plugins: [
    peerDepsExternal(),
    react(),
    dts({
      rollupTypes: false,
      exclude: ['/**/*.stories.tsx', '/**/*.test.tsx'],
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      staticImport: true,
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@assets/*': ['src/assets/*'],
          '@components/*': ['src/BaseTable/components/*'],
        },
      },
    }),
    cssInjectedByJsPlugin(),
    {
      name: 'add-eslint-ignore-to-dist',
      closeBundle() {
        const eslintIgnore = `# Ignore all files in built package
*
**/*
`;
        const eslintConfig = `// Minimal ESLint config for built package
export default [
  {
    ignores: ['**/*'],
  },
];
`;
        const eslintrcJs = `// Legacy ESLint config for built package
module.exports = {
  ignorePatterns: ['**/*'],
};
`;
        const eslintrcJson = `{
  "ignorePatterns": ["**/*"]
}
`;
        fs.writeFileSync(path.resolve(__dirname, 'dist/.eslintignore'), eslintIgnore);
        fs.writeFileSync(path.resolve(__dirname, 'dist/eslint.config.mjs'), eslintConfig);
        fs.writeFileSync(path.resolve(__dirname, 'dist/.eslintrc.js'), eslintrcJs);
        fs.writeFileSync(path.resolve(__dirname, 'dist/.eslintrc.json'), eslintrcJson);
      },
    },
  ],
});
