module.exports = {
  env: {
    node: true
  },

  rules: {
    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 2,

    // disallow use of new operator with the require function
    'no-new-require': 2,

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 2,
  },
};
