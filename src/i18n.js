import { i18n } from '@lingui/core'

export const locales = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
}

export const defaultLocale = 'en'

export async function dynamicActivate(locale) {
    const { messages } = await import(`./locales/${locale}/messages.mjs`)
    i18n.load(locale, messages)
    i18n.activate(locale)
}

export { i18n }
