# `isValidDocument`

Validates if the value is a valid document or a valid CPF/CNPJ.

## Arguments

- `document: string`: value to be validated

## Usage

```jsx
import { isValidDocument, isValidCpfCnpj } from '@platformbuilders/helpers';

isValidDocument('1234#567'); // return false

isValidDocument('89843361841'); // return true

isValidCpfCnpj('7046566402422'); // return false

isValidCpfCnpj('70465664024'); // return true
```
