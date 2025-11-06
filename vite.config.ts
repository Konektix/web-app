import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test.config.ts',
    },
} as UserConfig);
