import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authKa from '@/i18n/ka/auth.json';
import authEn from '@/i18n/en/auth.json';

export const SUPPORTED_LANGUAGES = ['en', 'ka'];

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
          auth: authEn,
        },
      },
      ka: {
        translation: {
          auth: authKa,
        },
      },
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
    detection: options,
  });

document.documentElement.lang = i18n.language;
