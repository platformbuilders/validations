import DateManager from 'moment';

const SCREEN_DATE = 'DD/MM/YYYY';

export const isValidBirthDate = (date?: string): boolean => {
  const maxAge = 95;
  const minAge = 1;
  const minDate = DateManager().subtract(maxAge, 'years');
  const maxDate = DateManager().subtract(minAge, 'years');
  const insertedDate = DateManager(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};

export const isValidLegalAge = (date?: string): boolean => {
  const maxAge = 95;
  const minAge = 18;
  const minDate = DateManager().subtract(maxAge, 'years');
  const maxDate = DateManager().subtract(minAge, 'years');
  const insertedDate = DateManager(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};

export const isValidMinimumAge = (date?: string, minimumAge = 18): boolean => {
  const maxAge = 95;
  const minAge = minimumAge;
  const minDate = DateManager().subtract(maxAge, 'years');
  const maxDate = DateManager().subtract(minAge, 'years');
  const insertedDate = DateManager(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};
