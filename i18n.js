import vue from 'vue'
import VueI18n from 'vue-i18n'

vue.use(VueI18n)

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

function getDefaultLocale() {
    // Get browser language
    const browserLocale = navigator.language || navigator.userLanguage
    const locale = browserLocale.split('-')[0] // Convert 'en-US' to 'en'

    // List of supported languages
    const supportedLocales = ['en', 'tr', 'es'] // add all your supported languages

    // Check localStorage first
    const savedLocale = localStorage.getItem('userLanguage')
    if (savedLocale && supportedLocales.includes(savedLocale)) {
        return savedLocale
    }

    // Then check browser language
    if (supportedLocales.includes(locale)) {
        localStorage.setItem('userLanguage', locale)
        return locale
    }

    // Default to English if neither is supported
    return 'en'
}

const i18n = new VueI18n({
    locale: process.browser ? getDefaultLocale() : 'en', // Check if we're in browser
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
})

// Add a method to change language
export const setI18nLanguage = (lang) => {
    i18n.locale = lang
    localStorage.setItem('userLanguage', lang)
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export default i18n