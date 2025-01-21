import { userAtom } from '@/store/auth';
import i18next from 'i18next';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

const IsAuthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const lang = i18next.language;
  const location = useLocation();
  const toNavigate = location?.state?.from?.pathname || `/${lang}`;

  if (user) {
    return <Navigate to={`${toNavigate}`} />;
  }

  return children || <Outlet />;
};

export default IsAuthorizedGuard;
