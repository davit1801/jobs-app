import { useUserSignOut } from '@/react-query/mutation/auth';
import { MAIN_PATHS } from '@/router/routes/main/index.types';
import i18next from 'i18next';
import React from 'react';
import { useNavigate } from 'react-router';

const SignOutButton: React.FC = () => {
  const lang = i18next.language;
  const navigate = useNavigate();

  const { mutate } = useUserSignOut({
    mutationOptions: {
      onSuccess: () => {
        navigate(`${MAIN_PATHS.HOME}${lang}`);
      },
      onError: (error) => console.error('Login failed:', error),
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return (
    <button onClick={handleLogout} className="w-full cursor-pointer text-left">
      Sign out
    </button>
  );
};

export default SignOutButton;
