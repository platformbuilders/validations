import { isValidOnlyNumbers } from '../isValidOnlyNumbers';

describe('isValidOnlyNumbers', () => {
  const tests = [
    { param: '342', expectedResult: true },
    { param: '0', expectedResult: true },
    { param: '0000000000000', expectedResult: true },
    { param: '54142aw31423242', expectedResult: false },
    { param: 'a5', expectedResult: false },
    { param: '5a', expectedResult: false },
  ];
  tests.forEach(({ expectedResult, param }) => {
    test(`when param is ${param}, then return ${expectedResult}`, () => {
      // when
      const result = isValidOnlyNumbers(param);

      // then
      expect(result).toBe(expectedResult);
    });
  });
});
