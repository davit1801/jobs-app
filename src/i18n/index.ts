import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const SUPPORTED_LANGUAGES = ['ka', 'en'];

const options = {
  order: ['path', 'htmlTag'],
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  htmlTag: document.documentElement,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
      ka: {
        translation: {
          'Welcome to React': 'კეთილი იყოს',
        },
      },
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
    detection: options,
  });
