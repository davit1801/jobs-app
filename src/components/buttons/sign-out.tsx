import useI18nLang from '@/hooks/use-i18n-lang';
import { useToast } from '@/hooks/use-toast';
import { useUserSignOut } from '@/react-query/mutation/auth';

import React from 'react';
import { useNavigate } from 'react-router';

const SignOutButton: React.FC = () => {
  const { t, lang } = useI18nLang();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate } = useUserSignOut({
    mutationOptions: {
      onSuccess: () => {
        navigate(`/${lang}`);
        toast({ description: t('toast.success.sign-out') });
      },
      onError: (error) => {
        console.error('Login failed:', error);
        toast({
          description: t('toast.error.sign-out'),
          variant: 'destructive',
        });
      },
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return (
    <button onClick={handleLogout} className="w-full cursor-pointer text-left">
      {t('button.sign-out')}
    </button>
  );
};

export default SignOutButton;
