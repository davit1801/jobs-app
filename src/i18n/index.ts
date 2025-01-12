import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authKa from '@/i18n/ka/auth.json';
import authEn from '@/i18n/en/auth.json';
import footerKa from '@/i18n/ka/footer.json';
import footerEn from '@/i18n/en/footer.json';
import navEn from '@/i18n/en/navigation.json';
import navKa from '@/i18n/ka/navigation.json';

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
          footer: footerEn,
          navigation: navEn,
        },
      },
      ka: {
        translation: {
          auth: authKa,
          footer: footerKa,
          navigation: navKa,
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
