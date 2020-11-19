export const isValidDocument = (document: string): boolean =>
  /^[a-zA-Z0-9]{4,20}$/.test(document);
