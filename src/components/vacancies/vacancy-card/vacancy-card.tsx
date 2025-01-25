import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import useI18nLang from '@/hooks/use-i18n-lang';
import { SingleVacancy } from '@/supabase/vacancies/index.types';
import { BriefcaseBusiness } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router';
import React from 'react';
import { VACANCY_PATHS } from '@/router/routes/vacancy/index.enum';
import { formatDate } from '@/lib/format-date';

type PropsTypes = {
  vacancy: SingleVacancy;
};

const VacancyCard: React.FC<PropsTypes> = ({ vacancy }) => {
  const { lang, t } = useI18nLang();
  const companyAddress =
    lang === 'en' ? vacancy.address_en : vacancy.address_ka;
  const companyName =
    lang === 'en' ? vacancy.company_name_en : vacancy.company_name_ka;
  const vacancyTitle = lang === 'en' ? vacancy.title_en : vacancy.title_ka;
  const formatedData: string = formatDate(vacancy?.created_at as string, lang);

  return (
    <Card className="flex flex-col gap-10 p-8 md:gap-6">
      <span className="self-start rounded-[8px] bg-primary/10 p-2 text-primary md:leading-3">
        {formatedData}
      </span>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="max-w-10 rounded-full">
          <img
            src={vacancy.avatar_url || ''}
            alt="company logo"
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="break-words text-2xl font-semibold md:leading-4">
            {vacancyTitle}
          </h2>
          <span className="text-foreground md:leading-4">{companyName}</span>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-between gap-10 md:flex-row md:gap-5">
        <div className="flex flex-col gap-6 self-start md:flex-row">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="text-primary" />
            <span className="text-muted-foreground">
              {t(`vacancy.category.${vacancy.category}`)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary" />
            <span className="text-muted-foreground">
              {t(`vacancy.work-type.${vacancy.work_type}`)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Wallet className="text-primary" />
            <span className="text-muted-foreground">
              {vacancy.salary_start}-{vacancy.salary_end}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <span className="text-muted-foreground">{companyAddress}</span>
          </div>
        </div>

        <Button asChild className="self-stretch md:self-end">
          <Link to={`/${lang}/${VACANCY_PATHS.VACANCY}/${vacancy.id}`}>
            {t('button.job-details')}
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default VacancyCard;
