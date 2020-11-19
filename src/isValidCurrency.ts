export const isValidCurrency = (value: string): boolean => {
  return /^R\$[1-9]\d{0,2}(\.\d{3})*,\d{2}$/.test(value);
};
