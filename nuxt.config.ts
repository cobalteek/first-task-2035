export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '',
      title: 'First Task 2035',
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/main.scss'],

  modules: [
    '@pinia/nuxt',
    'unplugin-icons/nuxt'
  ],


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})