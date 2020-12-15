import { currencyToNumber } from '@platformbuilders/helpers';

export const isValidCurrency = (currency: string): boolean =>
  !!currency && /^R\$[1-9]\d{0,2}(\.\d{3})*,\d{2}$/.test(currency);

export const isPositiveValue = (value: string): boolean =>
  !!value && currencyToNumber(value) > 0;
