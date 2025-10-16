import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale'
import { defaultLocale, locales } from '../i18n'

const STORAGE_KEY = 'language'

function normalizeLocale(locale) {
  if (!locale) return defaultLocale
  
  const supportedLocales = Object.keys(locales)
  
  if (supportedLocales.includes(locale)) {
    return locale
  }
  
  const languageCode = locale.split('-')[0]
  if (supportedLocales.includes(languageCode)) {
    return languageCode
  }
  
  return defaultLocale
}

export function detectLocale() {
  const detected = detect(
    fromStorage(STORAGE_KEY),
    fromNavigator(),
    defaultLocale
  )
  
  return normalizeLocale(detected)
}

export function saveLocale(locale) {
  localStorage.setItem(STORAGE_KEY, locale)
}

