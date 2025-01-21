import { Separator } from '@/components/ui/separator';
import HeroSection from '@/pages/home/components/hero-section/hero-section';
import SearchInput from '@/pages/home/components/search-bar/search-input';
import VacanciesList from '@/pages/home/components/vacancies-list/vacancies-list';
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Separator />
      <SearchInput className="max-w-60 self-center shadow" />
      <VacanciesList />
    </div>
  );
};

export default HomeView;
