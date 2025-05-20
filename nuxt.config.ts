// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  css: [
    '~/assets/style/index.css',
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },

  app: {
    head: {
      title: 'Cosmin\'s Portfolio',
      llnk: [
        { rel: 'icon', type: 'image/x-icon', href: `${process.env.BASE_URL}/favicon.ico` },
      ]
    }
  }

  /* ui: {
    colorMode: 'dark',
  } */
})