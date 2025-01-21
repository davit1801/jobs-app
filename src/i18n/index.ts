import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authKa from '@/i18n/ka/auth.json';
import authEn from '@/i18n/en/auth.json';
import footerKa from '@/i18n/ka/footer.json';
import footerEn from '@/i18n/en/footer.json';
import navEn from '@/i18n/en/navigation.json';
import navKa from '@/i18n/ka/navigation.json';
import vacancyEn from '@/i18n/en/vacancy.json';
import vacancyKa from '@/i18n/ka/vacancy.json';
import toastEn from '@/i18n/en/toast.json';
import toastKa from '@/i18n/ka/toast.json';
import notFoundKa from '@/i18n/ka/not-found.json';
import notFoundEn from '@/i18n/en/not-found.json';
import buttonEn from '@/i18n/en/button.json';
import buttonKa from '@/i18n/ka/button.json';
import homeEn from '@/i18n/en/home.json';
import homeKa from '@/i18n/ka/home.json';
import profileEn from '@/i18n/en/profile.json';
import profileKa from '@/i18n/ka/profile.json';
import myVacanciesEn from '@/i18n/en/my-vacancies.json';
import myVacanciesKa from '@/i18n/ka/my-vacancies.json';
import settingsEn from '@/i18n/en/settings.json';
import settingsKa from '@/i18n/ka/settings.json';
import contactEn from '@/i18n/en/contact.json';
import contactKa from '@/i18n/ka/contact.json';

export const SUPPORTED_LANGUAGES = ['en', 'ka'];
export const defaultLanguage = 'en';

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
          vacancy: vacancyEn,
          toast: toastEn,
          notFound: notFoundEn,
          button: buttonEn,
          home: homeEn,
          profile: profileEn,
          myVacancies: myVacanciesEn,
          settings: settingsEn,
          contact: contactEn,
        },
      },
      ka: {
        translation: {
          auth: authKa,
          footer: footerKa,
          navigation: navKa,
          vacancy: vacancyKa,
          toast: toastKa,
          notFound: notFoundKa,
          button: buttonKa,
          home: homeKa,
          profile: profileKa,
          myVacancies: myVacanciesKa,
          settings: settingsKa,
          contact: contactKa,
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
