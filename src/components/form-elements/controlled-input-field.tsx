import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import useI18nLang from '@/hooks/use-i18n-lang';
import InputFieldError from '@/components/errors/Input-field-error';

type ControlledInputProps<T extends FieldValues> = {
  className?: string;
  name: Path<T>;
  control: Control<T>;
  type?: string;
  valueAsNumber?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ControlledInputField = <T extends FieldValues>({
  name,
  control,
  className,
  type,
  valueAsNumber = false,
  ...props
}: ControlledInputProps<T>) => {
  const { t } = useI18nLang();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <Input
              id={name as string}
              name={name as string}
              type={type}
              value={value}
              onChange={(e) =>
                onChange(valueAsNumber ? +e.target.value : e.target.value)
              }
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

export default ControlledInputField;
