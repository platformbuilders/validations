export const isValidCep = (cep: string): boolean => {
  return /^[0-9]{2}[0-9]{3}-[0-9]{3}$/.test(cep);
};
