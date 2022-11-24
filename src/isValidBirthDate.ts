import moment from 'moment';

const SCREEN_DATE = 'DD/MM/YYYY';

export const isValidBirthDate = (date?: string): boolean => {
  const maxAge = 95;
  const minAge = 1;
  const minDate = moment().subtract(maxAge, 'years');
  const maxDate = moment().subtract(minAge, 'years');
  const insertedDate = moment(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};

export const isValidLegalAge = (date?: string): boolean => {
  const maxAge = 95;
  const minAge = 18;
  const minDate = moment().subtract(maxAge, 'years');
  const maxDate = moment().subtract(minAge, 'years');
  const insertedDate = moment(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};

export const isValidMinimumAge = (date?: string, minimumAge = 18): boolean => {
  const maxAge = 95;
  const minAge = minimumAge;
  const minDate = moment().subtract(maxAge, 'years');
  const maxDate = moment().subtract(minAge, 'years');
  const insertedDate = moment(date, SCREEN_DATE);
  return insertedDate.isBetween(minDate, maxDate);
};

export const isValidChildrenAge = (date?: string, minimumAge = 5): boolean => {
  const maxAge = 95;
  const minDate = moment().subtract(maxAge, 'years');
  const maxDate = moment().subtract(minimumAge, 'years');
  const insertedDate = moment(date, SCREEN_DATE, true);

  return insertedDate.isBetween(minDate, maxDate) && insertedDate.isValid();
};
