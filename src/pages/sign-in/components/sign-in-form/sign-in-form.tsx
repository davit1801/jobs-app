import ControlledInputField from '@/components/form-elements/controlled-input-field';
import { Button } from '@/components/ui/button';
import useI18nLang from '@/hooks/use-i18n-lang';
import { SignInFormSchema } from '@/pages/sign-in/schema';
import { SignInFormValues } from '@/pages/sign-in/types';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useUserSignIn } from '@/react-query/mutation/auth';
import { Label } from '@/components/ui/label';
import InputFieldError from '@/components/errors/Input-field-error';
import { useToast } from '@/hooks/use-toast';
import { MAIN_PATHS } from '@/router/routes/main/index.enum';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';

const SignInForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, lang } = useI18nLang();
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
        navigate(`${MAIN_PATHS.HOME}${lang}`);
        toast({ description: t('toast.success.sing-in') });
      },
      onError: () => {
        toast({
          description: t('toast.error.sign-in'),
          variant: 'destructive',
        });
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
        <ControlledInputField
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

        <ControlledInputField
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

      <p className="flex flex-col items-center gap-2 text-sm font-light sm:flex-row sm:items-start">
        <span>{t('auth.dont-have')} </span>
        <span>
          <Link
            to={`/${lang}/${AUTH_PATHS.SIGN_UP}`}
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
