# `isValidCurrency`

Validates if the value is a valid brazilian currency.

## Arguments

- `currency: string`: value to be validated

## Usage

```jsx
import { isValidCurrency } from '@platformbuilders/validations';

isValidCurrency('10.00'); // return false

isValidCurrency('R$10,00'); // return true
```
