/**
 * Validates if string is a valid URL
 * it should contain http, https, ftp or www
 * * Empty not allowed
 * @param string
 * @returns boolean
 */
export const isValidURL = (value?: string): boolean =>
  value ? /(?:https?|ftp):\/\/|www\.[^\s]+/.test(value) : false;
