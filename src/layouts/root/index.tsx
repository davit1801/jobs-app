import useAuth from '@/hooks/use-auth';
import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/toaster';
import { Spinner } from '@/components/ui/spinner';

const RootLayout: React.FC = () => {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Outlet />
          <Toaster />
        </>
      )}
    </>
  );
};

export default RootLayout;
