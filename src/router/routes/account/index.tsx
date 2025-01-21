import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';
import MyVacanciesPageViewLoader from '@/router/routes/account/my-vacancies';
import ProfilePageViewLoader from '@/router/routes/account/profile';
import SettingsPageViewLoader from '@/router/routes/account/settings';
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
    key={ACCOUNT_PATHS.SETTINGS}
  />,
  <Route
    path={ACCOUNT_PATHS.MY_VACANCIES}
    element={<MyVacanciesPageViewLoader />}
    key={ACCOUNT_PATHS.MY_VACANCIES}
  />,
];
