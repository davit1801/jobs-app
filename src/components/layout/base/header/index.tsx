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

const Header = () => {
  const { lang, t } = useI18nLang();
  const user = useAtomValue(userAtom);

  return (
    <header>
      <PageContainer>
        <div className="mt-5 flex items-center justify-between gap-6 rounded-xl bg-card px-4 py-3 text-card-foreground shadow">
          <Link to={`/${lang}`}>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-10 w-10 text-foreground" />
              <span className="hidden text-foreground [@media(min-width:400px)]:block">
                Jobs Portal
              </span>
            </div>
          </Link>

          <NavBar />

          <div className="flex items-center gap-3">
            {user && (
              <Button asChild className="hidden md:block">
                <Link
                  to={`/${lang}/${VACANCY_PATHS.VACANCY}/${VACANCY_PATHS.CREATE}`}
                >
                  {t('button.add-vacancy')}
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
