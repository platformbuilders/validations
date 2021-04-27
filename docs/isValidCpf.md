# `isValidCpf`

Validates if the value is a valid CPF.

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidCpf } from '@platformbuilders/helpers';

isValidCpf('123.456.789-00'); // return false

isValidCpf('921.567.210-92'); // return true
```
