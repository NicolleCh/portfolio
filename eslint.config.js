import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylisticJs from '@stylistic/eslint-plugin-js';
import babelParser from '@babel/eslint-parser';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // Stylistic rules
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/comma-dangle': ['error', 'never']
    }
  },

  // JavaScript/JSX configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      }
    }
  },

  // React-specific rules
  {
    files: ['**/*.{jsx,js}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },

  // Ignore patterns
  {
    ignores: ['dist', 'node_modules']
  }
];

