import { VACANCIES_MUTATION_KEYS } from '@/react-query/mutation/vacancies/enum';
import { createVacancy } from '@/supabase/vacancies';
import { CreateVacancyPayload } from '@/supabase/vacancies/index.types';
import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export const useCreateVacancy = ({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<null, PostgrestError, CreateVacancyPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<null, PostgrestError, CreateVacancyPayload> => {
  return useMutation<null, PostgrestError, CreateVacancyPayload>({
    mutationKey: [VACANCIES_MUTATION_KEYS],
    mutationFn: createVacancy,
    ...mutationOptions,
  });
};
