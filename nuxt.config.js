export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      {
        name: 'google-site-verification',
        content: '99gs9VAKdbIZL0ykenEwpoHh_hgzYRvJT7mWejWOXvc',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  pwa: {
    meta: {
      description:
        'Hallo, ich bin Dimitri Franov und das ist meine Homepage. Hier findest du meinen Blog und meine Projekte. Viel Spass! - Dimitri',
      name: 'Dimitri Franov Homepage',
      author: 'Dimitri Franov',
      theme_color: '#3b6670',
      lang: 'de',
    },
    manifest: {
      name: 'Dimitri Franov Homepage',
      short_name: 'Dimitri',
      description:
        'Hallo, ich bin Dimitri Franov und das ist meine Homepage. Hier findest du meinen Blog und meine Projekte. Viel Spass! - Dimitri',
    },
  },
}
