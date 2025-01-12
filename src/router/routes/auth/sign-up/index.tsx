import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const SignUpPageView = lazy(() => import('@/pages/sign-up/views/index'));

const SignUpPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <SignUpPageView />
  </Suspense>
);

export default SignUpPageViewLoader;
