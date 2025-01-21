import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;

  return {
    server: {
      host: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
  };
});
