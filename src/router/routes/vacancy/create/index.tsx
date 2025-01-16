import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const VacancyCreatePageView = lazy(
  () => import('@/pages/vacancy/views/create/index'),
);

const VacancyCreatePageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <VacancyCreatePageView />
  </Suspense>
);

export default VacancyCreatePageViewLoader;
