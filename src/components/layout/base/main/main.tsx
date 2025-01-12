import PageContainer from '@/components/layout/containers/page-container';
import React, { PropsWithChildren } from 'react';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-grow p-8">
      <PageContainer>{children}</PageContainer>
    </main>
  );
};

export default Main;
