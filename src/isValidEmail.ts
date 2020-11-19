export const isValidEmail = (email: string): boolean =>
  !!email && /\S+@\S+\.\S+/.test(email);
