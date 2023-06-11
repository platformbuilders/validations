import { isValidAlphanumeric } from '../isValidAlphanumeric';

describe('isValidAlphanumeric', () => {
  test('when has an special character, then return false', () => {
    // when
    const result = isValidAlphanumeric('Glauber@');

    // then
    expect(result).toBe(false);
  });

  test('when has only letters, the return true', () => {
    // when
    const result = isValidAlphanumeric('Glauber');

    // then
    expect(result).toBe(true);
  });

  test('when has only numbers, the return true', () => {
    // when
    const result = isValidAlphanumeric('12345');

    // then
    expect(result).toBe(true);
  });

  test('when has mixed letters and numbers, the return true', () => {
    // when
    const result = isValidAlphanumeric('Glauber2021');

    // then
    expect(result).toBe(true);
  });
});
