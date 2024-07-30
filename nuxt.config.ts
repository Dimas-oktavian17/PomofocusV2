import checker from 'vite-plugin-checker'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      checker({
        // e.g. use TypeScript check
        typescript: true,
      }),
    ]
  },
  modules: [
    "@nuxt/ui",
    'nuxt-icon',
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/fonts',
    // '@nuxtjs/pwa',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light'
  },

})