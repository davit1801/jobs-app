import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import SignInPageViewLoader from '@/router/routes/auth/sign-in';
import SignUpPageViewLoader from '@/router/routes/auth/sign-up';
import { Route } from 'react-router';

export const AUTH_ROUTES = [
  <Route path={AUTH_PATHS.SIGN_IN} element={<SignInPageViewLoader />} />,
  <Route path={AUTH_PATHS.SIGN_UP} element={<SignUpPageViewLoader />} />,
];
