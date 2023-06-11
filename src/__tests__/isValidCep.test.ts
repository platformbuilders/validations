import { isValidCep } from '../isValidCep';

describe('isValidCep', () => {
  test('when param is valid then return true', () => {
    // when
    const result = isValidCep('83307-450');

    // then
    expect(result).toBe(true);
  });

  test('when param only number is valid then return true', () => {
    // when
    const result = isValidCep('83307450');

    // then
    expect(result).toBe(false);
  });

  test('when param is empty invalid then return false', () => {
    // when
    const result = isValidCep('');

    // then
    expect(result).toBe(false);
  });
});
