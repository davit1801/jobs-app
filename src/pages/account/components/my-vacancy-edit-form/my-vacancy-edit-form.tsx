import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useI18nLang from '@/hooks/use-i18n-lang';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pencil } from 'lucide-react';
import { MyVacancyEditFormProps } from '@/pages/account/types';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { WORK_TYPES_VALUES } from '@/assets/data/select-elements-data/work-type';
import { WORK_EXPERIENCE_VALUES } from '@/assets/data/select-elements-data/work-experience';
import ControlledInputField from '@/components/form-elements/controlled-input-field';
import ControlledTextAreaField from '@/components/form-elements/controlled-textarea-field';
import { WORK_CATEGORY_VALUES } from '@/assets/data/select-elements-data/work-category';
import { useUpdateVacancy } from '@/react-query/mutation/vacancies';
import { CreateUpdateVacancyFormFields } from '@/supabase/vacancies/index.types';
import { queryClient } from '@/main';
import { VACANCIES_QUERY_KEYS } from '@/react-query/query/vacancies/index.enum';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { createVacancyFormSchema } from '@/pages/vacancy/schema';
import InputFieldError from '@/components/errors/Input-field-error';

const MyVacancyEditForm: React.FC<MyVacancyEditFormProps> = ({ vacancy }) => {
  const { t } = useI18nLang();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(createVacancyFormSchema),
    defaultValues: {
      title_en: vacancy.title_en || '',
      title_ka: vacancy.title_ka || '',
      description_en: vacancy.description_en || '',
      description_ka: vacancy.description_ka || '',
      work_type: vacancy.work_type || '',
      work_experience: vacancy.work_experience || '',
      category: vacancy.category || '',
      salary_start: vacancy.salary_start || 0,
      salary_end: vacancy.salary_end || 0,
    },
  });
  const { mutate, isPending } = useUpdateVacancy({
    mutationOptions: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [VACANCIES_QUERY_KEYS.VACANCIES],
        });
        setIsDialogOpen(false);
        toast({ description: t('toast.success.update-vacancy') });
      },
      onError: () => {
        toast({
          description: t('toast.error.update-vacancy'),
          variant: 'destructive',
        });
      },
    },
  });

  const handleFormSubmit = (formFields: CreateUpdateVacancyFormFields) => {
    mutate({ updatedFields: formFields, vacancy_id: vacancy.id });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger aria-label="edit">
        <Pencil className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('myVacancies.edit-vacancy')}</DialogTitle>
          <DialogDescription>{t('myVacancies.dialog-title')}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col gap-5 p-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-shrink-0 flex-col gap-3">
                <Label htmlFor="category">
                  {t('vacancy.vacancy-category')}
                </Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="w-full"
                        aria-label="select category"
                      >
                        <SelectValue
                          placeholder={t('vacancy.placeholder.category')}
                        />
                      </SelectTrigger>
                      <SelectContent id="category">
                        {WORK_CATEGORY_VALUES.map((value) => (
                          <SelectItem value={value.value} key={value.id}>
                            {t(`vacancy.category.${value.value}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      {error && (
                        <InputFieldError message={t(`${error.message}`)} />
                      )}
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
                      <SelectTrigger
                        className="w-full"
                        aria-label="select work type"
                      >
                        <SelectValue
                          placeholder={t('vacancy.placeholder.type')}
                        />
                      </SelectTrigger>
                      <SelectContent id="work_type">
                        {WORK_TYPES_VALUES.map((value) => (
                          <SelectItem value={value.value} key={value.id}>
                            {t(`vacancy.work-type.${value.value}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      {error && (
                        <InputFieldError message={t(`${error.message}`)} />
                      )}
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
                      <SelectTrigger
                        className="w-full"
                        aria-label="select work experience"
                      >
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
                      {error && (
                        <InputFieldError message={t(`${error.message}`)} />
                      )}
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="my-6 h-[1px] bg-border"></div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-3">
                <Label htmlFor="salary_start">{t('vacancy.min-salary')}</Label>
                <ControlledInputField
                  type="number"
                  name="salary_start"
                  control={control}
                  valueAsNumber
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Label htmlFor="salary_end">{t('vacancy.max-salary')}</Label>
                <ControlledInputField
                  type="number"
                  name="salary_end"
                  control={control}
                  valueAsNumber
                />
              </div>
            </div>

            <div className="my-6 h-[1px] bg-border"></div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-3">
                <Label htmlFor="title_en">Job Title</Label>
                <ControlledInputField
                  name="title_en"
                  control={control}
                  placeholder="Enter title"
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Label htmlFor="title_ka">სამუშაოს დასახელება</Label>
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
                <Label htmlFor="description_en">Job Description</Label>
                <ControlledTextAreaField
                  name="description_en"
                  control={control}
                  placeholder="Enter work description"
                  rows={5}
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Label htmlFor="description_ka">სამუშაოს აღწერა</Label>
                <ControlledTextAreaField
                  name="description_ka"
                  control={control}
                  placeholder="შეავსეთ სამუშაოს აღწერა"
                  rows={5}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {t('button.save-changes')}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MyVacancyEditForm;
