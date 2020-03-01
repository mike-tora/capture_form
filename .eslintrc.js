module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    jQuery: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    // 'prettier',
  ],
  extends: [
    'standard',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // サンプルです
    // 'prettier/prettier': ['error', {
    //   semi: false,
    // }],
    'no-eval': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  },
}