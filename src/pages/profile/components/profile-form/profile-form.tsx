import ControlledField from '@/components/form/controlled-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ProfileFormValues } from '@/pages/profile/types';
import { useFillUserProfile } from '@/react-query/mutation/profiles';
import { sessionAtom, userProfileAtom } from '@/store/auth';
import { useAtom, useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
// import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ProfileForm: React.FC = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useAtom(userProfileAtom);
  const session = useAtomValue(sessionAtom);
  const { control, handleSubmit, watch } = useForm<ProfileFormValues>({
    defaultValues: {
      username: profile?.username ?? '',
      avatar_url: profile?.avatar_url ?? '',
      website: profile?.website ?? '',
      full_name_en: profile?.full_name_en ?? '',
      full_name_ka: profile?.full_name_ka ?? '',
      company_name_en: profile?.company_name_en ?? '',
      company_name_ka: profile?.company_name_ka ?? '',
      address_en: profile?.address_en ?? '',
      address_ka: profile?.address_ka ?? '',
      phone: profile?.phone ?? '',
    },
  });

  const { mutate, isPending } = useFillUserProfile({
    mutationOptions: {
      onSuccess: () => {
        setProfile((prevValue) => {
          if (!prevValue) {
            return null;
          }
          return { ...prevValue, ...watch() };
        });
        toast({ description: 'User Prifle updated succesfully' });
      },
      onError: () => {
        toast({
          description: 'Failed to update profile',
          variant: 'destructive',
        });
      },
    },
  });

  const handleFormSubmit: SubmitHandler<ProfileFormValues> = (formFields) => {
    if (session) {
      mutate({ ...formFields, id: session?.user?.id });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Username</Label>
          <ControlledField
            name="username"
            control={control}
            placeholder="Enter Your Username"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>Phone</Label>
          <ControlledField
            name="phone"
            control={control}
            placeholder="Enter Phone Number"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Avatar URL</Label>
          <ControlledField
            name="avatar_url"
            control={control}
            placeholder="Enter Avatar image Url"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>Website URL</Label>
          <ControlledField
            name="website"
            control={control}
            placeholder="Enter Your Website URL"
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Full Name</Label>
          <ControlledField
            name="full_name_en"
            control={control}
            placeholder="Enter Your Full name"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>სახელი გვარი </Label>
          <ControlledField
            name="full_name_ka"
            control={control}
            placeholder="შეიყვანეთ თქვენი სახელი და გვარი"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Company Name</Label>
          <ControlledField
            name="company_name_en"
            control={control}
            placeholder="Enter Company name"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>კომპანიის სახელი</Label>
          <ControlledField
            name="company_name_ka"
            control={control}
            placeholder="შეიყვანეთ კომპანიის სახელი"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Address</Label>
          <ControlledField
            name="address_en"
            control={control}
            placeholder="Enter address"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>მისამართი</Label>
          <ControlledField
            name="address_ka"
            control={control}
            placeholder="შეიყვანეთ მისამართი"
          />
        </div>
      </div>

      <Button className="self-end" disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
};

export default ProfileForm;
