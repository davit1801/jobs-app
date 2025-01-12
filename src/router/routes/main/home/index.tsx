import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const HomePageView = lazy(() => import('@/pages/home/views/index'));

const HomePageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <HomePageView />
  </Suspense>
);

export default HomePageViewLoader;
