import { AUTH_MUTATION_KEYS } from '@/react-query/mutation/auth/enum';
import { signInUser, signOutUser, signupUser } from '@/supabase/auth';
import {
  UserAuthPayload,
  UserSignInResponse,
  UserSignUpResponse,
} from '@/supabase/auth/index.types';
import { AuthError } from '@supabase/supabase-js';
import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export const useUserSignIn = <T = UserSignInResponse>({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<T, AuthError, UserAuthPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<T, AuthError, UserAuthPayload> => {
  return useMutation<T, AuthError, UserAuthPayload>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGNIN],
    mutationFn: signInUser as MutationFunction<T, UserAuthPayload>,
    ...mutationOptions,
  });
};

export const useUserSignUp = <T = UserSignUpResponse>({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<T, AuthError, UserAuthPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<T, AuthError, UserAuthPayload> => {
  return useMutation<T, AuthError, UserAuthPayload>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGNUP],
    mutationFn: signupUser as MutationFunction<T, UserAuthPayload>,
    ...mutationOptions,
  });
};

export const useUserSignOut = <T = void>({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<UseMutationOptions<T, AuthError>, 'mutationKey'>;
} = {}): UseMutationResult<T, AuthError, void> => {
  return useMutation<T, AuthError, void>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGNOUT],
    mutationFn: signOutUser as MutationFunction<T, void>,
    ...mutationOptions,
  });
};
