module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    plugins: ['react-hooks', 'react', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        },
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': 'error'
    },
    indent: ['error', 4]
};
