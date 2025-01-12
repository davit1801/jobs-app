import Footer from '@/components/layout/base/footer';
import Header from '@/components/layout/base/header';
import Main from '@/components/layout/base/main/main';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
