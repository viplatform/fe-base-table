import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import { copyFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Plugin to add ESLint configuration to dist
const eslintConfigPlugin = () => ({
  name: 'eslint-config',
  writeBundle() {
    // Create .eslintrc.js in dist
    const eslintConfig = `module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  ignorePatterns: ['**/*'],
};`;

    writeFileSync(join('dist', '.eslintrc.js'), eslintConfig);

    // Create .eslintignore in dist
    writeFileSync(join('dist', '.eslintignore'), '*');
  },
});

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist', // Use dir for output directory
      format: 'esm', // Use esm format
      sourcemap: true,
      chunkFileNames: 'chunks/chunk.[hash].js', // Naming pattern for dynamic chunks
    },
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        skip: [
          'react',
          'react-dom',
          '@mui/material',
          '@mui/icons-material',
          '@mui/x-date-pickers',
          '@emotion/react',
          '@emotion/styled',
        ],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
        skipLibCheck: true,
      }),
      replace({
        preventAssignment: true,
        'process.env.REACT_APP_ASSET_BASE_URL': JSON.stringify(
          process.env.REACT_APP_ASSET_BASE_URL,
        ),
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      eslintConfigPlugin(),
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@mui/material',
      '@mui/material/Checkbox',
      '@mui/icons-material',
      '@mui/icons-material/ArrowDownward',
      '@mui/icons-material/ArrowRight',
      '@mui/icons-material/Cancel',
      '@mui/icons-material/ChevronLeft',
      '@mui/icons-material/ChevronRight',
      '@mui/icons-material/ClearAll',
      '@mui/icons-material/Close',
      '@mui/icons-material/DensityLarge',
      '@mui/icons-material/DensityMedium',
      '@mui/icons-material/DensitySmall',
      '@mui/icons-material/DragHandle',
      '@mui/icons-material/DynamicFeed',
      '@mui/icons-material/Edit',
      '@mui/icons-material/ExpandMore',
      '@mui/icons-material/FilterAlt',
      '@mui/icons-material/FilterList',
      '@mui/icons-material/FilterListOff',
      '@mui/icons-material/FirstPage',
      '@mui/icons-material/Fullscreen',
      '@mui/icons-material/FullscreenExit',
      '@mui/icons-material/KeyboardDoubleArrowDown',
      '@mui/icons-material/LastPage',
      '@mui/icons-material/MoreHoriz',
      '@mui/icons-material/MoreVert',
      '@mui/icons-material/PushPin',
      '@mui/icons-material/RestartAlt',
      '@mui/icons-material/Save',
      '@mui/icons-material/Search',
      '@mui/icons-material/SearchOff',
      '@mui/icons-material/Sort',
      '@mui/icons-material/SyncAlt',
      '@mui/icons-material/ViewColumn',
      '@mui/icons-material/VisibilityOff',
      '@mui/x-date-pickers',
      '@mui/x-date-pickers/AdapterDayjs',
      '@mui/x-date-pickers/LocalizationProvider',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      /\.css$/,
      '@mui/material',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
];
