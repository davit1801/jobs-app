import useI18nLang from '@/hooks/use-i18n-lang';
import React from 'react';
import heroImg from '~/public/hero-img.png';

const HeroSection: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <section className="p-6 md:p-14">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex w-full max-w-xl flex-col gap-6 break-words md:w-1/2">
          <h1 className="text-2xl font-medium md:text-5xl">
            {t('home.hero-title')}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {t('home.hero-description')}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={heroImg} alt="a man is working on a computer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
