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
import { formatDate } from '@/lib/formatDate';

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
  const formatedData = formatDate(vacancy?.created_at as string, lang);

  return (
    <Card className="flex max-w-4xl flex-col gap-10 p-8 md:gap-6">
      <span className="self-start rounded-[8px] bg-primary/10 p-2 leading-3 text-primary">
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
          <h3 className="break-before-all text-2xl font-semibold leading-4">
            {vacancyTitle}
          </h3>
          <span className="leading-4 text-foreground">{companyName}</span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-10 md:gap-5">
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

        <Button asChild className="self-stretch md:self-start">
          <Link to={`/${lang}/${VACANCY_PATHS.VACANCY}/${vacancy.id}`}>
            Job Details
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default VacancyCard;
