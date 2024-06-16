// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    '@nuxt/fonts'
  ],
  colorMode: {
    classSuffix: ''
  }
})