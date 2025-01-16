import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const ProfilePageView = lazy(
  () => import('@/pages/account/views/profile/index'),
);

const ProfilePageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <ProfilePageView />
  </Suspense>
);

export default ProfilePageViewLoader;
