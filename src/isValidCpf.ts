import * as CPF from '@fnando/cpf';
import { toOnlyNumbers } from '@platformbuilders/helpers';

export const isValidCpf = (value: string | null | undefined): boolean =>
  !!value && CPF.isValid(toOnlyNumbers(value));
