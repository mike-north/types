module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  env: {
    es6: true
  },
  plugins: ['prettier', 'node', 'promise', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0
  },
  overrides: [
    {
      files: ['test/**/*.ts'],
      parserOptions: {
        project: 'test/tsconfig.json'
      },
      env: {
        qunit: true,
        node: true
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/no-misused-promises': 0
      }
    },
    {
      files: ['type-tests/**/*.ts'],
      parserOptions: {
        project: 'type-tests/tsconfig.json'
      },
      env: {
        qunit: true,
        node: true
      },
      rules: {
        '@typescript-eslint/no-misused-promises': 0
      }
    }
  ]
};
