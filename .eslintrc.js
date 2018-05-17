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

  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',

  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止或强制圆括号内的空格
    // 'space-in-parens': ["error", "always"],
    'space-in-parens': 'off',

    // Style guides may require a space after the function keyword for
    // anonymouse functions, while others specify no whitespace
    // Similarly, the space after a function name may or may not be required.
    'space-before-function-paren': 'off',
  }
}
