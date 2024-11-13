export const isValidEnterpriseName = (enterpriseName?: string): boolean =>
  !!enterpriseName &&
  /^[A-Za-zÀ-ÖØ-öø-ÿ0-9']+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ0-9']+)+$/.test(
    enterpriseName.replace(/\s*$/, ''),
  ) &&
  /\D/.test(enterpriseName.replace(/\s/g, ''));