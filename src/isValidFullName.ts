export const isValidFullName = (fullName: string): boolean =>
  !!fullName &&
  /^[A-Za-zÀ-ú]+(?:\s[A-Za-zÀ-ú]+)+$/.test(fullName.replace(/\s*$/, ''));
