import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
	{
		name: 'app/files-to-lint',
		files: ['**/*.{vue,js,mjs,jsx}'],
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},

	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],

	{
		rules: {
			'indent': ['warn', 'tab'],
			'quotes': ['warn', 'single'],
			'semi': ['warn', 'always'],
			'vue/html-indent': ['warn', 'tab']
		}
	}
]);
