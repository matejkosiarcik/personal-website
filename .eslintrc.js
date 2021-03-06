module.exports = {
    root: true,
    ignorePatterns: [
        '**/script/tmp/**',
        '**/public/**',
        '**/backstop_data/**',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        'es2020': true,
        'browser': true,
        'node': true,
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'comma-dangle': ['error', 'always-multiline'],
        'eqeqeq': ['error', 'always'],
        'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
        'no-inner-declarations': 0,
    },
    overrides: [{
        files: ["*.js", "*.jsx"],
        rules: {
            '@typescript-eslint/no-var-requires': 0,
        },
    }],
};
