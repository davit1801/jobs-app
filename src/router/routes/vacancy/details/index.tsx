import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const VacancyDetailsPageView = lazy(
  () => import('@/pages/vacancy/views/details/index'),
);

const VacancyDetailsPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <VacancyDetailsPageView />
  </Suspense>
);

export default VacancyDetailsPageViewLoader;
