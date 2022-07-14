import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      useConfig: true,
      useTypescript: true,
      useIndexes: true,
    }) as any,
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src --ext .js,.jsx,.ts,.tsx',
      },
    }),
  ],
});
