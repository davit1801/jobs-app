import InputFieldError from '@/components/errors/Input-field-error';
import ControlledInputField from '@/components/form/controlled-input-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import useI18nLang from '@/hooks/use-i18n-lang';
import { SignUpFormSchema } from '@/pages/sign-up/schema';
import { SignUpFormValues } from '@/pages/sign-up/types';
import { useUserSignUp } from '@/react-query/mutation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';

const RegisterForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t, lang } = useI18nLang();
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending, isError } = useUserSignUp({
    mutationOptions: {
      onSuccess: () => {
        navigate(`/${lang}/${AUTH_PATHS.SIGN_IN}`);
        toast({ description: t('toast.success.sign-up'), variant: 'default' });
      },
      onError: () => {
        toast({
          description: t('toast.error.sign-up'),
          variant: 'destructive',
        });
      },
    },
  });

  const handleFormSubmit: SubmitHandler<SignUpFormValues> = (formFields) => {
    mutate({ password: formFields.password, email: formFields.email });
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
        <Label htmlFor="email" className="block text-sm/6 font-medium">
          {t('auth.password')}
        </Label>
        <ControlledInputField
          name="password"
          type="password"
          autoComplete="new-password"
          control={control}
          placeholder="••••••••"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="confirmPassword"
          className="block text-sm/6 font-medium"
        >
          {t('auth.confirm-pass')}
        </Label>
        <ControlledInputField
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
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
            to={`/${lang}/${AUTH_PATHS.SIGN_IN}`}
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
