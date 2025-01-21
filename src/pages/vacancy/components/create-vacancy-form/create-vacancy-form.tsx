import { WORK_CATEGORY_VALUES } from '@/assets/data/select-elements-data/work-category';
import { WORK_EXPERIENCE_VALUES } from '@/assets/data/select-elements-data/work-experience';
import { WORK_TYPES_VALUES } from '@/assets/data/select-elements-data/work-type';
import InputFieldError from '@/components/errors/Input-field-error';
import ControlledInputField from '@/components/form-elements/controlled-input-field';
import ControlledTextAreaField from '@/components/form-elements/controlled-textarea-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useI18nLang from '@/hooks/use-i18n-lang';
import { useToast } from '@/hooks/use-toast';
import { createVacancyFormDefaultValues } from '@/pages/vacancy/components/create-vacancy-form/default-values';
import { createVacancyFormSchema } from '@/pages/vacancy/schema';
import { useCreateVacancy } from '@/react-query/mutation/vacancies';
import { userAtom } from '@/store/auth';
import { CreateUpdateVacancyFormFields } from '@/supabase/vacancies/index.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const CreateVacancyForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(createVacancyFormSchema),
    defaultValues: createVacancyFormDefaultValues,
  });
  const user = useAtomValue(userAtom);
  const { lang, t } = useI18nLang();
  const naviagte = useNavigate();
  const { toast } = useToast();

  const { mutate, isPending } = useCreateVacancy({
    mutationOptions: {
      onSuccess: () => {
        reset();
        naviagte(`/${lang}`);
        toast({ description: t('toast.success.create-vacancy') });
      },
      onError: () => {
        toast({
          description: t('toast.error.create-vacancy'),
          variant: 'destructive',
        });
      },
    },
  });

  const handleFormSubmit = (formFields: CreateUpdateVacancyFormFields) => {
    if (user) {
      mutate({ formFields: formFields, user_id: user.id });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>{t('vacancy.vacancy-category')}</Label>
          <Controller
            name="category"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t('vacancy.placeholder.category')}
                  />
                </SelectTrigger>
                <SelectContent>
                  {WORK_CATEGORY_VALUES.map((value) => (
                    <SelectItem value={value.value} key={value.id}>
                      {t(`vacancy.category.${value.value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
                {error && <InputFieldError message={t(`${error.message}`)} />}
              </Select>
            )}
          />
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>{t('vacancy.vacancy-type')}</Label>
          <Controller
            name="work_type"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('vacancy.placeholder.type')} />
                </SelectTrigger>
                <SelectContent>
                  {WORK_TYPES_VALUES.map((value) => (
                    <SelectItem value={value.value} key={value.id}>
                      {t(`vacancy.work-type.${value.value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
                {error && <InputFieldError message={t(`${error.message}`)} />}
              </Select>
            )}
          />
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>{t('vacancy.vacancy-experience')}</Label>
          <Controller
            name="work_experience"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t('vacancy.placeholder.experience')}
                  />
                </SelectTrigger>
                <SelectContent>
                  {WORK_EXPERIENCE_VALUES.map((value) => (
                    <SelectItem value={value.value} key={value.id}>
                      {t(`vacancy.experience.${value.value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
                {error && <InputFieldError message={t(`${error.message}`)} />}
              </Select>
            )}
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>{t('vacancy.min-salary')}</Label>
          <ControlledInputField
            type="number"
            name="salary_start"
            control={control}
            min={1}
            valueAsNumber
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>{t('vacancy.max-salary')}</Label>
          <ControlledInputField
            type="number"
            name="salary_end"
            control={control}
            min={1}
            valueAsNumber
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Job Title</Label>
          <ControlledInputField
            name="title_en"
            control={control}
            placeholder="Enter title"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>სამუშაოს დასახელება</Label>
          <ControlledInputField
            name="title_ka"
            control={control}
            placeholder="შეავსეთ სამუშაოს დასახელება"
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Job Description</Label>
          <ControlledTextAreaField
            name="description_en"
            control={control}
            placeholder="Enter work description"
            rows={5}
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>სამუშაოს აღწერა</Label>
          <ControlledTextAreaField
            name="description_ka"
            control={control}
            placeholder="შეავსეთ სამუშაოს აღწერა"
            rows={5}
          />
        </div>
      </div>

      <Button className="self-end" disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        {t('button.post-vacancy')}
      </Button>
    </form>
  );
};

export default CreateVacancyForm;
