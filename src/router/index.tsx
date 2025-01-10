import SignInView from '@/pages/signIn/views';
import SignUpView from '@/pages/signUp/views';
import LangGuard from '@/router/guards/LangGuard';
import i18next from 'i18next';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${i18next.language || 'en'}`} replace />}
      />
      <Route path=":lang" element={<LangGuard />}>
        <Route path="login" element={<SignInView />} />
        <Route path="register" element={<SignUpView />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
