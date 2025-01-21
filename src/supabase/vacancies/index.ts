import { supabase } from '@/supabase';
import {
  CreateVacancyPayload,
  DeleteVacancyPayload,
  UpdateVacancyPayload,
} from '@/supabase/vacancies/index.types';

export const getVacanciesList = async (searchText: string) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .select('*')
      .order('id')
      .or(`title_en.ilike.%${searchText}%,title_ka.ilike.%${searchText}%`);

    if (error) throw error;

    return data;
  } catch (err) {
    console.error('Error fetching vacancies:', err);
    throw err;
  }
};

export const getVacanciesListByUserId = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .select('*')
      .eq('user_id', userId)
      .order('created_at');

    if (error) throw error;

    return data;
  } catch (err) {
    console.error('Error fetching vacancies:', err);
    throw err;
  }
};

export const createVacancy = async ({
  formFields,
  user_id,
}: CreateVacancyPayload) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .insert({ user_id, ...formFields });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log('Error creating vacancy');
    throw error;
  }
};

export const updateVacancy = async ({
  updatedFields,
  vacancy_id,
}: UpdateVacancyPayload) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .update(updatedFields)
      .eq('id', vacancy_id);

    if (error) throw error;

    return data;
  } catch (error) {
    console.log('Error creating blog');
    throw error;
  }
};

export const getSingleVacancyById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .select()
      .eq('id', +id)
      .single();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error('Error fetching vacancy:', err);
    throw err;
  }
};

export const deleteMyVacancy = async ({ vacancy_id }: DeleteVacancyPayload) => {
  try {
    const { data, error } = await supabase
      .from('vacancies')
      .delete()
      .eq('id', vacancy_id);

    if (error) throw error;

    return data;
  } catch (err) {
    console.error('Error deleting vacancy:', err);
    throw err;
  }
};
