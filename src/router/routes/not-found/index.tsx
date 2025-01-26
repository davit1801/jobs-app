import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const NotFoundPageView = lazy(() => import('@/pages/not-found/views/index'));

const NotFoundViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <NotFoundPageView />
  </Suspense>
);

export default NotFoundViewLoader;
