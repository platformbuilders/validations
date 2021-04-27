export const isValidAlphanumeric = (
  value: string | null | undefined,
): boolean => !!value && /^[a-zA-Z0-9.]*$/.test(value);
