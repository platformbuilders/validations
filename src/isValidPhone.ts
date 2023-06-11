import { toOnlyNumbers } from '@platformbuilders/helpers';

export const isValidPhone = (value?: string): boolean =>
  !!value &&
  toOnlyNumbers(value).substring(2, 3) === '9' &&
  toOnlyNumbers(value).length === 11;
