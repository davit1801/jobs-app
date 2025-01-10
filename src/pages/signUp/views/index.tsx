import useTranslationLang from '@/hooks/useCurrentLang';
import RegisterForm from '@/pages/signUp/components/signUpForm/SignUpForm';
import React from 'react';

const SignUpView: React.FC = () => {
  const { t } = useTranslationLang();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="md:space-y-6 w-full max-w-sm space-y-4 rounded-md border px-8 py-12 shadow-md">
        <h1 className="md:text-2xl mb-8 text-center text-xl font-bold">
          {t('auth.register-title')}
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUpView;
