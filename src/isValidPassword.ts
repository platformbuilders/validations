export const isValidPassword = (password: string): boolean =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password);
