import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  i18n: {
    locales: () => [
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
      { code: 'gr', iso: 'el-GR', name: 'Ελληνικά' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      formatFallbackMessages: true,
      messages: {
        gr: {
          search: {
              placeholder: 'Αναζήτηση (Πατήστε "/" για να ξεκινήσετε)'
          },
          toc: {
              title: 'Σε αυτή τη σελίδα'
          },
          article: {
              github: 'Επεξεργαστήτε αυτή τη σελίδα στο GitHub'
          }
      }
      }
  },
  },
  docs: {
    primaryColor: '#E24F55'
  },
  loading: { color: '#00CD81' },
  buildModules: []
})