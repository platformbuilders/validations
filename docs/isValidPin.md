# `isValidPin`

Validates if the value has the required length.

## Arguments

- `pin: string`: value to be validated
- `pinLength: number`: length of PIN. Default is 4

## Usage

```jsx
import { isValidPin } from '@platformbuilders/validations';

isValidPin('12'); // return false

isValidPin('1234'); // return true

isValidPin('1', 3); // return false

isValidPin('123', 3); // return true

```
