# Welcome to Platform Builders `Validations`

[![Build Status][check-badge]][workflows]
[![codecov][codecov]](https://codecov.io/gh/platformbuilders/validations)
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/validations.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/validations
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/validations/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/validations/actions
[check-badge]: https://github.com/platformbuilders/validations/workflows/check/badge.svg
[codecov]: https://codecov.io/gh/platformbuilders/validations/branch/master/graph/badge.svg

Welcome to the Platform Builder form `validations` package here you will find out all the helpers that we use on our projects

# Whats the idea of this repository

Easily apply validations to forms, specially using [yup](https://github.com/jquense/yup).

# How can i use the library?

Just add the library to your project and import it!

1. Depend on it:

```
yarn add @platformbuilders/validations
```

3. Import example:

```
import { isValidFullName } from '@platformbuilders/validations'

```

# Validations

| Name                                                         | Returns         | Arguments         |
| ------------------------------------------------------------ | --------------- | ----------------- |
| [`isValidAccountBank`](./docs/isValidAccountBank.md)         | truthy OR falsy | (string)          |
| [`isValidAlphabetLetters`](./docs/isValidAlphabetLetters.md) | truthy OR falsy | (string)          |
| [`isValidAlphanumeric`](./docs/isValidAlphanumeric.md)       | truthy OR falsy | (string)          |
| [`isValidBirthDate`](./docs/isValidBirthDate.md)             | truthy OR falsy | (string)          |
| [`isValidCep`](./docs/isValidCep.md)                         | truthy OR falsy | (string)          |
| [`isValidCnpj`](./docs/isValidCnpj.md)                       | truthy OR falsy | (string)          |
| [`isValidCpf`](./docs/isValidCpf.md)                         | truthy OR falsy | (string)          |
| [`isValidCurrency`](./docs/isValidCurrency.md)               | truthy OR falsy | (string)          |
| [`isValidDDD`](./docs/isValidDDD.md)                         | truthy OR falsy | (string)          |
| [`isValidDocument`](./docs/isValidDocument.md)               | truthy OR falsy | (string)          |
| [`isValidDocumentDate`](./docs/isValidDocumentDate.md)       | truthy OR falsy | (string)          |
| [`isValidEmail`](./docs/isValidEmail.md)                     | truthy OR falsy | (string)          |
| [`isValidFullName`](./docs/isValidFullName.md)               | truthy OR falsy | (string)          |
| [`isValidOnlyNumbers`](./docs/isValidOnlyNumbers.md)         | truthy OR falsy | (string)          |
| [`isValidPassword`](./docs/isValidPassword.md)               | truthy OR falsy | (string)          |
| [`isValidPhone`](./docs/isValidPhone.md)                     | truthy OR falsy | (string, number?) |
| [`isValidPin`](./docs/isValidPin.md)                         | truthy OR falsy | (string, number?) |
| [`isValidPositiveValue`](./docs/isValidPositiveValue.md)     | truthy OR falsy | (string)          |
| [`isValidSocialName`](./docs/isValidSocialName.md)           | truthy OR falsy | (string)          |
| [`isValidNickName`](./docs/isValidNickName.md)               | truthy OR falsy | (string)          |
| [`isValidInstagram`](./docs/isValidInstagram.md)             | truthy OR falsy | (string)          |
