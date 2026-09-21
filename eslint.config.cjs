/**
 * Native flat config. eslint-config-next 16 ships flat config only, so it can
 * no longer be routed through FlatCompat; it already registers the react,
 * react-hooks, import, jsx-a11y, @next/next and @typescript-eslint plugins.
 * For those, only each plugin's recommended *rules* are layered on top — flat
 * config rejects a plugin name registered twice with different instances,
 * which happens whenever one of them resolves to a nested copy. Only the two
 * plugins Next does not ship, prefer-arrow and prettier, are registered here.
 */
const { defineConfig, globalIgnores } = require('eslint/config');
const js = require('@eslint/js');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const preferArrow = require('eslint-plugin-prefer-arrow');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals');

// @typescript-eslint's flat/recommended is a list of config objects; the
// legacy "plugin:@typescript-eslint/recommended" preset is the sum of their rules.
const tsRecommendedRules = Object.assign(
	{},
	...tsPlugin.configs['flat/recommended'].map(config => config.rules ?? {})
);

module.exports = defineConfig([
	globalIgnores([
		'**/eslint.config.cjs',
		'**/.prettierrc.js',
		'.next/**',
		'**/tailwind.config.cjs',
		'**/postcss.config.js',
		'**/next.config.mjs',
		'**/*.md',
		'**/*.html'
	]),

	js.configs.recommended,
	...nextCoreWebVitals,
	prettierRecommended,

	{
		// Next's own entries register their plugins per file type, so the rules
		// that reference them must be scoped the same way or a plain .js file
		// would see the rule without the plugin.
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			globals: { ...globals.browser },
			parser: tsParser,
			sourceType: 'module',
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: { jsx: true },
				// prefer-nullish-coalescing and prefer-optional-chain need type info.
				project: './tsconfig.json'
			}
		},

		plugins: {
			'prefer-arrow': preferArrow
		},

		rules: {
			...react.configs.flat.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
			...importPlugin.flatConfigs.errors.rules,
			...importPlugin.flatConfigs.warnings.rules,
			...importPlugin.flatConfigs.typescript.rules,
			...tsRecommendedRules,

			// Turn off prettier related
			'indent': 'off',
			'quotes': 'off',
			'linebreak-style': 'off',
			'semi': 'off',
			// General
			'no-template-curly-in-string': ['error'],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-var': 'error',
			'no-useless-rename': 'error',
			'object-shorthand': ['error', 'always'],
			'comma-dangle': ['error', 'never'],
			'arrow-body-style': ['error', 'as-needed'],
			'eqeqeq': ['error', 'always'],
			'dot-notation': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-template': 'error',
			'prefer-arrow/prefer-arrow-functions': 'error',
			// React
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function'
				}
			],
			'react/react-in-jsx-scope': 'off',
			'react/self-closing-comp': 'error',
			'react/jsx-boolean-value': ['error', 'never'],
			'react/jsx-curly-brace-presence': ['error', 'never'],
			'react/jsx-curly-spacing': ['error', 'never'],
			'react/jsx-equals-spacing': ['error', 'never'],
			'react/jsx-fragments': ['error', 'syntax'],
			'react/jsx-no-useless-fragment': 'error',
			'react/display-name': 'off',
			// Typescript
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ prefer: 'type-imports', fixStyle: 'inline-type-imports' }
			],
			// Import
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					'groups': [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index'
					]
				}
			]
		},

		settings: {
			// Fix react version detection
			'react': { version: 'detect' },
			// Set src folder path
			'import/resolver': {
				node: { paths: 'src' },
				typescript: {
					extensionAlias: {
						'.js': ['.ts', '.tsx', '.d.ts', '.js'],
						'.jsx': ['.tsx', '.d.ts', '.jsx'],
						'.cjs': ['.cts', '.d.cts', '.cjs'],
						'.mjs': ['.mts', '.d.mts', '.mjs']
					}
				}
			}
		}
	},

	// Disable prop-types errors clashing with typescript options
	{
		files: ['**/*.tsx'],
		rules: { 'react/prop-types': 'off' }
	}
]);
