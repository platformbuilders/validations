# `isValidCep`

Validates if the inputed CEP is valid, considering the Brazilian format.

## Arguments

- `cep: string`: value to be validated

## Usage

```jsx
import { isValidCep } from '@platformbuilders/helpers';

isValidCep('01424000'); // return false

isValidCep('01424-000'); // return true
```
