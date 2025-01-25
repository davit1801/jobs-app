import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/ka';

const thresholds = [
  { l: 's', r: 1 },
  { l: 'm', r: 1 },
  { l: 'mm', r: 59, d: 'minute' },
  { l: 'h', r: 1 },
  { l: 'hh', r: 23, d: 'hour' },
  { l: 'd', r: 1 },
  { l: 'dd', r: 29, d: 'day' },
  { l: 'M', r: 1 },
  { l: 'MM', r: 11, d: 'month' },
  { l: 'y', r: 1 },
  { l: 'yy', d: 'year' },
];

dayjs.extend(updateLocale);

dayjs.updateLocale('ka', {
  relativeTime: {
    future: '%sში',
    past: '%s წინ',
    s: 'რამდენიმე წამის',
    ss: '%d წამის',
    m: 'ერთი წუთის',
    mm: '%d წუთის',
    h: 'ერთი საათის',
    hh: '%d საათის',
    d: 'ერთი დღის',
    dd: '%d დღის',
    M: 'ერთი თვის',
    MM: '%d თვის',
    y: 'ერთი წლის',
    yy: '%d წლის',
  },
});

const config = {
  thresholds: thresholds,
};

dayjs.extend(relativeTime, config);

const getRelativeTime = (date: string, lang: string) => {
  dayjs.locale(lang);
  return dayjs(date).fromNow();
};

export const formatDate = (date: string, lang: string) => {
  const isMoreThanOneDay = dayjs(date).isBefore(dayjs().subtract(1, 'day'));
  const displayDate = isMoreThanOneDay
    ? dayjs(date).format('DD-MM-YYYY - HH:mm')
    : getRelativeTime(date, lang);

  return displayDate;
};
