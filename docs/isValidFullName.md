# `isValidFullName`

Validate if string has at least two valid, non-numeric names.

## Arguments

- `name: string`: value to be validated

## Usage

```jsx
import { isValidFullName } from '@platformbuilders/helpers';

isValidFullName('Spada'); // return false

isValidFullName('Eduardo Spada'); // return true
```
