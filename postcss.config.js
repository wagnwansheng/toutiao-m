// 配置postcss
module.exports = {
  plugins: {
    // // vuecli内部已经默认配置了autoprefixer
    // autoprefixer: {
    //   // browsers用来配置需要兼容的系统（浏览器）环境
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
