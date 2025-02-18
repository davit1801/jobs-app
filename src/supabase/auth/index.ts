import { supabase } from '@/supabase';
import {
  UpdateUserPayload,
  UserSignInPayload,
  UserSignUpPayload,
} from '@/supabase/auth/index.types';

export const signupUser = async ({ email, password }: UserSignUpPayload) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Registration error:', error.message);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('An unexpected error occurred during registration:', error);
    throw error;
  }
};

export const signInUser = async ({ email, password }: UserSignInPayload) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('An unexpected error occurred during login:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
      throw error;
    }
  } catch (error) {
    console.error('An unexpected error occurred during logout:', error);
    throw error;
  }
};

export const getSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) throw error;

    return session;
  } catch (error) {
    console.error('Error fetching session:', error);
    throw error;
  }
};

export const updateUserPassword = async ({ password }: UpdateUserPayload) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching session:', error);
    throw error;
  }
};

export const deleteUser = async (user_id: string) => {
  try {
    const { data, error } = await supabase.auth.admin.deleteUser(user_id);
    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching session:', error);
    throw error;
  }
};
