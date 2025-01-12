import { UserProfileTypes } from '@/supabase/profiles/types';
import { Session } from '@supabase/supabase-js';
import { atom } from 'jotai';

export const sessionAtom = atom<Session | null>(null);

export const userProfileAtom = atom<UserProfileTypes | null>(null);
