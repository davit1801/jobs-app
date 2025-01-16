import { supabase } from '@/supabase';
import { CreateVacancyFormFields } from '@/supabase/vacancies/index.types';

export const getVacanciesList = async () => {
  try {
    const { data } = await supabase
      .from('vacancies')
      .select('*')
      .order('id')
      // .or(`title_en.ilike.%${searchText}%,title_ka.ilike.%${searchText}%`)
      .throwOnError();

    return data;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
};

export const getVacanciesListByUserId = async () => {
  try {
    const { data } = await supabase
      .from('vacancies')
      .select('*')
      .eq('user_id', '8e59846d-075d-4612-a69f-d4c2ac089524')
      .order('id')
      // .or(`title_en.ilike.%${searchText}%,title_ka.ilike.%${searchText}%`)
      .throwOnError();

    return data;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
};

export const createVacancy = async ({
  formFields,
  user_id,
}: {
  formFields: CreateVacancyFormFields;
  user_id: string;
}) => {
  try {
    const { data } = await supabase
      .from('vacancies')
      .insert({ user_id, ...formFields })
      .throwOnError();

    return data;
  } catch (error) {
    console.log('Error creating blog');
    throw error;
  }
};

// export const updateVacancy = async ({ updatedFields, id }) => {
//   try {
//     const { data } = await supabase
//       .from('vacancies')
//       .update(updatedFields)
//       .eq('id', id)
//       .throwOnError();

//     return data;
//   } catch (error) {
//     console.log('Error creating blog');
//     throw error;
//   }
// };

export const getSingleVacancyById = async (id: string) => {
  try {
    const { data } = await supabase
      .from('vacancies')
      .select()
      .eq('id', +id)
      .single()
      .throwOnError();

    return data;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
};
