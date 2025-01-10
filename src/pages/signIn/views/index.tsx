import useTranslationLang from '@/hooks/useCurrentLang';
import SignInForm from '@/pages/signIn/components/signInForm/SignInForm';
import React from 'react';

const SignInView: React.FC = () => {
  const { t } = useTranslationLang();

  return (
    <div className="bg- flex min-h-screen items-center justify-center px-6 py-8">
      <div className="md:space-y-6 w-full max-w-sm space-y-4 rounded-md border px-8 py-12 shadow-md">
        <h1 className="md:text-2xl mb-8 text-center text-xl font-bold">
          {t('auth.login-title')}
        </h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInView;
