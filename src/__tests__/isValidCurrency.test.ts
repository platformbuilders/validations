import { isValidCurrency } from '../isValidCurrency';

describe('isValidCurrency', () => {
  test('when param is "R$1,00 "then return true', () => {
    // when
    const result = isValidCurrency('R$1,00');

    // then
    expect(result).toBe(true);
  });

  test('when param is "R$10,00" then return true', () => {
    // when
    const result = isValidCurrency('R$10,00');

    // then
    expect(result).toBe(true);
  });

  test('when param is "R$1.000,00" then return true', () => {
    // when
    const result = isValidCurrency('R$1.000,00');

    // then
    expect(result).toBe(true);
  });

  test('when param is "R$ 1,00" then return false', () => {
    // when
    const result = isValidCurrency('R$ 1,00');

    // then
    expect(result).toBe(false);
  });

  test('when param is "10" then return false', () => {
    // when
    const result = isValidCurrency('10');

    // then
    expect(result).toBe(false);
  });

  test('when param is "10,00" then return false', () => {
    // when
    const result = isValidCurrency('10,00');

    // then
    expect(result).toBe(false);
  });

  test('when param is empty then return false', () => {
    // when
    const result = isValidCurrency('');

    // then
    expect(result).toBe(false);
  });
});
