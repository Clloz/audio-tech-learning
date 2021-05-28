module.exports = {
    defaultSeverity: 'error',
    extends: ['stylelint-config-standard'],
    rules: {
        'declaration-block-semicolon-newline-after': 'always',
        indentation: [
            4, // 这里设置 4 防止和 prettier 冲突
            {
                baseIndentLevel: 1,
            },
        ],
        'declaration-no-important': true, // 强制不可以写 important 规则
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                ignoreFontFamilies: ['sail'],
            },
        ],
    },
};
