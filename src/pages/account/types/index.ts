import { SingleVacancy } from '@/supabase/vacancies/index.types';

export type ProfileFormValues = {
  avatar_url: string;
  website_url: string;
  full_name_ka: string;
  full_name_en: string;
  company_name_en: string;
  company_name_ka: string;
  address_en: string;
  address_ka: string;
  phone: string;
};

export type MyVacancyEditFormProps = {
  vacancy: SingleVacancy;
};

export type ChangePasswordFormValues = {
  new_password: string;
  confirm_password: string;
};
