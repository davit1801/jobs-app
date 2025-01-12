import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const SignInPageView = lazy(() => import('@/pages/sign-in/views/index'));

const SignInPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <SignInPageView />
  </Suspense>
);

export default SignInPageViewLoader;
