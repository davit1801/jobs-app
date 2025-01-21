import GoHome from '@/components/buttons/go-home';
import LangSwitcher from '@/components/buttons/lang-switcher';
import { ThemeToggle } from '@/components/buttons/theme-toggle';
import useI18nLang from '@/hooks/use-i18n-lang';
import RegisterForm from '@/pages/sign-up/components/sign-up-form/sign-up-form';
import React from 'react';

const SignUpView: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-8">
      <div className="w-full max-w-sm space-y-4 rounded-md border px-8 py-12 shadow-md md:space-y-6">
        <h1 className="mb-8 text-center text-xl font-bold md:text-2xl">
          {t('auth.register-title')}
        </h1>
        <RegisterForm />

        <div className="flex gap-1">
          <LangSwitcher />
          <ThemeToggle />
          <GoHome />
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
