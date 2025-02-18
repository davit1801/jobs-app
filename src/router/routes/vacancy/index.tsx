import IsFillProfileGuard from '@/router/guards/is-fill-profile';
import NotFoundViewLoader from '@/router/routes/not-found';
import VacancyCreatePageViewLoader from '@/router/routes/vacancy/create';
import VacancyDetailsPageViewLoader from '@/router/routes/vacancy/details';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import { Route } from 'react-router';

export const VACANCY_ROUTES = [
  <Route index element={<NotFoundViewLoader />} key={VACANCY_PATHS.VACANCY} />,
  <Route element={<IsFillProfileGuard />}>
    <Route
      path={VACANCY_PATHS.CREATE}
      element={<VacancyCreatePageViewLoader />}
      key={VACANCY_PATHS.CREATE}
    />
  </Route>,
  <Route
    path={':id'}
    element={<VacancyDetailsPageViewLoader />}
    key={VACANCY_PATHS.SUNGLE}
  />,
];
