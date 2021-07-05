export const isValidSocialName = (socialName?: string): boolean =>
  !!socialName && socialName.length >= 2;
