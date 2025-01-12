import { Spinner } from '@/components/ui/spinner';
import ProfileForm from '@/pages/profile/components/profile-form/profile-form';
import { userProfileAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React from 'react';

const ProfileView: React.FC = () => {
  const profile = useAtomValue(userProfileAtom);
  return (
    <div className="mx-auto max-w-4xl border p-8 shadow">
      <h2 className="font-bold text-muted-foreground">Profile</h2>
      <div className="my-6 h-[1px] bg-border"></div>
      {profile ? (
        <div>
          <ProfileForm />
        </div>
      ) : (
        <Spinner size="large" variant="component" />
      )}
    </div>
  );
};

export default ProfileView;
