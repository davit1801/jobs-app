import ControlledInputField from '@/components/form/controlled-input-field';
import ControlledTextAreaField from '@/components/form/controlled-textarea-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { contactFormSchema } from '@/pages/contact/schema';
import { ContactFormValues } from '@/pages/contact/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactForm: React.FC = () => {
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
            <Label htmlFor="first_name">First Name</Label>
            <ControlledInputField
              name="first_name"
              control={control}
              placeholder="Your name"
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <Label htmlFor="last_name">Last Name</Label>
            <ControlledInputField
              name="last_name"
              control={control}
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <ControlledInputField
            name="email"
            control={control}
            autoComplete="email"
            placeholder="Your email"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label htmlFor="message">Message</Label>
          <ControlledTextAreaField
            name="message"
            control={control}
            placeholder="Your message"
            rows={8}
          />
        </div>

        <Button type="submit" className="self-start">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
