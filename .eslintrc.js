module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "import/extensions": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "default-param-last": "off",
    "prettier/prettier": "off",
    "react/no-unused-prop-types": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    "import/extensions": [".ts", ".tsx"],
  },
};
