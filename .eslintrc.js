module.exports = {
	env: {
		es2020: true,
		browser: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: [
		'import',
		'react',
		'@typescript-eslint'
	],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	rules: {
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'warn',
		'no-cond-assign': 'error',
		'no-console': 'warn',
		'no-constant-condition': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'warn',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': 'off',
		'no-extra-semi': 'warn',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-loss-of-precision': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true
			}
		],
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'class-methods-use-this': 'off',
		'consistent-return': 'error',
		curly: 'error',
		'default-case': 'off',
		'default-case-last': 'error',
		'default-param-last': 'off',
		'dot-notation': 'error',
		eqeqeq: 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': [
			'error',
			1
		],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-constructor-return': 'error',
		'no-else-return': 'warn',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'warn',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'warn',
			{
				props: true
			}
		],
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		radix: 'error',
		'require-await': 'error',
		'vars-on-top': 'warn',
		'wrap-iife': 'error',
		yoda: 'error',
		strict: [
			'error',
			'global'
		],
		'init-declarations': 'off',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 'off',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'warn',
		'no-undef': 'off',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'array-bracket-newline': [
			'error',
			{
				multiline: true
			}
		],
		'array-bracket-spacing': 'off',
		'array-element-newline': 'off',
		'block-spacing': 'error',
		'brace-style': 'error',
		camelcase: 'off',
		'capitalized-comments': 'off',
		'comma-dangle': 'off',
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': 'off',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'off',
		'func-names': [
			'error',
			'never'
		],
		'func-style': 'off',
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		'function-paren-newline': [
			'error',
			'multiline-arguments'
		],
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'line-comment-position': 'warn',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'max-depth': 'off',
		'max-len': [
			'error',
			{
				code: 150,
				ignoreUrls: true,
				ignoreStrings: true
			}
		],
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'off',
		'no-bitwise': 'off',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-new-object': 'off',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [
			'error',
			'below'
		],
		'object-curly-newline': 'off',
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'off',
		'operator-assignment': 'error',
		'operator-linebreak': 'off',
		'padded-blocks': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return'
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let'
				],
				next: [
					'const',
					'let'
				]
			}
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		'semi-spacing': 'error',
		'semi-style': 'error',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'off',
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'off',
		'wrap-regex': 'off',
		'arrow-body-style': [
			'error',
			'as-needed'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': 'error',
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'no-class-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'warn',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'no-useless-constructor': 'off',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': 'off',
		'yield-star-spacing': 'error',
		'import/order': [
			'error',
			{
				'newlines-between': 'always-and-inside-groups',
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
				]
			}
		],
		'import/extensions': 'off',
		'import/newline-after-import': [
			'error',
			{
				count: 2
			}
		],
		'import/no-duplicates': 'error',
		'import/no-relative-parent-imports': 'error',
		'import/no-self-import': 'error',
		'import/prefer-default-export': 'off',
		'react/boolean-prop-naming': 0,
		'react/button-has-type': 0,
		'react/default-props-match-prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/display-name': 0,
		'react/forbid-component-props': 0,
		'react/forbid-dom-props': 2,
		'react/forbid-elements': 0,
		'react/forbid-foreign-prop-types': 0,
		'react/forbid-prop-types': 0,
		'react/function-component-definition': 0,
		'react/no-access-state-in-setstate': 1,
		'react/no-adjacent-inline-elements': 0,
		'react/no-array-index-key': 0,
		'react/no-children-prop': 2,
		'react/no-danger-with-children': 2,
		'react/no-danger': 2,
		'react/no-deprecated': 2,
		'react/no-did-mount-set-state': 0,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-multi-comp': 0,
		'react/no-redundant-should-component-update': 2,
		'react/no-render-return-value': 2,
		'react/no-set-state': 0,
		'react/no-string-refs': 2,
		'react/no-this-in-sfc': 2,
		'react/no-typos': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 2,
		'react/no-unsafe': 2,
		'react/no-unused-prop-types': 2,
		'react/no-unused-state': 1,
		'react/no-will-update-set-state': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-read-only-props': 2,
		'react/prefer-stateless-function': 1,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 2,
		'react/require-default-props': 0,
		'react/require-optimization': 0,
		'react/require-render-return': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': [
			2,
			{
				order: [
					'instance-variables',
					'lifecycle',
					'render',
					'static-methods',
					'everything-else'
				],
				groups: {
					lifecycle: [
						'displayName',
						'propTypes',
						'contextTypes',
						'childContextTypes',
						'mixins',
						'statics',
						'defaultProps',
						'getInitialProps',
						'constructor',
						'getDefaultProps',
						'state',
						'getInitialState',
						'getChildContext',
						'getDerivedStateFromProps',
						'componentWillMount',
						'UNSAFE_componentWillMount',
						'componentDidMount',
						'componentWillReceiveProps',
						'UNSAFE_componentWillReceiveProps',
						'shouldComponentUpdate',
						'componentWillUpdate',
						'UNSAFE_componentWillUpdate',
						'getSnapshotBeforeUpdate',
						'componentDidUpdate',
						'componentDidCatch',
						'componentWillUnmount'
					]
				}
			}
		],
		'react/sort-prop-types': 0,
		'react/state-in-constructor': 2,
		'react/static-property-placement': 2,
		'react/style-prop-object': 2,
		'react/void-dom-elements-no-children': 2,
		'react/jsx-boolean-value': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-closing-bracket-location': [
			2,
			'tag-aligned'
		],
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-brace-presence': [
			2,
			{
				props: 'always',
				children: 'never'
			}
		],
		'react/jsx-curly-newline': 'off',
		'react/jsx-curly-spacing': [
			2,
			{
				when: 'never'
			}
		],
		'react/jsx-equals-spacing': 2,
		'react/jsx-first-prop-new-line': [
			2,
			'multiline'
		],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx'
				]
			}
		],
		'react/jsx-fragments': [
			2,
			'syntax'
		],
		'react/jsx-handler-names': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-key': 2,
		'react/jsx-max-depth': 'off',
		'react/jsx-max-props-per-line': [
			2,
			{
				maximum: 1,
				when: 'always'
			}
		],
		'react/jsx-no-bind': [
			2,
			{
				allowArrowFunctions: true
			}
		],
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-literals': 0,
		'react/jsx-no-script-url': 2,
		'react/jsx-no-target-blank': 2,
		'react/jsx-no-undef': 0,
		'react/jsx-no-useless-fragment': 2,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-pascal-case': 1,
		'react/jsx-props-no-multi-spaces': 2,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-sort-default-props': 0,
		'react/jsx-sort-props': [
			'error',
			{
				ignoreCase: true,
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: true,
				reservedFirst: true,
			}
		],
		'react/jsx-tag-spacing': [
			2,
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never'
			}
		],
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/jsx-wrap-multilines': 2,
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/array-type': [
			2,
			{
				default: 'generic'
			}
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-shadow': 'warn',
	}
};
