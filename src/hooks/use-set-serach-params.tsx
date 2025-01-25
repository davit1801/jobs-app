import QueryString from 'qs';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

type SearchParams = {
  searchText: string;
  page?: number | null;
};

const useSetSearchParams = ({ searchText, page }: SearchParams) => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(
      QueryString.stringify(
        { searchText: searchText, page: page },
        {
          skipNulls: true,
          filter: (_, value) => {
            return value || undefined;
          },
        },
      ),
    );
  }, [searchText, page, setSearchParams]);
};

export default useSetSearchParams;
