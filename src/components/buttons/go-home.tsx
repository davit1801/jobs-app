import { Button } from '@/components/ui/button';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const GoHome: React.FC = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <Link to={`/${lang}`}>
      <Button>{t('button.go-home')}</Button>
    </Link>
  );
};

export default GoHome;
