/**
 * *@2019-04-15
 * *@author liulifu
 * *@describe vue-cli 3.x配置文件
 * 参考：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
 */
// import Config from './config/index'

//是否是生产环境
const IS_PRODUCTION = true;
// const USE_CDN = true
// 启用包分析
const USE_ANALYZER = false;

// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// // const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath.映射资源url,注意是域名后的子路径上
  publicPath: '/',
  outputDir: "dist",
  // 这个变量不能改
  assetsDir: './static',
  //文件名加hash 方便缓存
  filenameHashing: true,
  //关闭jslint检查
  lintOnSave: false,
  //sourceMap 用于追踪编译后的代码到源代码的映射，生产环境下最好禁用
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  // pwa:{
  //   iconPaths:{
  //     favicon32: 'bluebee-logo.png',
  //     favicon16: 'bluebee-logo.png',
  //     appleTouchIcon: 'bluebee-logo.png',
  //     maskIcon: 'bluebee-logo.png',
  //     msTileImage: 'bluebee-logo.png'
  //   }
  // },


  //更改webpack 相关的配置
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力(使用在移动端)
     */
    // config
    // .plugins
    // .delete('prefetch')
    // .delete('preload')
    // config
    // .entry('main')
    // .add('babel-polyfill')

    //文件路径别名配置
    config
      .resolve
      .alias
      .set('@', resolve('./src/'))
      .set('util', resolve('./src/util'))
      .set('mixins', resolve('./src/mixins'))
    //SVG icon 处理器配置
    config
      .module
      .rule('svg')
      .uses
      .clear()
    config
      .module
      .rule('svg')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // 修改images loader 添加svg处理
    config
      .module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('@/icons'))
      .end()
    config
      .plugin('html')
      .tap(args => {
        return args
      })

    //针对生产环境的优化配置
    if (IS_PRODUCTION) {
      // config
      //   .optimization
      //   .minimizer('js').use(UglifyjsWebpackPlugin, [{
      //     uglifyOptions: {
      //       compress: {

      //         // 删除所有的 `console` 语句，可以兼容ie浏览器
      //         drop_console: true,
      //         // 内嵌定义了但是只用到一次的变量
      //         collapse_vars: true,
      //         // 提取出出现多次但是没有定义成变量去引用的静态值
      //         reduce_vars: true,
      //       },
      //       output: {
      //         // 最紧凑的输出
      //         beautify: false,
      //         // 删除所有的注释
      //         comments: false,
      //       }
      //     }
      //   }]);
      // config.optimization
      //   .minimizer('css')
      //   .use(OptimizeCSSAssetsPlugin, [{ cssProcessorOptions: { safe: true } }]);

    }
  },


 
}
