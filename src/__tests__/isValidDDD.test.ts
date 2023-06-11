import { isValidDDD } from '../isValidDDD';

describe('isValidDDD', () => {
  test('when param is 71 then return true', () => {
    // when
    const result = isValidDDD('71');

    // then
    expect(result).toBe(true);
  });

  test('when param is 071 then return false', () => {
    // when
    const result = isValidDDD('071');

    // then
    expect(result).toBe(false);
  });

  test('when param is letters then return false', () => {
    // when
    const result = isValidDDD('ab');

    // then
    expect(result).toBe(false);
  });

  test('when param is empty then return false', () => {
    // when
    const result = isValidDDD('');

    // then
    expect(result).toBe(false);
  });
});
