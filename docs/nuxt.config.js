import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  router: {
    base: '/vue-ui-elements/'
  },
  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  buildModules: []
})