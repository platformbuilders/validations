import { isValidAccountBank } from '../isValidAccountBank';

describe('isValidAccountBank', () => {
  test('when has an character then return false', () => {
    // when
    const result = isValidAccountBank('1');

    // then
    expect(result).toBe(false);
  });

  test('when has more than one character then return true', () => {
    // when
    const result = isValidAccountBank('1234-5');

    // then
    expect(result).toBe(true);
  });

  test('when param is letters then return false', () => {
    // when
    const result = isValidAccountBank('ab');

    // then
    expect(result).toBe(false);
  });
});
