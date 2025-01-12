import MainLayout from '@/layouts/main';
import RootLayout from '@/layouts/root';
import LangGuard from '@/router/guards/LangGuard';
import { AUTH_ROUTES } from '@/router/routes/auth';
import { MAIN_ROUTES } from '@/router/routes/main';
import i18next from 'i18next';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<Navigate to={`/${i18next.language || 'en'}`} replace />}
        />
        <Route path=":lang" element={<LangGuard />}>
          <Route element={<MainLayout />}>{MAIN_ROUTES}</Route>
          {...AUTH_ROUTES}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
