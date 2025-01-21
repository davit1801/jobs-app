import ControlledInputField from '@/components/form-elements/controlled-input-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ProfileFormValues } from '@/pages/account/types';
import { useFillUserProfile } from '@/react-query/mutation/profiles';
import { userAtom, userProfileAtom } from '@/store/auth';
import { useAtom, useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { profileFormSchema } from '@/pages/account/schema';
import useI18nLang from '@/hooks/use-i18n-lang';

const ProfileForm: React.FC = () => {
  const { toast } = useToast();
  const { t } = useI18nLang();
  const [profile, setProfile] = useAtom(userProfileAtom);
  const user = useAtomValue(userAtom);
  const { control, handleSubmit, watch } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      avatar_url: profile?.avatar_url ?? '',
      website_url: profile?.website_url ?? '',
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
        toast({ description: t('toast.success.update-profile') });
      },
      onError: () => {
        toast({
          description: t('toast.error.update-profile'),
          variant: 'destructive',
        });
      },
    },
  });

  const handleFormSubmit: SubmitHandler<ProfileFormValues> = (formFields) => {
    if (user) {
      mutate({ ...formFields, id: user?.id });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>{t('profile.avatar')}</Label>
          <ControlledInputField
            name="avatar_url"
            control={control}
            placeholder={t('profile.avatar-placeholder')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>{t('profile.phone')}</Label>
          <ControlledInputField
            name="phone"
            control={control}
            placeholder={t('profile.phone-placeholder')}
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <Label>{t('profile.website')}</Label>
          <ControlledInputField
            name="website_url"
            control={control}
            placeholder={t('profile.website-placeholder')}
          />
        </div>
      </div>

      <div className="my-6 h-[1px] bg-border"></div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Full Name</Label>
          <ControlledInputField
            name="full_name_en"
            control={control}
            placeholder="Enter Your Full name"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>სახელი გვარი </Label>
          <ControlledInputField
            name="full_name_ka"
            control={control}
            placeholder="შეიყვანეთ თქვენი სახელი და გვარი"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Company Name</Label>
          <ControlledInputField
            name="company_name_en"
            control={control}
            placeholder="Enter Company name"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>კომპანიის სახელი</Label>
          <ControlledInputField
            name="company_name_ka"
            control={control}
            placeholder="შეიყვანეთ კომპანიის სახელი"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <Label>Address</Label>
          <ControlledInputField
            name="address_en"
            control={control}
            placeholder="Enter address"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Label>მისამართი</Label>
          <ControlledInputField
            name="address_ka"
            control={control}
            placeholder="შეიყვანეთ მისამართი"
          />
        </div>
      </div>

      <Button className="self-end" disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        {t('button.save-changes')}
      </Button>
    </form>
  );
};

export default ProfileForm;
