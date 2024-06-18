import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

function loadLocaleMessages() {
  return {
    en: en,
    vi: vi
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages: loadLocaleMessages()
})

export default i18n
