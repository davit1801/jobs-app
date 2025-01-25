import { Input } from '@/components/ui/input';
import useSetSearchParams from '@/hooks/use-set-serach-params';
import QueryString from 'qs';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import { useDebounce } from '@uidotdev/usehooks';
import useI18nLang from '@/hooks/use-i18n-lang';
import { VacanciesFilterFormValues } from '@/pages/home/types';

const searchDefaultValues = {
  searchText: '',
};

type PropsType = {
  className?: string;
};

const SearchInput: React.FC<PropsType> = ({ className }) => {
  const { t } = useI18nLang();
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const { control, watch } = useForm<VacanciesFilterFormValues>({
    defaultValues: { ...searchDefaultValues, ...parsedSearchParams },
  });
  const watchedSearchText = watch('searchText');
  const debouncedSearchText = useDebounce(watchedSearchText, 700);
  useSetSearchParams({
    searchText: debouncedSearchText,
    page: null,
  });

  return (
    <Controller
      control={control}
      name="searchText"
      render={({ field: { value, onChange } }) => {
        return (
          <Input
            type="search"
            onChange={onChange}
            value={value}
            placeholder={t('home.search-bar')}
            className={className}
          />
        );
      }}
    />
  );
};

export default SearchInput;
