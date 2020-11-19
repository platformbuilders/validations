import * as CPF from '@fnando/cpf';
import { toOnlyNumbers } from '@platformbuilders/helpers';

export const isValidCpf = (value: string): boolean =>
  CPF.isValid(toOnlyNumbers(value));
