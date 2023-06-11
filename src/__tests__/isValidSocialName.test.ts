import { isValidSocialName } from '../isValidSocialName';

describe('isValidSocialName', () => {
  const tests = [
    { param: 'Claudia Ribas Nunes', expectedResult: true },
    { param: 'Estela Fofa', expectedResult: true },
    { param: 'Gab', expectedResult: true },
    { param: 'F@bi@no 22', expectedResult: false },
    { param: '   ', expectedResult: false },
    { param: 'Sté', expectedResult: false },
    { param: 'Jeferson Moraes 21', expectedResult: false },
    { param: '', expectedResult: false },
  ];
  tests.forEach(({ expectedResult, param }) => {
    test(`when param is "${param}", then return ${expectedResult}`, () => {
      // when
      const result = isValidSocialName(param);

      // then
      expect(result).toBe(expectedResult);
    });
  });
});
