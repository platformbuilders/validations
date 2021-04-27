# `isValidPassword`

Validates if the string is valid password considering the size and mix of letters of characters and numbers. We have two types of validators.
`isValidPassword` which validates if the password length is between 8 and 20, and also verify if the value contains a mix of letters and numbers.
`isValidSimplePassword` which only validates if the password length is between 6 and 20.

## Arguments

- `password: string`: value to be validated

## Usage

```jsx
import { isValidPassword, isValidSimplePassword } from '@platformbuilders/helpers';

isValidPassword('glauber'); // return false

isValidPassword('Glauber2021'); // return true

isValidSimplePassword('glau'); // return false

isValidSimplePassword('glauber'); // return true
```
