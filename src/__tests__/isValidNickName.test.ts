import { isValidNickName } from '../isValidNickName';

describe('isValidNickName', () => {
  const tests = [
    { param: 'Builders', expectedResult: true },
    { param: 'Platform Builders', expectedResult: false },
    { param: 'Gab', expectedResult: true },
    { param: '   ', expectedResult: false },
    { param: 'Sté', expectedResult: true },
    { param: 'Jeferson Moraes 21', expectedResult: false },
  ];
  tests.forEach(({ expectedResult, param }) => {
    test(`when param is "${param}", then return ${expectedResult}`, () => {
      // when
      const result = isValidNickName(param);

      // then
      expect(result).toBe(expectedResult);
    });
  });
});
