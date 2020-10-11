/*
 * @Author: 邹威鹏(944740645@qq.com)
 * @remarks:
 */
const cra = require('customize-cra')
const { override, addLessLoader } = cra
module.exports = override(
    addLessLoader()
)
