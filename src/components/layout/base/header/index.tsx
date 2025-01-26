import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/buttons/theme-toggle';
import LangSwitcher from '@/components/buttons/lang-switcher';
import PageContainer from '@/components/layout/containers/page-container';
import NavBar from '@/components/layout/base/header/components/nav-bar/nav-bar';
import { BriefcaseBusiness } from 'lucide-react';
import MobNavBar from '@/components/layout/base/header/components/mob-nav-bar/mob-nav-bar';
import { Link } from 'react-router';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/store/auth';
import ProfileAvatar from '@/components/buttons/profile-avatar';
import useI18nLang from '@/hooks/use-i18n-lang';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import { CirclePlus } from 'lucide-react';

const Header = () => {
  const { lang, t } = useI18nLang();
  const user = useAtomValue(userAtom);

  return (
    <header className="sticky left-0 top-0 z-50 w-full md:static md:px-6">
      <PageContainer>
        <div className="flex items-center justify-between gap-6 bg-card px-4 py-3 text-card-foreground shadow md:mt-5 md:rounded-xl">
          <Link to={`/${lang}`}>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-10 w-10 text-foreground" />
              <span className="hidden text-foreground lg:block">
                Jobs Portal
              </span>
            </div>
          </Link>

          <NavBar />

          <div className="flex items-center gap-3">
            {user && (
              <Button className="hidden md:block">
                <Link
                  to={`/${lang}/${VACANCY_PATHS.VACANCY}/${VACANCY_PATHS.CREATE}`}
                  className="flex items-center gap-2"
                >
                  <CirclePlus />
                  <span>{t('button.add-vacancy')}</span>
                </Link>
              </Button>
            )}

            <ThemeToggle />
            <LangSwitcher />
            {user ? (
              <ProfileAvatar />
            ) : (
              <Button className="hidden px-5 md:block" asChild>
                <Link to={`/${lang}/${AUTH_PATHS.SIGN_IN}`}>
                  {t('button.login')}
                </Link>
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
