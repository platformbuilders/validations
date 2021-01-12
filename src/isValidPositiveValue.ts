import { currencyToNumber } from '@platformbuilders/helpers';

export const isValidPositiveValue = (value: string): boolean =>
  !!value && currencyToNumber(value) > 0;
