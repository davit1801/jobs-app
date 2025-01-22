import ControlledInputField from '@/components/form-elements/controlled-input-field';
import ControlledTextAreaField from '@/components/form-elements/controlled-textarea-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useI18nLang from '@/hooks/use-i18n-lang';
import { contactFormSchema } from '@/pages/contact/schema';
import { ContactFormValues } from '@/pages/contact/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactForm: React.FC = () => {
  const { t } = useI18nLang();
  const { control, handleSubmit, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
  });

  const handleFormSubmit: SubmitHandler<ContactFormValues> = (formFields) => {
    console.log(formFields);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex w-full flex-col gap-3">
            <Label htmlFor="first_name">{t('contact.first-name')}</Label>
            <ControlledInputField
              name="first_name"
              control={control}
              placeholder={t('contact.placeholder.first-name')}
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <Label htmlFor="last_name">{t('contact.last-name')}</Label>
            <ControlledInputField
              name="last_name"
              control={control}
              placeholder={t('contact.placeholder.last-name')}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="email">{t('contact.email')}</Label>
          <ControlledInputField
            name="email"
            control={control}
            autoComplete="email"
            placeholder={t('contact.placeholder.email')}
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="message">{t('contact.message')}</Label>
          <ControlledTextAreaField
            name="message"
            control={control}
            placeholder={t('contact.placeholder.message')}
            rows={8}
          />
        </div>

        <Button type="submit" className="self-start">
          {t('button.send-message')}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
