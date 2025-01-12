import useI18nLang from '@/hooks/use-i18n-lang';
import { MAIN_PATHS } from '@/router/routes/main/index.types';
import React from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router';

export const activeLinkStyle = 'text-primary';
export const linkStyle = 'text-muted-foreground hover:text-foreground';

const NavBar: React.FC = () => {
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
    <nav className="hidden md:flex">
      <ul className="flex gap-4">
        <li className="flex gap-5">
          {navItems.map((navItem) => (
            <NavLink
              to={`${navItem.path}`}
              end
              className={handleActiveNav}
              key={navItem.path}
            >
              {navItem.name}
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
