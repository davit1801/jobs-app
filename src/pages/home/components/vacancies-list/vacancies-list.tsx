import { Skeleton } from '@/components/ui/skeleton';
import VacancyCard from '@/components/vacancies/vacancy-card/vacancy-card';
import useI18nLang from '@/hooks/use-i18n-lang';
import PagePagination from '@/pages/home/components/pagination/pagination';
import { useGetVacanciesList } from '@/react-query/query/vacancies';
import QueryString from 'qs';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';

const VacanciesList: React.FC = () => {
  const vacancyListRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const searchText = parsedSearchParams.searchText?.toString() || '';
  const page = parsedSearchParams.page?.toString();
  const { data, isPending, isError } = useGetVacanciesList(
    searchText,
    page ? +page : undefined,
  );
  const { t } = useI18nLang();

  return (
    <div className="flex flex-col gap-6" ref={vacancyListRef}>
      {isPending && <Skeleton className="h-[200px] w-full" />}
      {data?.data?.length === 0 || isError ? (
        <p className="text-center text-2xl">{t('home.vacancies-not-found')}</p>
      ) : (
        <div className="flex flex-col gap-6">
          {data?.data?.map((vacancy) => (
            <VacancyCard vacancy={vacancy} key={vacancy.id} />
          ))}

          <PagePagination
            vacanciesCount={data?.count}
            vacancyListRef={vacancyListRef}
          />
        </div>
      )}
    </div>
  );
};

export default VacanciesList;
