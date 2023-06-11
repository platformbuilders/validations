# `isValidSocialUsername`

Validates if the string has at least two valid non-numeric names

## Arguments

- `name: string`: value to be validated

## Usage

```jsx
import { isValidSocialUsername } from '@platformbuilders/validations';

isValidSocialUsername('instagram'); // return false
isValidSocialUsername('@me'); // return false
isValidSocialUsername('@me', 2); // return true
isValidSocialUsername('@me', 2, '#'); // return false
isValidSocialUsername('#me', 2, '#'); // return true

isValidSocialUsername('@platformbuilders.io'); // return true
```
