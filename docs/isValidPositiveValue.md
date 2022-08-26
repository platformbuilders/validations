# `isValidPositiveValue`

Validates if the value is positive

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidPositiveValue } from '@platformbuilders/validations';

isValidPositiveValue('-50'); // return false

isValidPositiveValue('50'); // return true
```
