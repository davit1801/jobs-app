import { VACANCIES_MUTATION_KEYS } from '@/react-query/mutation/vacancies/index.enum';
import {
  createVacancy,
  deleteMyVacancy,
  updateVacancy,
} from '@/supabase/vacancies';
import {
  CreateVacancyPayload,
  DeleteVacancyPayload,
  UpdateVacancyPayload,
} from '@/supabase/vacancies/index.types';
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
    mutationKey: [VACANCIES_MUTATION_KEYS.CREATE],
    mutationFn: createVacancy,
    ...mutationOptions,
  });
};

export const useUpdateVacancy = ({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<null, PostgrestError, UpdateVacancyPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<null, PostgrestError, UpdateVacancyPayload> => {
  return useMutation<null, PostgrestError, UpdateVacancyPayload>({
    mutationKey: [VACANCIES_MUTATION_KEYS.UPDATE],
    mutationFn: updateVacancy,
    ...mutationOptions,
  });
};

export const useDeleteVacancy = ({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<null, PostgrestError, DeleteVacancyPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<null, PostgrestError, DeleteVacancyPayload> => {
  return useMutation<null, PostgrestError, DeleteVacancyPayload>({
    mutationKey: [VACANCIES_MUTATION_KEYS.DELETE],
    mutationFn: deleteMyVacancy,
    ...mutationOptions,
  });
};
