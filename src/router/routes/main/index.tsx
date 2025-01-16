import AboutPageViewLoader from '@/router/routes/main/about-us';
import ContactPageViewLoader from '@/router/routes/main/contact';
import HomePageViewLoader from '@/router/routes/main/home';
import { MAIN_PATHS } from '@/router/routes/main/index.enum';
import { Route } from 'react-router';

export const MAIN_ROUTES = [
  <Route index element={<HomePageViewLoader />} key={MAIN_PATHS.HOME} />,
  <Route
    path={MAIN_PATHS.ABOUT}
    element={<AboutPageViewLoader />}
    key={MAIN_PATHS.ABOUT}
  />,
  <Route
    path={MAIN_PATHS.CONTACT}
    element={<ContactPageViewLoader />}
    key={MAIN_PATHS.CONTACT}
  />,
];
