module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '免费商标注册_商标查询_商标交易_商标中介_法律服务 - 商标宝',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '商标,免费商标,商标宝,,免费商标注册,商标交易,商标注册,商标查询,商标中介,商标法律服务,商标服务,商标担保交易,代持注册,杭州商标注册,商标注册申请' },
      { hid: 'description', name: 'description', content: '专业商标代理公司打造免费商标注册与专业中介服务平台,为用户提供从免费的商标查询、商标注册到专业的商标驳回复审、商标交易、中介、转让、商标续展、商标变更等系列商标专业服务项目,' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** 全局 css 样式
  */
  css:['~assets/css/bootstrap.min.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
