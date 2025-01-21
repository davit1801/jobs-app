import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const AboutPageView = lazy(() => import('@/pages/about/views/index'));

const AboutPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <AboutPageView />
  </Suspense>
);

export default AboutPageViewLoader;
