import { PostgrestError } from '@supabase/supabase-js';

export type FillProfileError = {
  error: PostgrestError | null;
};

export type UserProfileTypes = {
  address_en: string | null;
  address_ka: string | null;
  avatar_url: string | null;
  company_name_en: string | null;
  company_name_ka: string | null;
  full_name_en: string | null;
  full_name_ka: string | null;
  id: string;
  phone: string | null;
  username: string | null;
  website: string | null;
} | null;

export type UserProfilePayload = {
  address_en: string | null;
  address_ka: string | null;
  avatar_url: string | null;
  company_name_en: string | null;
  company_name_ka: string | null;
  full_name_en: string | null;
  full_name_ka: string | null;
  id: string;
  phone: string | null;
  username: string | null;
  website: string | null;
};
