export const isValidOnlyNumbers = (code?: string): boolean =>
  !!code && /^[0-9]*$/.test(code);
