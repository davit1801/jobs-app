import { Spinner } from '@/components/ui/spinner';
import React, { lazy, Suspense } from 'react';

const ContactPageView = lazy(() => import('@/pages/contact/views/index'));

const ContactPageViewLoader: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <ContactPageView />
  </Suspense>
);

export default ContactPageViewLoader;
