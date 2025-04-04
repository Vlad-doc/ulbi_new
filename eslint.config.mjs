import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "build/**",
      "**/.vscode/**",
      "**/*.d.ts",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    plugins: {
      import: importPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactRecommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      }],
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "pathGroups": [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          "pathGroupsExcludedImportTypes": ["react"],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "quotes": ["error", "double", {
        avoidEscape: true,
        allowTemplateLiterals: false,
      }],
      "jsx-quotes": ["error", "prefer-double"],
      "comma-dangle": ["error", "always-multiline"],
      "no-multiple-empty-lines": ["error", {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      }],
      "semi": ["error", "always", {
        omitLastInOneLineBlock: true,
      }],
      "arrow-parens": ["error", "as-needed"],
      "arrow-body-style": ["error", "as-needed"],
      "eqeqeq": ["error", "always", { null: "always" }],
    },
  },
];