import useI18nLang from '@/hooks/use-i18n-lang';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

const IsUnauthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const location = useLocation();
  const { lang } = useI18nLang();

  if (!user) {
    return (
      <Navigate
        state={{ from: location }}
        to={`/${lang}/${AUTH_PATHS.SIGN_IN}`}
      />
    );
  }

  return children || <Outlet />;
};

export default IsUnauthorizedGuard;
