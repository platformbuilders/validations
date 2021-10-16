export const isValidSocialName = (socialName: string): boolean =>
  !!socialName && socialName.length >= 2 && socialName.length <= 10;

export const isValidNickName = (nickName: string): boolean =>
  !!nickName && nickName.length >= 3 && nickName.length <= 10;
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
