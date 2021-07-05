export const isValidAccountBank = (account?: string): boolean =>
  !!account && !!account.match(/\d-\d/g);
