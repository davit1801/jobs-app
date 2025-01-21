import { Card } from '@/components/ui/card';
import useI18nLang from '@/hooks/use-i18n-lang';
import CreateVacancyForm from '@/pages/vacancy/components/create-vacancy-form/create-vacancy-form';
import React from 'react';

const CreateVacancyView: React.FC = () => {
  const { t } = useI18nLang();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-lg md:text-2xl">
        {t('vacancy.create-vacancy-title')}
      </h2>
      <Card className="flex max-w-2xl border p-8">
        <CreateVacancyForm />
      </Card>
    </div>
  );
};

export default CreateVacancyView;
