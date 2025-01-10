import { Session, User, WeakPassword } from '@supabase/supabase-js';

export type UserAuthPayload = {
  email: string;
  password: string;
};

export type UserSignInResponse = {
  data: {
    user: User;
    session: Session;
    weakPassword?: WeakPassword;
  };
};

export type UserSignUpResponse = {
  data: {
    user: User | null;
    session: Session | null;
  };
};

export type SessionType = {
  session: Session | null;
};
