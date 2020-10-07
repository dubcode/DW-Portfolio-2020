
export default {
  mode: 'universal',
  /*
   ** Webfont Loader Config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:100,400,800', 'Orbitron:400,800']
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Digital Designer & Developer | Daniel Wakefield',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Vue.js, Nuxt.js, Web Design, UI Design, WordPress' },
      { hid: 'description', name: 'description', content: 'Digital Design & Development Portfolio of Daniel Wakefield' },
      { hid: 'og:title', name: 'og:title', content: 'ULTR4 NBP - Nuxt.js Boilerplate' },
      { hid: 'og:description', name: 'og:description', content: 'Digital Designer & Developer | Daniel Wakefield' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#111' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/css/ultr4.css'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      'OBJLoader.js',
      'MTLLoader.js',
      'OrbitControls.js',
      'TransformControls.js',
      'EffectComposer',
      'RenderPass',
      'ShaderPass',
      'UnrealBloomPass'
    ],
    extend (config, ctx) {
    }
  }
}
