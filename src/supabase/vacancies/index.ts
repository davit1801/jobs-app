import { supabase } from '@/supabase';
import {
  CreateVacancyPayload,
  DeleteVacancyPayload,
  UpdateVacancyPayload,
} from '@/supabase/vacancies/index.types';

export const getVacanciesList = async (
  searchText: string,
  page: number = 1,
) => {
  const limit = 3;
  const offset = (page - 1) * limit;
  try {
    const { data, error, count } = await supabase
      .from('vacancies')
      .select('*', { count: 'exact' })
      .order('id')
      .or(`title_en.ilike.%${searchText}%,title_ka.ilike.%${searchText}%`)
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return { data, count };
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
    console.error('Error creating vacancy');
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
    console.error('Error creating blog');
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
