/* eslint-env node */

module.exports = {
	// https://eslint.org/docs/latest/use/configure/configuration-files#cascading-and-hierarchy
	// This option interrupts the configuration hierarchy at this file
	// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
	root: true,

	// https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
	parserOptions: {
		ecmaVersion: '2022' // Allows for the parsing of modern ECMAScript features
	},

	// https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
	env: {},

	// https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files
	// Rules order is important, please avoid shuffling them
	extends: [
		// Base ESLint recommended rules
		'eslint:recommended',

		// Uncomment any of the lines below to choose desired strictness,
		// but leave only one uncommented!
		// See https://eslint.vuejs.org/rules/#available-rules
		// 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
		// 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
		'plugin:vue/vue3-recommended' // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
	],

	// https://eslint.org/docs/latest/use/configure/language-options#specifying-globals
	globals: {},

	// https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files
	// Add your custom rules here
	rules: {
		'indent': ['warn', 'tab'],
		'quotes': ['warn', 'single'],
		'semi': ['warn', 'always'],
		'vue/html-indent': ['warn', 'tab']
	}
};
