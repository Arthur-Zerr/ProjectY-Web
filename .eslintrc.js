/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ['./tsconfig.eslint.json'],
    "sourceType": "module",
  },
  "plugins": [
    "eslint-plugin-import",
    "@angular-eslint/eslint-plugin",
    "eslint-plugin-jsdoc",
    "@angular-eslint/eslint-plugin-template",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint",
    "deprecation"
  ],
  "rules": {
    "deprecation/deprecation": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        "ignoreParameters": true
      }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": [
      "off",
      "always"
    ],
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "dot-notation": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-denylist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "import/order": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/no-types": "error",
    "max-classes-per-file": "off",
    "max-len": [
      "warn",
      {
        "code": 140
      }
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-restricted-imports": [
      "error",
      "rxjs/Rx"
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "warn",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-use-before-define": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": "error",
    "radix": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    "semi": [
      2,
      "always"
    ]
  }
};
