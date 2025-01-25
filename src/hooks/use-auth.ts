import { supabase } from '@/supabase';
import { userAtom, userProfileAtom } from '@/store/auth';
import { useCallback, useEffect, useRef } from 'react';
import { useSetAtom } from 'jotai';
import { getUserProfile } from '@/supabase/profiles';
import { Session } from '@supabase/supabase-js';

const useAuth = () => {
  const hasFetchedProfile = useRef(false);
  const setUser = useSetAtom(userAtom);
  const setProfile = useSetAtom(userProfileAtom);
  const fetchUserProfile = useCallback(
    async (session: Session) => {
      if (hasFetchedProfile.current) return;
      hasFetchedProfile.current = true;
      try {
        const profile = await getUserProfile(session.user.id);
        setProfile(profile);
      } catch (profileError) {
        console.error(
          'Error fetching profile on auth state change:',
          profileError,
        );
      }
    },
    [setProfile],
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session?.user);
        fetchUserProfile(session);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session?.user);
        fetchUserProfile(session);
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser, setProfile, fetchUserProfile]);

  return null;
};

export default useAuth;
