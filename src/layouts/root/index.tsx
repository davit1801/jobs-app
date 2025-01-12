import useAuth from '@/hooks/use-auth';
import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/toaster';

const RootLayout: React.FC = () => {
  useAuth();
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default RootLayout;
