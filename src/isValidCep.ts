export const isValidCep = (cep: string | null | undefined): boolean =>
  !!cep && /^[0-9]{2}[0-9]{3}-[0-9]{3}$/.test(cep);
