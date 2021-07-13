import { isValidSocialNameV2 } from '../isValidSocialName';
import { isValidCep } from '../isValidCep';
import { isValidCurrency } from '../isValidCurrency';
import { isValidDDD } from '../isValidPhone';
import { isValidEmail } from '../isValidEmail';
import { isValidFullName } from '../isValidFullName';
import { isValidCpf } from '../isValidCpf';
import { isValidAccountBank } from '../isValidAccountBank';
import { isValidAlphanumeric } from '../isValidAlphanumeric';
import { isValidOnlyNumbers } from '../isValidOnlyNumbers';
import { isValidAlphabetLetters } from '../isValidAlphabetLetters';

jest.mock('../index', () => ({
  toOnlyNumbers: jest.fn((value) => value),
}));

describe('Helper: formValidators', () => {
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

  describe('isValidFullName', () => {
    test('when param is "Platform Builders" then return true', () => {
      // when
      const result = isValidFullName('Platform Builders');

      // then
      expect(result).toBe(true);
    });

    test('when param is one name then return false', () => {
      // when
      const result = isValidFullName('Builders');

      // then
      expect(result).toBe(false);
    });

    test('when param is empty string then return false', () => {
      // when
      const result = isValidFullName('');

      // then
      expect(result).toBe(false);
    });
  });

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

  describe('isValidDDD', () => {
    test('when param is 71 then return true', () => {
      // when
      const result = isValidDDD('71');

      // then
      expect(result).toBe(true);
    });

    test('when param is 071 then return false', () => {
      // when
      const result = isValidDDD('071');

      // then
      expect(result).toBe(false);
    });

    test('when param is letters then return false', () => {
      // when
      const result = isValidDDD('ab');

      // then
      expect(result).toBe(false);
    });

    test('when param is empty then return false', () => {
      // when
      const result = isValidDDD('');

      // then
      expect(result).toBe(false);
    });
  });

  describe('isValidAccountBank', () => {
    test('when has an character then return false', () => {
      // when
      const result = isValidAccountBank('1');

      // then
      expect(result).toBe(false);
    });

    test('when has more than one character then return true', () => {
      // when
      const result = isValidAccountBank('1234-5');

      // then
      expect(result).toBe(true);
    });

    test('when param is letters then return false', () => {
      // when
      const result = isValidAccountBank('ab');

      // then
      expect(result).toBe(false);
    });
  });

  describe('isValidAlphanumeric', () => {
    test('when has an special character, then return false', () => {
      // when
      const result = isValidAlphanumeric('Glauber@');

      // then
      expect(result).toBe(false);
    });

    test('when has only letters, the return true', () => {
      // when
      const result = isValidAlphanumeric('Glauber');

      // then
      expect(result).toBe(true);
    });

    test('when has only numbers, the return true', () => {
      // when
      const result = isValidAlphanumeric('12345');

      // then
      expect(result).toBe(true);
    });

    test('when has mixed letters and numbers, the return true', () => {
      // when
      const result = isValidAlphanumeric('Glauber2021');

      // then
      expect(result).toBe(true);
    });
  });

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

  describe('isValidSocialNameV2', () => {
    const tests = [
      { param: 'Claudia Ribas Nunes', expectedResult: true },
      { param: 'Estela Fofa', expectedResult: true },
      { param: 'Gab', expectedResult: true },
      { param: 'F@bi@no 22', expectedResult: false },
      { param: '   ', expectedResult: false },
      { param: 'Sté', expectedResult: false },
      { param: 'Jeferson Moraes 21', expectedResult: false },
    ];
    tests.forEach(({ expectedResult, param }) => {
      test(`when param is "${param}", then return ${expectedResult}`, () => {
        // when
        const result = isValidSocialNameV2(param);

        // then
        expect(result).toBe(expectedResult);
      });
    });
  });
});
