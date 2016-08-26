module.exports = {
  rules: {
    // disallow assignment in conditional expressions
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [2, 'always'],

    // disallow use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 1,

    // disallow use of constant expressions in conditions
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 1,

    // disallow control characters in regular expressions
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 2,

    // disallow use of debugger
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 2,

    // disallow duplicate arguments in functions
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 2,

    // disallow duplicate keys when creating object literals
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 2,

    // disallow a duplicate case label.
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 2,

    // disallow empty statements
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 2,

    // disallow the use of empty character classes in regular expressions
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 2,

    // disallow assigning to the exception in a catch block
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 2,

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 2,

    // disallow unnecessary semicolons
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 2,

    // disallow overwriting functions written as function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 2,

    // disallow function or variable declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 2,

    // disallow invalid regular expression strings in the RegExp constructor
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 2,

    // disallow irregular whitespace outside of strings and comments
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 2,

    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 2,

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // http://eslint.org/docs/rules/no-negated-in-lhs
    'no-obj-calls': 2,

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 2,

    // disallow multiple spaces in a regular expression literal
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 2,

    // disallow sparse arrays
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 2,

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 2,

    // disallow unreachable statements after a return, throw, continue, or break statement
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 2,

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 2,

    // disallow comparisons with the value NaN
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 2,

    // ensure that the results of typeof are compared against a valid string
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 2
  }
};
