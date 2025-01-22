import useI18nLang from '@/hooks/use-i18n-lang';
import { useGetSingleVacancy } from '@/react-query/query/vacancies';
import React from 'react';
import { useParams } from 'react-router';
import { BriefcaseBusiness } from 'lucide-react';
import { CalendarCog } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Globe } from 'lucide-react';
import { BookText } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { formatDate } from '@/lib/formatDate';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

const DetailVacancyCard: React.FC = () => {
  const { lang, t } = useI18nLang();
  const { id } = useParams<{ id: string }>();
  const { data: vacancy, isPending, isError } = useGetSingleVacancy(id!);

  const companyName =
    lang === 'en' ? vacancy?.company_name_en : vacancy?.company_name_ka;
  const companyAddress =
    lang === 'en' ? vacancy?.address_en : vacancy?.address_ka;
  const vacancyTitle = lang === 'en' ? vacancy?.title_en : vacancy?.title_ka;
  const vacancyDescription =
    lang === 'en' ? vacancy?.description_en : vacancy?.description_ka;
  const formatedData = formatDate(vacancy?.created_at as string, lang);
  return (
    <>
      {isPending && <Skeleton className="h-[300px] w-full" />}
      {isError && (
        <h2 className="mt-8 text-center text-2xl font-bold">
          {t('vacancy.not-found')}{' '}
        </h2>
      )}
      {vacancy && (
        <Card className="flex flex-col gap-5 p-4">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
            <span className="rounded-[8px] bg-primary/10 p-2 text-primary md:order-1">
              {t('vacancy.posted')} {formatedData}
            </span>
            <h3 className="md:order-0 text-xl">{vacancyTitle}</h3>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="shrink-0 text-primary" />
              <span className="break-word text-muted-foreground">
                {t(`vacancy.category.${vacancy?.category}`)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="shrink-0 text-primary" />
              <div className="flex gap-1">
                <span className="text-muted-foreground">
                  {vacancy?.salary_start}
                </span>
                <span className="text-muted-foreground">-</span>
                <span className="text-muted-foreground">
                  {vacancy?.salary_end}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="shrink-0 text-primary" />
              <span className="text-muted-foreground">
                {t(`vacancy.work-type.${vacancy?.work_type}`)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCog className="shrink-0 text-primary" />
              <span className="text-muted-foreground">
                {t(`vacancy.experience.${vacancy?.work_experience}`)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p>{t('vacancy.description')}</p>
              <span className="text-muted-foreground">
                {vacancyDescription}
              </span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-5 text-xl">{t('vacancy.about-company')}</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <BookText className="text-primary" />
                <span className="text-muted-foreground">{companyName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary" />
                <span className="text-muted-foreground">{vacancy.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-primary" />
                <span className="text-muted-foreground">
                  {vacancy.website_url}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span className="text-muted-foreground">{companyAddress}</span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default DetailVacancyCard;
