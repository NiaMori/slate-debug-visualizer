module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },

  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  'plugins': [
    '@typescript-eslint'
  ],

  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  },

  'ignorePatterns': ['dist', 'node_modules'],

  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  }
}
