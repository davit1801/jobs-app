import { Spinner } from '@/components/ui/spinner';
import MainLayout from '@/layouts/main';
import RootLayout from '@/layouts/root';
import IsAuthorizedGuard from '@/router/guards/is-authorized-guard';
import IsUnauthorizedGuard from '@/router/guards/is-unauthorized-guard';
import LangGuard from '@/router/guards/lang-guard';
import { ACCOUNT_ROUTES } from '@/router/routes/account';
import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';
import { AUTH_ROUTES } from '@/router/routes/auth';
import { MAIN_ROUTES } from '@/router/routes/main';
import { VACANCY_ROUTES } from '@/router/routes/vacancy';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import i18next from 'i18next';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

const NotFoundPageView = lazy(() => import('@/pages/not-found/views/index'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<Navigate to={`/${i18next.language || 'en'}`} replace />}
        />
        <Route path=":lang" element={<LangGuard />}>
          <Route element={<MainLayout />}>
            {MAIN_ROUTES}
            <Route path={VACANCY_PATHS.VACANCY}>{...VACANCY_ROUTES}</Route>
            <Route
              path={ACCOUNT_PATHS.ACCOUNT}
              element={<IsUnauthorizedGuard />}
            >
              {...ACCOUNT_ROUTES}
            </Route>
          </Route>
          <Route element={<IsAuthorizedGuard />}>{...AUTH_ROUTES}</Route>
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<Spinner />}>
            <NotFoundPageView />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
