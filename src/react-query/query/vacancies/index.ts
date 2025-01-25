import { VACANCIES_QUERY_KEYS } from '@/react-query/query/vacancies/index.enum';
import {
  getSingleVacancyById,
  getVacanciesList,
  getVacanciesListByUserId,
} from '@/supabase/vacancies';
import {
  SingleVacancy,
  VacanciesListRespone,
} from '@/supabase/vacancies/index.types';
import { PostgrestError } from '@supabase/supabase-js';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export const useGetVacanciesList = <T = VacanciesListRespone>(
  searchText: string,
  page?: number,
  {
    queryOpions: queryOptions,
  }: {
    queryOpions?: Omit<
      UseQueryOptions<VacanciesListRespone, PostgrestError, T>,
      'queryKey'
    >;
  } = {},
): UseQueryResult<T, PostgrestError> => {
  return useQuery<VacanciesListRespone, PostgrestError, T>({
    queryKey: [
      VACANCIES_QUERY_KEYS.VACANCIES,

      VACANCIES_QUERY_KEYS.VACANCIES_LIST,
      searchText,
      page,
    ],
    queryFn: () => getVacanciesList(searchText, page),
    ...queryOptions,
  });
};

export const useGetMyVacanciesList = <T = SingleVacancy[]>(
  userId: string,
  {
    queryOpions: queryOptions,
  }: {
    queryOpions?: Omit<
      UseQueryOptions<SingleVacancy[], PostgrestError, T>,
      'queryKey'
    >;
  } = {},
): UseQueryResult<T, PostgrestError> => {
  return useQuery<SingleVacancy[], PostgrestError, T>({
    queryKey: [
      VACANCIES_QUERY_KEYS.VACANCIES,
      VACANCIES_QUERY_KEYS.MY_VACANCIES_LIST,
      userId,
    ],
    queryFn: () => getVacanciesListByUserId(userId),
    ...queryOptions,
  });
};

export const useGetSingleVacancy = <T = SingleVacancy>(
  vacancyId: string,
  {
    queryOpions: queryOptions,
  }: {
    queryOpions?: Omit<
      UseQueryOptions<SingleVacancy, PostgrestError, T>,
      'queryKey'
    >;
  } = {},
): UseQueryResult<T, PostgrestError> => {
  return useQuery<SingleVacancy, PostgrestError, T>({
    queryKey: [VACANCIES_QUERY_KEYS.SINGLE_VACANCY, vacancyId],
    queryFn: () => getSingleVacancyById(vacancyId),
    ...queryOptions,
  });
};
