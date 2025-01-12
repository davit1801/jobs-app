import { supabase } from '@/supabase';
import { sessionAtom, userProfileAtom } from '@/store/auth';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { getUserProfile } from '@/supabase/profiles';
import { getSession } from '@/supabase/auth';

const useAuth = () => {
  const setSession = useSetAtom(sessionAtom);
  const setProfile = useSetAtom(userProfileAtom);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);

      const fetchProfile = async () => {
        const profile = await getUserProfile(session?.user.id);
        setProfile(profile);
      };

      fetchProfile();
    });

    fetchSession();

    return () => subscription.unsubscribe();
  }, [setSession, setProfile]);
};

export default useAuth;
