// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  extends: [
    'ryansobol/browser',
    'ryansobol/jquery',
    'ryansobol/es6'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0;
    "semi": ["error", "never"],
    "no-unreachable": "error",
    "no-unexpected-multiline": "error",
    "strict": "off",
    "no-console": "off",
    "no-implicit-globals": "off",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-unused-vars": "off",
    "no-else-return": "off",
    "no-multiple-empty-lines": "error",
    "lines-around-comment": "off",
    "func-style": "off",
    "dot-notation": "off",
    "arrow-parens": "off",
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "newline-after-var": "off",
    "camelcase": "off",
    "no-use-before-define": "off",
    "prefer-template": "off",
    "brace-style": ["error", "1tbs"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "prefer-const": "off",
    "max-statements": "off",
    "new-cap": "off",
    "max-len": "off",
    "max-params": "off"
  }
}
