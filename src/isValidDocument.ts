export const isValidDocument = (document: string): boolean =>
  !!document && /^[a-zA-Z0-9]{4,20}$/.test(document);
