const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MetaOffice Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#903163' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", sizes: "16x16", href: "/assets/img/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', crossorigin: 'anonymous' }]
],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    smoothScroll: true,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: '🔒 Trust Center', link: 'https://trust.teams-pro.com/trust/architecture-security/metaoffice-pro' },
      { text: '🔋 Status', link: 'https://status.witivio.com' },
      { text: 'Witivio', link: 'https://www.witivio.com' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          path:'/guide/install',
          collapsable: false,
          children: [
            
            ['fundamentals.md', 'foundamentals'],
            ['Release-notes.md', 'release notes'],
            ['install.md', 'Installation'],
            ['login.md', 'Log in'],
            ['features.md', 'Features'],
            ['user-interactions.md', 'User interactions'],
          ]

        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
  ]
}
