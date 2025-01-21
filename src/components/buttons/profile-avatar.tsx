import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import SignOutButton from '@/components/buttons/sign-out';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router';
import { useAtomValue } from 'jotai';
import { userAtom, userProfileAtom } from '@/store/auth';
import useI18nLang from '@/hooks/use-i18n-lang';
import { ACCOUNT_ITEMS } from '@/assets/data/nav-paths/nav-paths';

const ProfileAvatar: React.FC = () => {
  const profile = useAtomValue(userProfileAtom);
  const user = useAtomValue(userAtom);
  const avatarFallBack = user?.email?.at(0)?.toUpperCase();
  const { lang, t } = useI18nLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hidden md:block">
        <button className="rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <Avatar>
            <AvatarImage src={profile?.avatar_url || ''} />
            <AvatarFallback>{avatarFallBack}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {ACCOUNT_ITEMS.map((navItem) => (
          <DropdownMenuItem asChild key={navItem.path}>
            <Link to={`/${lang}/${navItem.path}`} className="w-full">
              {t(`button.nav-buttons.${navItem.name}`)}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
