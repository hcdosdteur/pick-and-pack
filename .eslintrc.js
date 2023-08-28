module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
	root: true,
	rules: {
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
				pathGroups: [
					{
						pattern: 'react*',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '@/component/*',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: '@/assets/*',
						group: 'internal',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['@tanstack*', 'react'],
				alphabetize: {
					order: 'asc',
				},
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/ignore': ['react'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.ts', '.tsx'],
			},
		},
	},
};
