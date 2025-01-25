import React from 'react';
import ControlledInputField from '@/components/form-elements/controlled-input-field';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import useI18nLang from '@/hooks/use-i18n-lang';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordFormSchema } from '@/pages/account/schema';
import { ChangePasswordFormValues } from '@/pages/account/types';
import { useUpdateUserPassword } from '@/react-query/mutation/auth';
import { useToast } from '@/hooks/use-toast';

const ChangePasswordForm: React.FC = () => {
  const { toast } = useToast();
  const { t } = useI18nLang();
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      new_password: '',
      confirm_password: '',
    },
  });
  const { mutate, isPending } = useUpdateUserPassword({
    mutationOptions: {
      onSuccess: () => {
        toast({ description: t('toast.success.update-password') });
        reset();
      },
      onError: () => {
        toast({ description: t('toast.error.update-password') });
      },
    },
  });

  const handleFormSubmit = (formFields: ChangePasswordFormValues) => {
    mutate({ password: formFields.new_password });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="new_password">{t('settings.new-password')}</Label>
          <ControlledInputField
            name="new_password"
            control={control}
            type="password"
            autoComplete="new-password"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="confirm_password">
            {t('settings.confirm-new-password')}
          </Label>
          <ControlledInputField
            name="confirm_password"
            control={control}
            type="password"
            autoComplete="new-password"
          />
        </div>

        <Button className="sm:self-end" disabled={isPending}>
          {t('button.save-changes')}
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
