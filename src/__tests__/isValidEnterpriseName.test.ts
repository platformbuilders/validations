import { isValidEnterpriseName } from '../isValidEnterpriseName';

describe('isValidEnterpriseName', () => {
  test('when param is "Spada24 LTDA" then return true', () => {
    // when
    const result = isValidEnterpriseName('Spada24 LTDA');

    // then
    expect(result).toBe(true);
  });

  test('when param is one name then return false', () => {
    // when
    const result = isValidEnterpriseName('Spada');

    // then
    expect(result).toBe(false);
  });

  test('when param is empty string then return false', () => {
    // when
    const result = isValidEnterpriseName('');

    // then
    expect(result).toBe(false);
  });
});
