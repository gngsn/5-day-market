module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "prettier",
    // "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/triple-slash-reference": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/prop-types": ["off"],
    "@typescript-eslint/ban-types": "off",
  },
};