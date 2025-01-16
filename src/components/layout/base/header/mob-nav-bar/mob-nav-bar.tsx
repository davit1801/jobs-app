import {
  activeLinkStyle,
  linkStyle,
} from '@/components/layout/base/header/nav-bar/nav-bar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import useI18nLang from '@/hooks/use-i18n-lang';
import { MAIN_PATHS } from '@/router/routes/main/index.enum';
import {
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import React from 'react';
import { NavLink, Link, NavLinkRenderProps } from 'react-router';

const MobNavBar: React.FC = () => {
  const { t } = useI18nLang();
  const navItems = [
    { name: t('navigation.home'), path: '' },
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
            <DropdownMenuItem asChild key={navItem.name}>
              <NavLink to={navItem.path} end className={handleActiveNav}>
                {navItem.path}
              </NavLink>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator className="h-[1px] bg-muted" />

          <DropdownMenuItem asChild>
            <Button className="w-full text-sm" asChild>
              <Link to="/en/login">Log in</Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobNavBar;
