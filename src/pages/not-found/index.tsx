import GoHome from '@/components/buttons/go-home';
import PageContainer from '@/components/layout/containers/page-container';
import useI18nLang from '@/hooks/use-i18n-lang';
import React from 'react';

const NotFoundView: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <PageContainer>
        <div className="px-6 py-24 text-center sm:py-32 lg:px-8">
          <p className="text-3xl font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
            {t('notFound.not')}
          </h1>
          <p className="mt-6 text-lg font-medium sm:text-xl/8">
            {t('notFound.sorry')}
          </p>
          <div className="mt-10">
            <GoHome />
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default NotFoundView;
