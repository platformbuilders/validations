import { DateManager } from './modules';

const SCREEN_DATE = 'DD/MM/YYYY';

export const isValidDocumentDate = (date?: string): boolean => {
  const maxAge = 95;
  const minDate = DateManager().subtract(maxAge, 'years');
  const maxDate = DateManager().add(1, 'day');
  const insertedDate = DateManager(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};
