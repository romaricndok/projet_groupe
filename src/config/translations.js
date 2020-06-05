import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './translation/fr/fr.json'
import en from './translation/en/en.json'

const resources = {
    fr,
    en
}

i18n.use(initReactI18next).init({
    lng : 'fr',
    fallbackLng: 'en',
    resources,

    interpolation: {
        escapeValue : false
    }
})

export default i18n