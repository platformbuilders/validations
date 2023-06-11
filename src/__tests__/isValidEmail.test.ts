import { isValidEmail } from '../isValidEmail';

describe('isValidEmail', () => {
  test('when e-mail is valid then return true', () => {
    // when
    const result = isValidEmail('me@mail.com');

    // then
    expect(result).toBe(true);
  });

  test('when e-mail is invalid then return false', () => {
    // when
    const result = isValidEmail('me@me');

    // then
    expect(result).toBe(false);
  });
});
