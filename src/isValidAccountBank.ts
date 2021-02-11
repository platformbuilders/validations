export const isValidAccountBank = (account: string): boolean =>
  !!account.match(/\d-\d/g);
