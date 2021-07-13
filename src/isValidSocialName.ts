export const isValidSocialName = (socialName?: string): boolean =>
  !!socialName && socialName.length >= 2;

/**
 * Validates a social name and the criteria to approve a social is:
 * * Must have only letters
 * * N names can be written
 * * Empty not allowed
 * @param socialName
 * @returns boolean
 */
export const isValidSocialNameV2 = (socialName?: string): boolean =>
  socialName ? /^[a-zA-Z][a-zA-Z\s]+$/.test(socialName) : false;
