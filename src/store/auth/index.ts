import { UserProfileTypes } from '@/supabase/profiles/index.types';
import { User } from '@supabase/supabase-js';
import { atom } from 'jotai';

export const userProfileAtom = atom<UserProfileTypes | null>(null);

export const userAtom = atom<User | null>(null);
