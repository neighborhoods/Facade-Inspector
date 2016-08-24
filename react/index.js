module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y'
  ].map(require.resolve),
  rules: {}
};