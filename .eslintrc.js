module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-curly-brace-presence": 0,
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-alert": 0,
    "object-curly-newline": 0,
    "max-len": ["error", { "code": 150 }],
    "react/sort-comp": 0,
    "react/jsx-props-no-spreading": 0,
  },
};


