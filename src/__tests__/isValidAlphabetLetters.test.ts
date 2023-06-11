import { isValidAlphabetLetters } from '../isValidAlphabetLetters';

describe('isValidAlphabetLetters', () => {
  const tests = [
    {
      param:
        'ASawASsadawsdaawaDHBKWDJYbjwydBKWJYDbWJYdKJWYdgywgdhuwydgJWYgdKUYWdgkuJYgdouywgDOUWYdgLYUDGyujgwudyGWUdyGYU',
      expectedResult: true,
    },
    { param: 'Zasasa', expectedResult: true },
    { param: 'aASCASASCS', expectedResult: true },
    { param: 'AaAhHjajhakJ', expectedResult: true },
    { param: 'a', expectedResult: true },
    { param: '                a', expectedResult: false },
    { param: 'a         ', expectedResult: false },
    { param: 'AAA AAA', expectedResult: false },
    { param: 'cacwcxoopa ASca', expectedResult: false },
    { param: '@r3523asdaA', expectedResult: false },
    { param: 'A1', expectedResult: false },
    { param: '@A', expectedResult: false },
    { param: '    ', expectedResult: false },
    { param: 'Enter your test text here.', expectedResult: false },
  ];
  tests.forEach(({ expectedResult, param }) => {
    test(`when param is "${param}", then return ${expectedResult}`, () => {
      // when
      const result = isValidAlphabetLetters(param);

      // then
      expect(result).toBe(expectedResult);
    });
  });
});
