import { isValidFullName } from '../isValidFullName';

describe('isValidFullName', () => {
  test('when param is "Platform Builders" then return true', () => {
    // when
    const result = isValidFullName('Platform Builders');

    // then
    expect(result).toBe(true);
  });

  test('when param is one name then return false', () => {
    // when
    const result = isValidFullName('Builders');

    // then
    expect(result).toBe(false);
  });

  test('when param is empty string then return false', () => {
    // when
    const result = isValidFullName('');

    // then
    expect(result).toBe(false);
  });
});
