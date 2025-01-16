import { Database } from '@/supabase/database.types';

export type SingleVacancy = Database['public']['Tables']['vacancies']['Row'];

export type CreateVacancyFormFields = {
  category: string;
  description_en: string;
  description_ka: string;
  salary_end: number;
  salary_start: number;
  title_en: string;
  title_ka: string;
  work_experience: string;
  work_type: string;
};

export type CreateVacancyPayload = {
  formFields: CreateVacancyFormFields;
  user_id: string;
};
