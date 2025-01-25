import React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import useI18nLang from '@/hooks/use-i18n-lang';
import InputFieldError from '@/components/errors/Input-field-error';
import { Textarea } from '@/components/ui/textarea';

type ControlledTextAreaProps<T extends FieldValues> = {
  className?: string;
  name: Path<T>;
  control: Control<T>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ControlledTextAreaField = <T extends FieldValues>({
  name,
  control,
  className,
  ...props
}: ControlledTextAreaProps<T>) => {
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
