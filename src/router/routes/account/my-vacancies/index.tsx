import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const MyVacanciesPageView = lazy(
  () => import('@/pages/account/views/my-vacancies/index'),
);

const MyVacanciesPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <MyVacanciesPageView />
  </Suspense>
);

export default MyVacanciesPageViewLoader;
