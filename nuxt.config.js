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
    '@nuxtjs/robots',
    '@nuxtjs/sentry',
    '@nuxtjs/google-fonts',
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  pwa: {
    meta: {
      description:
        'Hallo, ich bin Dimitri Franov und das ist meine Homepage. Hier findest du meinen Blog und meine Projekte. Viel Spass! - Dimitri',
      name: 'Dimitri Franov',
      author: 'Dimitri Franov',
      theme_color: '#3b6670',
      lang: 'de',
    },
    manifest: {
      name: 'Dimitri Franov',
      short_name: 'Dimitri',
      description:
        'Hallo, ich bin Dimitri Franov und das ist meine Homepage. Hier findest du meinen Blog und meine Projekte. Viel Spass! - Dimitri',
    },
  },
  sentry: {
    dsn: 'https://cb594b04589548b397ceeaa335b961bd@o452704.ingest.sentry.io/5440528', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
      'Roboto+Slab': true,
    },
  },
}
