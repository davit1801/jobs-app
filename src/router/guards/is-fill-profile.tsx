import useI18nLang from '@/hooks/use-i18n-lang';
import { useToast } from '@/hooks/use-toast';
import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';
import { userProfileAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router';

const IsFillProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const profile = useAtomValue(userProfileAtom);
  const { lang, t } = useI18nLang();
  const { toast } = useToast();

  if (profile && !profile?.company_name_en && !profile?.company_name_ka) {
    toast({
      description: t('toast.error.add-vacancy-guard'),
      variant: 'destructive',
    });
    return (
      <Navigate
        to={`/${lang}/${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.PROFILE}`}
      />
    );
  }

  return children || <Outlet />;
};

export default IsFillProfileGuard;
