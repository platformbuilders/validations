# `isValidInstagram`

Validates if the string has at least two valid non-numeric names

## Arguments

- `name: string`: value to be validated

## Usage

```jsx
import { isValidInstagram } from '@platformbuilders/validations';

isValidInstagram('instagram'); // return false
isValidInstagram('@me'); // return false

isValidInstagram('@platformbuilders.io'); // return true
```
