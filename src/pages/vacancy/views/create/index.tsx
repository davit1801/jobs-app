import CreateVacancyForm from '@/pages/vacancy/components/create-vacancy-form/create-vacancy-form';
import React from 'react';

const CreateVacancyView: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-xl">
        <CreateVacancyForm />
      </div>
    </div>
  );
};

export default CreateVacancyView;
