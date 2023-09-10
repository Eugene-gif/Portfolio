import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	base: "/Portfolio",
	server: {
    open: true,
    host: true,
  },
	plugins: [injectHTML()],
	resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
});