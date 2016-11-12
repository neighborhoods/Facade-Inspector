module.exports = {
  extends: [
    './base',
    './react'
  ].map(require.resolve),
  rules: {},
  plugins: [
    "import-order"
  ],
};
