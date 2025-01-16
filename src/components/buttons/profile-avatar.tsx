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
import { sessionAtom, userProfileAtom } from '@/store/auth';
import useI18nLang from '@/hooks/use-i18n-lang';
import { ACCOUNT_PATHS } from '@/router/routes/account/index.enum';

const ProfileAvatar: React.FC = () => {
  const profile = useAtomValue(userProfileAtom);
  const session = useAtomValue(sessionAtom);
  const avatarFallBack = session?.user?.email?.at(0)?.toUpperCase();
  const { lang } = useI18nLang();

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
        <DropdownMenuItem asChild>
          <Link
            to={`/${lang}/${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.PROFILE}`}
            className="w-full"
          >
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            to={`/${lang}/${ACCOUNT_PATHS.ACCOUNT}/${ACCOUNT_PATHS.SETTINGS}`}
            className="w-full"
          >
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
