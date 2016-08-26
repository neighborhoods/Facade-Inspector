module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': [2, 'always'],

    // enforce one true brace style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],

    // require camel case names
    camelcase: [2, { properties: 'never' }],

    // enforce spacing before and after comma
    'comma-spacing': [2, { before: false, after: true }],

    // enforce one true comma style
    'comma-style': [2, 'last'],

    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,

    // require function expressions to have a name
    'func-names': 1,

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [2, 'unix'],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    // @todo discuss
    // 'max-len': [2, 100, 2, {
    //   ignoreUrls: true,
    //   ignoreComments: false
    // }],

    // require a capital letter for constructors
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
        "ImmutableCollection"
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
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],

    // disallow nested ternary expressions
    'no-nested-ternary': 2,

    // disallow use of the Object constructor
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
    'no-spaced-func': 2,

    // disallow tab characters entirely
    'no-tabs': 2,

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,

    // disallow dangling underscores in identifiers
    // @todo discuss
    //'no-underscore-dangle': [2, { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [2, { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,

    // require padding inside curly braces
    'object-curly-spacing': [2, 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [2, {
      allowMultiplePropertiesPerLine: true,
    }],

    // allow just one var statement per function
    'one-var': [2, 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [2, 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [2, 'always'],

    // enforce padding within blocks
    // @todo discuss
    //'padded-blocks': [2, 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    // @todo discuss
    //'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    quotes: [2, 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': [2, { before: false, after: true }],

    // require or disallow space before blocks
    'space-before-blocks': 2,

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],

    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],

    // require spaces around operators
    'space-infix-ops': 2,

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']           // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [2, 'never'],
  },
};
