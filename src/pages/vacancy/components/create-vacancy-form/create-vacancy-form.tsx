import { WORK_CATEGORY_VALUES } from '@/assets/data/select-elements-data/work-category';
import { WORK_EXPERIENCE_VALUES } from '@/assets/data/select-elements-data/work-experience';
import { WORK_TYPES_VALUES } from '@/assets/data/select-elements-data/work-type';
import ControlledInputField from '@/components/form/controlled-input-field';
import ControlledTextAreaField from '@/components/form/controlled-textarea-field';
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
import { useCreateVacancy } from '@/react-query/mutation/vacancies';
import { sessionAtom } from '@/store/auth';
import { CreateVacancyFormFields } from '@/supabase/vacancies/index.types';
import { useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const CreateVacancyForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: createVacancyFormDefaultValues,
  });
  const session = useAtomValue(sessionAtom);
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

  const handleFormSubmit = (formFields: CreateVacancyFormFields) => {
    if (session) {
      mutate({ formFields: formFields, user_id: session?.user.id });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>Work category</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select work category" />
                </SelectTrigger>
                <SelectContent>
                  {WORK_CATEGORY_VALUES.map((value) => (
                    <SelectItem value={value.id} key={value.id}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>Work type</Label>
          <Controller
            name="work_type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select work type" />
                </SelectTrigger>
                <SelectContent>
                  {WORK_TYPES_VALUES.map((value) => (
                    <SelectItem value={value.value} key={value.id}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3">
          <Label>Work experience</Label>
          <Controller
            name="work_experience"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select work experience" />
                </SelectTrigger>
                <SelectContent>
                  {WORK_EXPERIENCE_VALUES.map((value) => (
                    <SelectItem value={value.value} key={value.id}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Min Salery</Label>
          <ControlledInputField
            type="number"
            name="salary_start"
            control={control}
            placeholder="Minimum Salary"
            valueAsNumber
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>Max Salery</Label>
          <ControlledInputField
            type="number"
            name="salary_end"
            control={control}
            placeholder="Maximum Salary"
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
        Post Job
      </Button>
    </form>
  );
};

export default CreateVacancyForm;
