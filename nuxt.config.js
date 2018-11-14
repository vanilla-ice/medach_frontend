module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Медач 2.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  env: {
    BASE_URL: process.env.BASE_URL
  },
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
  },
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'post-id',
        path: '/post/:id?',
        component: resolve(__dirname, 'pages/post/_id.vue')
      }, {
        name: 'news-post-id',
        path: '/news-post/:id?',
        component: resolve(__dirname, 'pages/post/_id.vue')
      }, {
        name: 'blog-post-id',
        path: '/blog-post/:id?',
        component: resolve(__dirname, 'pages/post/_id.vue')
      })
    }
  },

  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '50175607',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
  ]
}

