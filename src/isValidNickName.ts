/**
 * @description validate nickName
 * @param {string} nickName
 * @returns {boolean}
 * @example
 * isValidNickName('Platform Builders') // false
 * isValidNickName('Builders') // true
 * isValidNickName('') // false
 * isValidNickName('  ') // false
 */

export const isValidNickName = (nickName: string): boolean => {
  const regexPattern = /^[\p{L}\p{N}]+$/u;
  return regexPattern.test(nickName);
};
