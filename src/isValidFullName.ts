export const isValidFullName = (fullName: string): boolean => {
  return /^[A-Za-zÀ-ú]+(?:\s[A-Za-zÀ-ú]+)+$/.test(fullName.replace(/\s*$/, ''));
};
