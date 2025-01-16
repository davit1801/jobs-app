import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';
import ProfilePageViewLoader from '@/router/routes/account/profile';
import SettingsPageViewLoader from '@/router/routes/account/settings';
import { MAIN_PATHS } from '@/router/routes/main/index.enum';
import { Route } from 'react-router';

export const ACCOUNT_ROUTES = [
  <Route
    path={ACCOUNT_PATHS.PROFILE}
    element={<ProfilePageViewLoader />}
    key={ACCOUNT_PATHS.PROFILE}
  />,
  <Route
    path={ACCOUNT_PATHS.SETTINGS}
    element={<SettingsPageViewLoader />}
    key={MAIN_PATHS.CONTACT}
  />,
];
