# `isValidURL`

Validates if a string is a valid URL.

## Arguments

- `value: string`: value to be validated

## Usage

```jsx
import { isValidURL } from '@platformbuilders/validations';

isValidURL('https://platformbuilders.io'); // return true
isValidURL('http://platformbuilders.io'); // return true
isValidURL('ftp://platformbuilders.io'); // return true
isValidURL('www.platformbuilders.io'); // return true
isValidURL('platformbuilders.io'); // return false
isValidURL('platformbuilders'); // return false
```
