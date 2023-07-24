import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		port: 8080
	},
	plugins: [vue()],
	define: {
		// Disable Options API support
		// https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags
		__VUE_OPTIONS_API__: false
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		chunkSizeWarningLimit: 750
	}
});
