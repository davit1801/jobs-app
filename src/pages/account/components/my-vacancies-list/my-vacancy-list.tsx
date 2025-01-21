import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useI18nLang from '@/hooks/use-i18n-lang';
import React from 'react';
import { Trash } from 'lucide-react';
import CustomAlert from '@/components/buttons/custom-alert';
import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import { Spinner } from '@/components/ui/spinner';
import MyVacancyEditForm from '@/pages/account/components/my-vacancy-edit-form/my-vacancy-edit-form';
import dayjs from 'dayjs';
import { useGetMyVacanciesList } from '@/react-query/query/vacancies';
import { useDeleteVacancy } from '@/react-query/mutation/vacancies';
import { queryClient } from '@/main';
import { VACANCIES_QUERY_KEYS } from '@/react-query/query/vacancies/index.enum';

const MyVacanciesList: React.FC = () => {
  const user = useAtomValue(userAtom);

  const { data: myVacancies, isPending } = useGetMyVacanciesList(
    user?.id as string,
  );
  const { mutate } = useDeleteVacancy({
    mutationOptions: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [VACANCIES_QUERY_KEYS.MY_VACANCIES_LIST],
        });
        queryClient.invalidateQueries({
          queryKey: [VACANCIES_QUERY_KEYS.VACANCIES_LIST],
        });
      },
    },
  });

  const { lang, t } = useI18nLang();

  return (
    <Table>
      <TableCaption>{t('myVacancies.table-caption')}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{t('myVacancies.table-head.createdAt')}</TableHead>
          <TableHead>{t('myVacancies.table-head.title')}</TableHead>
          <TableHead>{t('myVacancies.table-head.category')}</TableHead>
          <TableHead className="text-center">
            {t('myVacancies.table-head.edit')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isPending && (
          <TableRow className="w-full">
            <TableCell className="w-full" colSpan={4}>
              <Spinner variant="component" />
            </TableCell>
          </TableRow>
        )}

        {myVacancies?.map((vacancy) => {
          const formatedDate = dayjs(vacancy.created_at).format(
            'DD-MM-YYYY - HH:mm',
          );
          const vacancyTitle =
            lang === 'en' ? vacancy?.title_en : vacancy?.title_ka;

          return (
            <TableRow key={vacancy.id}>
              <TableCell className="font-medium">{formatedDate}</TableCell>
              <TableCell>{vacancyTitle}</TableCell>
              <TableCell>
                {t(`vacancy.category.${vacancy?.category}`)}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-5">
                  <MyVacancyEditForm vacancy={vacancy} />

                  <CustomAlert
                    trigger={<Trash className="cursor-pointer" />}
                    title={t('myVacancies.alert-title')}
                    description={t('myVacancies.alert-description')}
                    confirmText={t('myVacancies.confirm-text')}
                    calcelText={t('myVacancies.calcel-text')}
                    onConfirm={() => mutate({ vacancy_id: vacancy.id })}
                  />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default MyVacanciesList;
