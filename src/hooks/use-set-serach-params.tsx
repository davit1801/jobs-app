import QueryString from 'qs';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

const useSetSearchParams = (searchText: string) => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(
      QueryString.stringify(
        { searchText: searchText },
        {
          skipNulls: true,
          filter: (_, value) => {
            return value || undefined;
          },
        },
      ),
    );
  }, [searchText, setSearchParams]);
};

export default useSetSearchParams;
