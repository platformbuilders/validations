export const isValidOnlyNumbers = (code: string): boolean =>
  /^[0-9]*$/.test(code);
