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
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/sort-comp": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
