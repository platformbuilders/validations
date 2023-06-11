import { isValidCpf } from '../isValidCpf';

jest.mock('../index', () => ({
  toOnlyNumbers: jest.fn((value) => value),
}));

describe('isValidCpf', () => {
  test('when param valid and only numbers then return true', () => {
    // when
    const result = isValidCpf('15316268580');

    // then
    expect(result).toBe(true);
  });

  test('when param valid with special chars then return true', () => {
    // when
    const result = isValidCpf('288.849.719-00');

    // then
    expect(result).toBe(true);
  });

  test('when param invalid then return true', () => {
    // when
    const result = isValidCpf('12345678901');

    // then
    expect(result).toBe(false);
  });

  test('when param invalid then return true', () => {
    // when
    const result = isValidCpf('');

    // then
    expect(result).toBe(false);
  });
});
