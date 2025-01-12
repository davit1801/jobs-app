import { AUTH_MUTATION_KEYS } from '@/react-query/mutation/auth/enum';
import { signInUser, signOutUser, signupUser } from '@/supabase/auth';
import {
  UserSignInPayload,
  UserSignInResponse,
  UserSignUpPayload,
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
    UseMutationOptions<T, AuthError, UserSignInPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<T, AuthError, UserSignInPayload> => {
  return useMutation<T, AuthError, UserSignInPayload>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGNIN],
    mutationFn: signInUser as MutationFunction<T, UserSignInPayload>,
    ...mutationOptions,
  });
};

export const useUserSignUp = <T = UserSignUpResponse>({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<T, AuthError, UserSignUpPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<T, AuthError, UserSignUpPayload> => {
  return useMutation<T, AuthError, UserSignUpPayload>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGNUP],
    mutationFn: signupUser as MutationFunction<T, UserSignUpPayload>,
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
