export default {
  locales: ['en', 'es', 'pt'],
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src']
    }
  ],
  format: 'po',
  compileNamespace: 'es'
}

