/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, Control } from 'react-hook-form';
import useI18nLang from '@/hooks/use-i18n-lang';
import InputFieldError from '@/components/errors/Input-field-error';
import { Textarea } from '@/components/ui/textarea';

type ControlledTextAreaProps = {
  className?: string;
  name: string;
  control: Control<any>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ControlledTextAreaField: React.FC<ControlledTextAreaProps> = ({
  name,
  control,
  className,
  ...props
}) => {
  const { t } = useI18nLang();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <Textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              className={className}
              {...props}
            />

            {error && <InputFieldError message={t(`${error.message}`)} />}
          </>
        );
      }}
    />
  );
};

export default ControlledTextAreaField;
