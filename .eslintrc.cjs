module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        process: true,
    },
    rules: {
        // "off"或者0    //关闭规则关闭
        // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
        // "error"或者2    //把规则作为一个错误（退出代码触发时为1）

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        // 解析vue模板错误规则
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false,
                'missing-semicolon-after-character-reference': false,
            },
        ],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
        'no-param-reassign': ['error', { props: false }], // 函数形参可修改
        'vue/multi-word-component-names': 'off', // eslint-plugin-vue @8版本中新增了不少的规则，第一条就是 **‘vue/multi-word-component-names’: ‘error’,**所有index.vue 会报错，解决方法:
        'no-new-object': 'off', // 关闭不可以new对象的规则
        'no-explicit-any': 'off', // 可以使用any，但请尽量不使用any
        '@typescript-eslint/no-explicit-any': 'off', // ts可以使用any
        'vue/v-on-event-hyphenation': 'off', // 关闭事件命名样式需要用连字符
    },
}
