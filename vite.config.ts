/// <reference types="vitest" />
import * as path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@typings' : path.resolve(__dirname, './src/typings'),
      '@styles' : path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src --ext .js,.jsx,.ts,.tsx',
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  }
});
