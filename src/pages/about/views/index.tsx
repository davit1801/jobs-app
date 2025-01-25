import useI18nLang from '@/hooks/use-i18n-lang';
import HowItWorkList from '@/pages/about/components/how-it-work-list';
import React from 'react';

const AboutView: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-8">
      <div className="py-8 text-center">
        <h1 className="pb-4 text-xl font-bold md:text-3xl">
          {t('about.heading')}
        </h1>
        <p className="text-muted-foreground md:text-lg">{t('about.title')}</p>
      </div>

      <HowItWorkList />
    </div>
  );
};

export default AboutView;
