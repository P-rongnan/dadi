/*
 * @Description:
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-28 14:00:18
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-03-04 09:48:26
 * @FilePath: eslint.config.mjs
 * Copyright 2025 Marvin, All Rights Reserved.
 * 2025-02-28 14:00:18
 */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: [
            'node_modules',
            'dist',
            '.gitignore',
            'package.json',
            'package-lock.json',
            '*.local',
            '*.d.ts',
            'src/uni_modules',
        ],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                uni: 'readonly',
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            'no-var': 'warn', // 禁止出现var用let和const代替
            'no-unused-vars': 'off', //关闭自带的规则
            '@typescript-eslint/no-unused-vars': 'error', //开启未使用变量的规则
            '@typescript-eslint/no-empty-interface': 'off',
            'vue/multi-word-component-names': 'off', //根节点的name
            '@typescript-eslint/no-empty-function': 'off', //不允许空函数
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,vue,ts}'],
        rules: {
            '@typescript-eslint/no-explicit-any': ['off'],
            '@typescript-eslint/no-empty-object-type': 'off',
            //  endOfLine: 'auto', // 允许自动处理行尾符
        },
    },
];
