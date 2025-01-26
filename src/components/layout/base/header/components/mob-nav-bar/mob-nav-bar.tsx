import { ACCOUNT_ITEMS } from '@/assets/data/nav-paths/nav-paths';
import SignOutButton from '@/components/buttons/sign-out';
import {
  activeLinkStyle,
  linkStyle,
} from '@/components/layout/base/header/components/nav-bar/nav-bar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import useI18nLang from '@/hooks/use-i18n-lang';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import { MAIN_PATHS } from '@/router/routes/main/index.enum';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import { userAtom } from '@/store/auth';
import {
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useAtomValue } from 'jotai';
import { Menu } from 'lucide-react';
import React from 'react';
import { NavLink, Link, NavLinkRenderProps } from 'react-router';

const MobNavBar: React.FC = () => {
  const user = useAtomValue(userAtom);
  const { t, lang } = useI18nLang();
  const navItems = [
    { name: t('navigation.home'), path: `${MAIN_PATHS.HOME}${lang}` },
    { name: t('navigation.about'), path: MAIN_PATHS.ABOUT },
    { name: t('navigation.contact'), path: MAIN_PATHS.CONTACT },
  ];

  const handleActiveNav = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? activeLinkStyle : linkStyle;
  };

  return (
    <div className="mr-2 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5 rotate-0 scale-100" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="flex flex-col gap-1">
          {navItems.map((navItem) => (
            <DropdownMenuItem asChild key={navItem.path}>
              <NavLink to={navItem.path} className={handleActiveNav}>
                {navItem.name}
              </NavLink>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator className="h-[1px] bg-muted" />

          {user && (
            <>
              <DropdownMenuItem asChild>
                <Link
                  to={`/${lang}/${VACANCY_PATHS.VACANCY}/${VACANCY_PATHS.CREATE}`}
                >
                  {t('button.add-vacancy')}
                </Link>
              </DropdownMenuItem>

              {ACCOUNT_ITEMS.map((item) => (
                <DropdownMenuItem asChild key={item.path}>
                  <Link to={`/${lang}/${item.path}`}>
                    {t(`button.nav-buttons.${item.name}`)}
                  </Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator className="h-[1px] bg-muted" />
            </>
          )}

          <DropdownMenuItem>
            {user ? (
              <SignOutButton />
            ) : (
              <Button asChild className="w-full">
                <Link to={`/${lang}/${AUTH_PATHS.SIGN_IN}`}>
                  {t('button.login')}
                </Link>
              </Button>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobNavBar;
