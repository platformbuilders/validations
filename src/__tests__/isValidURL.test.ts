import { isValidURL } from '../isValidURL';

describe('isValidURL', () => {
  const tests = [
    { param: 'https://platformbuilders.io', expectedResult: true },
    { param: 'http://platformbuilders.io', expectedResult: true },
    { param: 'ftp://platformbuilders.io', expectedResult: true },
    { param: 'www.platformbuilders.io', expectedResult: true },
    { param: 'platformbuilders.io', expectedResult: false },
    { param: '   ', expectedResult: false },
    { param: '', expectedResult: false },
  ];
  tests.forEach(({ expectedResult, param }) => {
    test(`when param is "${param}", then return ${expectedResult}`, () => {
      // when
      const result = isValidURL(param);

      // then
      expect(result).toBe(expectedResult);
    });
  });
});
