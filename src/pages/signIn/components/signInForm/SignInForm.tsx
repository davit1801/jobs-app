import ControlledField from '@/components/form/ControlledField';
import { Button } from '@/components/ui/button';
import useTranslationLang from '@/hooks/useCurrentLang';
import { SignInFormSchema } from '@/pages/signIn/schemas';
import { SignInFormValues } from '@/pages/signIn/types';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useUserSignIn } from '@/react-query/mutation/auth';
import { Label } from '@/components/ui/label';
import InputFieldError from '@/components/errors/InputFieldError';

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { t, lang } = useTranslationLang();
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending, isError } = useUserSignIn({
    mutationOptions: {
      onSuccess: () => {
        navigate(`/${lang}`);
      },
    },
  });

  const handleFormSubmit: SubmitHandler<SignInFormValues> = (formFields) => {
    mutate(formFields);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="block text-sm/6 font-medium">
          {t('auth.email')}
        </Label>
        <ControlledField
          name="email"
          autoComplete="email"
          control={control}
          placeholder="name@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="block text-sm/6 font-medium">
          {t('auth.password')}
        </Label>

        <ControlledField
          name="password"
          type="password"
          autoComplete="current-password"
          control={control}
          placeholder="••••••••"
        />
      </div>

      {isError && <InputFieldError message={t('auth.login-error')} />}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        {t('auth.sign-in')}
      </Button>

      <p className="flex flex-col items-center gap-2 text-sm font-light text-muted-foreground sm:flex-row sm:items-start">
        <span>{t('auth.dont-have')} </span>
        <span>
          <Link
            to={`/${lang}/register`}
            className="font-medium text-foreground hover:underline"
          >
            {t('auth.sign-up')}
          </Link>
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
