# `isValidCnpj`

Validates if the value is a valid CNPJ.

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidCnpj } from '@platformbuilders/helpers';

isValidCnpj('00.257.681/0001-50'); // return false

isValidCnpj('29.257.681/0001-50'); // return true
```
