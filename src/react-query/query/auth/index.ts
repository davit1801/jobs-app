import { AUTH_QUERY_KEYS } from '@/react-query/query/auth/enum';
import { getSession } from '@/supabase/auth';
import { AuthError, Session } from '@supabase/supabase-js';
import {
  QueryFunction,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export const useGetSession = ({
  queryOptions: queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Session | null, AuthError>, 'queryKey'>;
} = {}): UseQueryResult<Session | null, AuthError> => {
  return useQuery<Session | null, AuthError>({
    queryKey: [AUTH_QUERY_KEYS.GET_SESSION],
    queryFn: getSession as QueryFunction<Session | null>,
    ...queryOptions,
  });
};
