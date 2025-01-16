import { Database } from '@/supabase/database.types';
import { PostgrestError } from '@supabase/supabase-js';

export type FillProfileError = {
  error: PostgrestError | null;
};

export type UserProfileTypes =
  | Database['public']['Tables']['profiles']['Row']
  | null;

export type UserProfilePayload =
  Database['public']['Tables']['profiles']['Row'];
