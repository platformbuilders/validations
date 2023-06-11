import { isValidSocialUsername } from '../isValidSocialUsername';

describe('isValidSocialUsername', () => {
  it('should return true when param is "@johndoe"', () => {
    // when
    const result = isValidSocialUsername('@johndoe');

    // then
    expect(result).toBe(true);
  });
  it('should return false when param is "@me"', () => {
    // when
    const result = isValidSocialUsername('@me');

    // then
    expect(result).toBe(false);
  });
  it('should return true when param is "@me" and length param is 2', () => {
    // when
    const result = isValidSocialUsername('@me', 2);

    // then
    expect(result).toBe(true);
  });
  it('should return true when param is "#me" and length param is 2 and symbol is "#"', () => {
    // when
    const result = isValidSocialUsername('#me', 2, '#');

    // then
    expect(result).toBe(true);
  });
  it('should return false when param is ""', () => {
    // when
    const result = isValidSocialUsername('');

    // then
    expect(result).toBe(false);
  });
});
