import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                alert: 'readonly',
                FormData: 'readonly',
                Object: 'readonly',
                setTimeout: 'readonly'
            }
        },
        rules: {
            'indent': ['error', 4],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': ['warn'],
            'no-console': ['off'],
            'camelcase': ['error', { 'properties': 'always' }],
            'eqeqeq': ['error', 'always'],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'error',
            'arrow-spacing': ['error', { 'before': true, 'after': true }],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'no-trailing-spaces': 'error',
            'space-before-blocks': 'error',
            'keyword-spacing': ['error', { 'before': true, 'after': true }]
        }
    }
];
