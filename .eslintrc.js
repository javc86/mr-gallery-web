module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'jest',
    'babel',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': 0,
    'class-methods-use-this': 1,
    camelcase: 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    semi: ['error', 'never'],
    'max-len': [1, 200],
    'max-lines': ['error', 400],
    'global-require': 0,
    'no-underscore-dangle': ['off'],
    'react/no-unescaped-entities': ['off'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': [
      2,
      {
        allowRequiredDefaults: true,
      },
    ],
    'import/prefer-default-export': ['off'],
    'react/static-property-placement': [2, 'static public field'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '__mocks__/**',
          '__tests__/**',
          '**/*.e2e.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      },
    ],
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'no-shadow': 'off',
  },
  globals: {
    __DEV__: true,
    window: true,
    detoxCircus: true,
    fetch: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    typescript: {
      alwaysTryTypes: true,
    },
  },
}
