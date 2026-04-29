/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
    "quotes": ["error", "single"],
    "no-console": "warn",
    "import/first": "error"
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      js: true
    }
  },
  env: {
    es6: true,
    es2021: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js",".jsx"]
      }
    }
  }
};
