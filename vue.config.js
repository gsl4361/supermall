module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',  //@在wue中默认配置为src路径
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}