import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/buttons/theme-toggle';
import LangSwitcher from '@/components/buttons/lang-switcher';
import PageContainer from '@/components/layout/containers/page-container';
import NavBar from '@/components/layout/base/header/nav-bar/nav-bar';
import AppLogo from '/public/app-logo.svg';
import MobNavBar from '@/components/layout/base/header/mob-nav-bar/mob-nav-bar';
import { Link } from 'react-router';
import { useAtomValue } from 'jotai';
import { sessionAtom } from '@/store/auth';
import ProfileAvatar from '@/components/buttons/profile-avatar';
import useI18nLang from '@/hooks/use-i18n-lang';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';

const Header = () => {
  const { lang } = useI18nLang();
  const session = useAtomValue(sessionAtom);

  return (
    <header>
      <PageContainer>
        <div className="mt-5 flex items-center justify-between gap-6 rounded-xl bg-card px-4 py-3 text-card-foreground shadow">
          <img
            src={AppLogo}
            className="w-12 fill-white stroke-white text-white"
            alt="job logo"
          />
          <NavBar />

          <div className="flex items-center gap-3">
            {session && (
              <Button asChild>
                <Link
                  to={`/${lang}/${VACANCY_PATHS.VACANCY}/${VACANCY_PATHS.CREATE}`}
                >
                  Add vacancy
                </Link>
              </Button>
            )}

            <ThemeToggle />
            <LangSwitcher />
            {session ? (
              <ProfileAvatar />
            ) : (
              <Button className="hidden px-5 md:block" asChild>
                <Link to={`/${lang}/${AUTH_PATHS.SIGN_IN}`}>Login</Link>
              </Button>
            )}

            <MobNavBar />
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
