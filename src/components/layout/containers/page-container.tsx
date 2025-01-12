import React, { PropsWithChildren } from 'react';

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto w-full max-w-[1280px]">{children}</div>;
};

export default PageContainer;
