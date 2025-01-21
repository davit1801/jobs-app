import { supabase } from '@/supabase';
import { UserProfilePayload } from '@/supabase/profiles/index.types';

export const getUserProfile = async (id: string) => {
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single()
      .throwOnError();

    return profile;
  } catch (error) {
    console.error(
      'An unexpected error occurred while fetching profile information:',
      error,
    );
    throw error;
  }
};

export const fillUserProfile = async (payload: UserProfilePayload) => {
  try {
    const { data, error } = await supabase.from('profiles').upsert(payload);

    if (error) {
      console.error('Error updating profile:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(
      'An unexpected error occurred while updating the profile:',
      err,
    );
    throw err;
  }
};
