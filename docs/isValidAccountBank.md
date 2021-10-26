# `isValidAccountBank`

Validate if the account number has only numbers and one digit at the end

## Arguments

- `account: string`: value to be validated

## Usage

```jsx
import { isValidAccountBank } from '@platformbuilders/validations';

isValidAccountBank('1234-55'); // return false

isValidAccountBank('1234-5'); // return true
```
