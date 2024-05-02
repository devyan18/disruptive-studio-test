module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-absolute-path": "off",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-useless-constructor": "off"
  },
  // config jest to work with typescript
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: { jest: true },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      rules: {
        "jest/no-done-callback": "off"
      }
    },
  ],
}
