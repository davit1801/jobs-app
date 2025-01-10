import InputFieldError from '@/components/errors/InputFieldError';
import ControlledField from '@/components/form/ControlledField';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useTranslationLang from '@/hooks/useCurrentLang';
import { SignUpFormSchema } from '@/pages/signUp/schemas';
import { SignUpFormValues } from '@/pages/signUp/types';
import { useUserSignUp } from '@/react-query/mutation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { t, lang } = useTranslationLang();
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending, isError } = useUserSignUp({
    mutationOptions: {
      onSuccess: () => {
        alert(t('auth.succes-register'));
        navigate(`/${lang}/login`);
      },
    },
  });

  const handleFormSubmit: SubmitHandler<SignUpFormValues> = (formFields) => {
    console.log(formFields);
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
        <Label htmlFor="email" className="block text-sm/6 font-medium">
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

      {isError && <InputFieldError message={t('auth.sign-up-error')} />}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        {t('auth.sign-up')}
      </Button>

      <p className="flex flex-col items-center gap-2 text-sm font-light text-muted-foreground sm:flex-row sm:items-start">
        <span>{t('auth.already-have')} </span>

        <span>
          <Link
            to={`/${lang}/login`}
            className="font-medium text-foreground hover:underline"
          >
            {t('auth.sign-in')}
          </Link>
        </span>
      </p>
    </form>
  );
};

export default RegisterForm;
