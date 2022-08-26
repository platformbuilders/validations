# `isValidPhone`

Validates if the string is valid DDD or cellphone considering the Brazilian format.
`isValidPhone` which validates if the value has length of 11 numbers.
`isValidDDD` which only validates if the value has only numbers and the exact length of 2.

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidPhone, isValidDDD } from '@platformbuilders/validations';

isValidPhone('91205220'); // return false

isValidPhone('912052200'); // return true

isValidDDD('1'); // return false

isValidDDD('11'); // return true
```
