module.exports = {
  rules: {
    // enforce spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [2, 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': [2, 'always'],

    // enforce one true brace style
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],

    // require camel case names
    // http://eslint.org/docs/rules/camelcase
    camelcase: [2, { properties: 'never' }],

    // require trailing commas in multiline object literals
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'always-multiline'],

    // enforce spacing before and after comma
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [2, { before: false, after: true }],

    // enforce one true comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],

    // disallow padding inside computed properties
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [2, 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 2,

    // require function expressions to have a name
    // http://eslint.org/docs/rules/func-names
    'func-names': 1,

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // enforces spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': [2, { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [2, 'unix'],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, {
      code: 140,
      tabWidth: 2,
      ignoreComments: false,
    }],

    // require a capital letter for constructors
    // http://eslint.org/docs/rules/new-cap
    'new-cap': [2, {
      newIsCap: true,
      capIsNewExceptions: [
        "ImmutableMap",
        "ImmutableSet",
        "ImmutableOrderedMap",
        "ImmutableMapOrderedSet",
        "ImmutableSeq",
        "ImmutableList",
        "ImmutableStack",
        "ImmutableIterable",
        "ImmutableCollection",
      ]
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 2,

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 2,

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 2,

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 2,

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [2, {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],

    // disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 2,

    // disallow multiple empty lines and only one newline at the end
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],

    // disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 2,

    // disallow use of the Object constructor
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 2,

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow space between function identifier and application
    // http://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 2,

    // disallow tab characters entirely
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 2,

    // disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2,

    // disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 2,

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [2, { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,

    // require padding inside curly braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [2, 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [2, {
      allowMultiplePropertiesPerLine: true,
    }],

    // allow just one var statement per function
    // http://eslint.org/docs/rules/one-var
    'one-var': [2, 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [2, 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [2, 'always'],

    // enforce padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [2, 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'as-needed'],

    // specify whether double or single quotes should be used
    // http://eslint.org/docs/rules/quotes
    quotes: [2, 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    semi: [2, 'always'],

    // enforce spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [2, { before: false, after: true }],

    // require or disallow space before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 2,

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],

    // require or disallow spaces inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [2, 'never'],

    // require spaces around operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 2,

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {},
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!'],           // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [2, 'never'],
  },
};
