# `isValidInstagramUserName`

Validates if the string has at least two valid non-numeric names

## Arguments

- `name: string`: value to be validated

## Usage

```jsx
import { isValidInstagramUserName } from '@platformbuilders/validations';

isValidInstagramUserName('instagram'); // return false
isValidInstagramUserName('@me'); // return false

isValidInstagramUserName('@platformbuilders.io'); // return true
```
