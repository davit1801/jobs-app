import { Spinner } from '@/components/ui/spinner';
import VacancyCard from '@/components/vacancies/vacancy-card/vacancy-card';
import useI18nLang from '@/hooks/use-i18n-lang';
import { useGetVacanciesList } from '@/react-query/query/vacancies';
import QueryString from 'qs';
import React from 'react';
import { useSearchParams } from 'react-router';

const VacanciesList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const searchText = parsedSearchParams.searchText?.toString() || '';
  const { data, isPending } = useGetVacanciesList(searchText);
  const { t } = useI18nLang();

  return (
    <div className="flex flex-col gap-6">
      {isPending && <Spinner variant="component" />}
      {data?.length === 0 ? (
        <p className="text-center text-2xl">{t('home.vacancies-not-found')}</p>
      ) : (
        data?.map((vacancy) => (
          <VacancyCard vacancy={vacancy} key={vacancy.id} />
        ))
      )}
    </div>
  );
};

export default VacanciesList;
