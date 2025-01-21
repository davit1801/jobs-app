import React from 'react';
import { CircleUser } from 'lucide-react';
import HowItWorksCard from '@/pages/about/components/how-it-works-card';
import { BriefcaseBusiness } from 'lucide-react';
import { Check } from 'lucide-react';
import useI18nLang from '@/hooks/use-i18n-lang';

const HowItWorkList: React.FC = () => {
  const { t } = useI18nLang();

  return (
    <section>
      <h2 className="mb-14 text-center text-3xl font-semibold">
        {t('about.how-works')}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <HowItWorksCard
          name="create"
          icon={<CircleUser className="h-14 w-14 text-primary" />}
        />
        <HowItWorksCard
          name="find"
          icon={<BriefcaseBusiness className="h-14 w-14 text-primary" />}
        />
        <HowItWorksCard
          name="apply"
          icon={<Check className="h-14 w-14 text-primary" />}
        />
      </div>
    </section>
  );
};

export default HowItWorkList;
