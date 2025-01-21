import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useI18nLang from '@/hooks/use-i18n-lang';

import ChangePasswordForm from '@/pages/account/components/change-password-form/change-password-form';
import React from 'react';

const SettingsView: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <Card className="mx-auto max-w-lg space-y-6 border p-8 shadow">
      <h2 className="text-xl">{t('settings.account-settings')}</h2>
      <Separator />
      <div className="flex flex-col gap-3">
        <p>{t('settings.change-password')}</p>
        <ChangePasswordForm />
      </div>
      <Separator />
    </Card>
  );
};

export default SettingsView;
