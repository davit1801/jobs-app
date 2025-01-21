import { Database } from '@/supabase/database.types';

export type SingleVacancy = Database['public']['Tables']['vacancies']['Row'];

export type CreateUpdateVacancyFormFields = {
  category: string;
  description_en: string;
  description_ka: string;
  salary_end: number | null;
  salary_start: number | null;
  title_en: string;
  title_ka: string;
  work_experience: string;
  work_type: string;
};

export type CreateVacancyPayload = {
  formFields: CreateUpdateVacancyFormFields;
  user_id: string;
};

export type UpdateVacancyPayload = {
  updatedFields: CreateUpdateVacancyFormFields;
  vacancy_id: number;
};

export type DeleteVacancyPayload = {
  vacancy_id: number;
};
