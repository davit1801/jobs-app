import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';

export const ACCOUNT_ITEMS = [
  {
    name: 'profile',
    path: `${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.PROFILE}`,
  },
  {
    name: 'my-vacancies',
    path: `${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.MY_VACANCIES}`,
  },
  {
    name: 'settings',
    path: `${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.SETTINGS}`,
  },
];
