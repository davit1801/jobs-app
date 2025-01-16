import VacancyCard from '@/components/vacancies/card';
import { getVacanciesList } from '@/supabase/vacancies';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const HomeView: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['fetch-vacancies-list'],
    queryFn: getVacanciesList,
  });

  if (data) {
    console.log(data);
  }

  return (
    <>
      <div>
        {data?.map((vacancy) => (
          <VacancyCard vacancy={vacancy} key={vacancy.id} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
