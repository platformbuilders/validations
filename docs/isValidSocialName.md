# `isValidSocialName`

Validates if the value is a valid social with min length of 2.

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidSocialName } from '@platformbuilders/validations';

isValidSocialName('Glauber'); // return false

isValidSocialName('G'); // return true
```
