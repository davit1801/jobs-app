import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useI18nLang from '@/hooks/use-i18n-lang';
import React from 'react';

type Props = {
  name: string;
  icon: React.ReactNode;
};

const HowItWorksCard: React.FC<Props> = ({ name, icon }) => {
  const { t } = useI18nLang();
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow">
      <CardHeader className="items-center gap-6">
        {icon}
        <CardTitle>{t(`about.${name}`)}</CardTitle>
      </CardHeader>
      <CardDescription className="p-6 pt-0 text-center text-sm">
        {t(`about.${name}-desc`)}
      </CardDescription>
    </Card>
  );
};

export default HowItWorksCard;
