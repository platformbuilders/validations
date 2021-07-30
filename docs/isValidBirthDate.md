# `isValidBirthDate`

Validates if the birthdate (inputed as string) is valid.
We have two methods:
- `isValidBirthDate` which validates if the age is between 1 and 95 years old.
- `isValidLegalAge` which validates if the age, considering the legal age in Brazil, is between 18 and 95 years old.
- `isValidMinimumAge` which validates if the age is equal to the minimum age informed.

## Arguments

- `date: string`: date to be validated

## Format

- `DD/MM/YYYY`

## Usage

```jsx
import { isValidBirthDate, isValidLegalAge } from '@platformbuilders/helpers';

isValidBirthDate('16/06/2025'); // return false

isValidBirthDate('16/06/1994'); // return true

isValidLegalAge('16/06/2010'); // return false

isValidLegalAge('16/06/1994'); // return true

isValidMinimumAge('16/06/2020', 5); // return false

isValidMinimumAge('16/06/1994', 5); // return true

```
