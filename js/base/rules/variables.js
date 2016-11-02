module.exports = {
  rules: {
    // disallow deletion of variables
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 2,

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 2,

    // disallow declaration of variables already declared in the outer scope
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 2,

    // disallow shadowing of names such as arguments
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 2,

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 2,

    // disallow use of undefined when initializing variables
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 2,

    // disallow declaration of variables that are not used in the code
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 2
  },
};
