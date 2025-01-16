import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const SettingsPageView = lazy(
  () => import('@/pages/account/views/settings/index'),
);

const SettingsPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <SettingsPageView />
  </Suspense>
);

export default SettingsPageViewLoader;
