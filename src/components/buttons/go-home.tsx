import { Button } from '@/components/ui/button';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

type Props = {
  className?: string;
};

const GoHome: React.FC<Props> = ({ className }) => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <Link to={`/${lang}`}>
      <Button variant="link" className={className}>
        {t('button.go-home')}
      </Button>
    </Link>
  );
};

export default GoHome;
