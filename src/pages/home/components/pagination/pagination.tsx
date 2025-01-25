import React, { RefObject, useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import useSetSearchParams from '@/hooks/use-set-serach-params';
import { useSearchParams } from 'react-router';
import QueryString from 'qs';

type Props = {
  vacanciesCount: number | null | undefined;
  vacancyListRef: RefObject<HTMLDivElement>;
};

const PagePagination: React.FC<Props> = ({
  vacanciesCount,
  vacancyListRef,
}) => {
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const searchText = parsedSearchParams.searchText?.toString() || '';
  const page = parsedSearchParams.page;
  const [activePage, setAcivePage] = useState(+page! || 1);
  const [totalPages, setTotalPages] = useState<number>(
    vacanciesCount ? Math.ceil(vacanciesCount / 2) : 1,
  );

  useSetSearchParams({
    searchText: searchText,
    page: activePage === 1 ? null : activePage,
  });

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setAcivePage(newPage);

    vacancyListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    setTotalPages(vacanciesCount ? Math.ceil(vacanciesCount / 2) : 1);
    setAcivePage(+page! || 1);
  }, [vacanciesCount, page]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(activePage - 1)}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handlePageChange(index + 1)}
              isActive={index + 1 === activePage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(activePage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PagePagination;
