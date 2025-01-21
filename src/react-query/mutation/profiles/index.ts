import { PROFILE_MUTATION_KEYS } from '@/react-query/mutation/profiles/index.enum';
import { fillUserProfile } from '@/supabase/profiles';
import { UserProfilePayload } from '@/supabase/profiles/index.types';
import { PostgrestError } from '@supabase/supabase-js';

import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export const useFillUserProfile = ({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<null, PostgrestError, UserProfilePayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<null, PostgrestError, UserProfilePayload> => {
  return useMutation<null, PostgrestError, UserProfilePayload>({
    mutationKey: [PROFILE_MUTATION_KEYS.FILL_PROFILE],
    mutationFn: fillUserProfile,
    ...mutationOptions,
  });
};
