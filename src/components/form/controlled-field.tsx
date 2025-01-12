/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import useI18nLang from '@/hooks/use-i18n-lang';
import InputFieldError from '@/components/errors/Input-field-error';

type ControlledInputProps = {
  className?: string;
  name: string;
  control: Control<any>;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ControlledField: React.FC<ControlledInputProps> = ({
  name,
  control,
  className,
  type,
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
            <Input
              id={name}
              name={name}
              type={type}
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

export default ControlledField;
