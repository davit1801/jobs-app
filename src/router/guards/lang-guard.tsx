import React from 'react';
import { useParams, Navigate, Outlet } from 'react-router';
import { defaultLanguage, SUPPORTED_LANGUAGES } from '@/i18n';
import i18next from 'i18next';

const LangGuard: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  if (!SUPPORTED_LANGUAGES.includes(lang as string)) {
    i18next.changeLanguage(defaultLanguage);
    document.documentElement.lang = defaultLanguage;
    return <Navigate to={`/${defaultLanguage}`} />;
  }

  return <Outlet />;
};

export default LangGuard;
