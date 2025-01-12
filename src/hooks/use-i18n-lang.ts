import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const useI18nLang = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return { lang, t };
};

export default useI18nLang;
