export const isValidPassword = (password?: string): boolean =>
  !!password && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password);

export const isValidSimplePassword = (password?: string): boolean =>
  !!password && password.length >= 6 && password.length <= 20;
