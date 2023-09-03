module.exports = {
	env: {
		browser: true,
		es6: true,
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
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
		jsx: true,
	},
	plugins: ['@typescript-eslint', 'react', 'import', 'react-hooks'],
	root: true,
	rules: {
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		indent: 'off',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'type',
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'unknown',
				],
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
		'import/ignore': ['react', 'react-scroll'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
