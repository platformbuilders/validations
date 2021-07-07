/**
 * Validates if a given string has **strictly** alphabet letters.
 *
 * @param string string to be tested
 * @returns boolean
 */
export const isValidAlphabetLetters = (string?: string): boolean =>
  !!string && /^[A-Za-z]*$/.test(string);
