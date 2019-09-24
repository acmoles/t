const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    return path.resolve(__dirname, 'noopModule.js')
  },
  plugins: [
    ['@vuepress/active-header-links', options.activeHeaderLinks],
    ['@vuepress/search', {
       searchMaxSuggestions: 10
     }],
    'vuepress-plugin-reading-time',
    require('./plugins/plugin-back-to-top/index.js'),
    require('./plugins/plugin-revealer/index.js'),
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['clean-urls', {
       normalSuffix: '/',
       indexSuffix: '/',
    }],
  ],
  postcss: {
    plugins: [
      require('autoprefixer'),
    ],
  },
  evergreen: true,
})