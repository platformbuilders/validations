# Bem-vindo ao `Validations` da Platform Builders

[![Status da Build][check-badge]][workflows]
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

<!-- TOC -->

- [Selecione o idioma / Select the language](#selecione-o-idioma--select-the-language)
  - [English](#english)
    - [What's the idea of this repository](#whats-the-idea-of-this-repository)
    - [How can I use the library?](#how-can-i-use-the-library)
    - [Validations](#validations)
  - [Português](#português)
    - [Qual é a ideia deste repositório](#qual-é-a-ideia-deste-repositório)
    - [Como posso usar a biblioteca?](#como-posso-usar-a-biblioteca)
    - [Validações](#validações)

<!-- /TOC -->

## Selecione o idioma / Select the language

- [English](#english)
- [Português](#português)

## English

Welcome to the Platform Builders `validations` package. Here you will find all the helpers that we use in our projects.

### What's the idea of this repository

Easily apply validations to forms, especially using [yup](https://github.com/jquense/yup).

### How can I use the library?

Just add the library to your project and import it!

1. Depend on it:

```bash
yarn add @platformbuilders/validations
```

2. Import example:

```javascript
import { isValidFullName } from '@platformbuilders/validations'
```

### Validations

| Name                                                         | Returns         | Arguments         |
| ------------------------------------------------------------ | --------------- | ----------------- |
| [`isValidAccountBank`](./docs/isValidAccountBank.md)         | truthy or falsy | (string)          |
| [`isValidAlphabetLetters`](./docs/isValidAlphabetLetters.md) | truthy or falsy | (string)          |
| [`isValidAlphanumeric`](./docs/isValidAlphanumeric.md)       | truthy or falsy | (string)          |
| [`isValidBirthDate`](./docs/isValidBirthDate.md)             | truthy or falsy | (string)          |
| [`isValidCep`](./docs/isValidCep.md)                         | truthy or falsy | (string)          |
| [`isValidCnpj`](./docs/isValidCnpj.md)                       | truthy or falsy | (string)          |
| [`isValidCpf`](./docs/isValidCpf.md)                         | truthy or falsy | (string)          |
| [`isValidCurrency`](./docs/isValidCurrency.md)               | truthy or falsy | (string)          |
| [`isValidDDD`](./docs/isValidDDD.md)                         | truthy or falsy | (string)          |
| [`isValidDocument`](./docs/isValidDocument.md)               | truthy or falsy | (string)          |
| [`isValidDocumentDate`](./docs/isValidDocumentDate.md)       | truthy or falsy | (string)          |
| [`isValidEmail`](./docs/isValidEmail.md)                     | truthy or falsy | (string)          |
| [`isValidFullName`](./docs/isValidFullName.md)               | truthy or falsy | (string)          |
| [`isValidOnlyNumbers`](./docs/isValidOnlyNumbers.md)         | truthy or falsy | (string)          |
| [`isValidPassword`](./docs/isValidPassword.md)               | truthy or falsy | (string)          |
| [`isValidPhone`](./docs/isValidPhone.md)                     | truthy or falsy | (string, number?) |
| [`isValidPin`](./docs/isValidPin.md)                         | truthy or falsy | (string, number?) |
| [`isValidPositiveValue`](./docs/isValidPositiveValue.md)     | truthy or falsy | (string)          |
| [`isValidSocialName`](./docs/isValidSocialName.md)           | truthy or falsy | (string)          |
| [`isValidNickName`](./docs/isValidNickName.md)               | truthy or falsy | (string)          |
| [`isValidSocialUsername`](./docs/isValidSocialUsername.md)   | truthy or falsy | (string)          |
| [`isValidEnterpriseName`](./docs/isValidEnterpriseName.md)   | truthy or falsy | (string)          |

## Português

Bem-vindo ao pacote de `validações` do Platform Builders. Aqui você encontrará todos os ajudantes que usamos em nossos projetos.

### Qual é a ideia deste repositório

Aplicar facilmente validações a formulários, especialmente usando [yup](https://github.com/jquense/yup).

### Como posso usar a biblioteca?

Basta adicionar a biblioteca ao seu projeto e importá-la!

1. Dependência:

```bash
yarn add @platformbuilders/validations
```

2. Exemplo de importação:

```javascript
import { isValidFullName } from '@platformbuilders/validations'
```

### Validações

| Nome                                                         | Retorna        | Argumentos         |
| ------------------------------------------------------------ | -------------- | ------------------ |
| [`isValidAccountBank`](./docs/isValidAccountBank.md)         | verdadeiro ou falso | (string)           |
| [`isValidAlphabetLetters`](./docs/isValidAlphabetLetters.md) | verdadeiro ou falso | (string)           |
| [`isValidAlphanumeric`](./docs/isValidAlphanumeric.md)       | verdadeiro ou falso | (string)           |
| [`isValidBirthDate`](./docs/isValidBirthDate.md)             | verdadeiro ou falso | (string)           |
| [`isValidCep`](./docs/isValidCep.md)                         | verdadeiro ou falso | (string)           |
| [`isValidCnpj`](./docs/isValidCnpj.md)                       | verdadeiro ou falso | (string)           |
| [`isValidCpf`](./docs/isValidCpf.md)                         | verdadeiro ou falso | (string)           |
| [`isValidCurrency`](./docs/isValidCurrency.md)               | verdadeiro ou falso | (string)           |
| [`isValidDDD`](./docs/isValidDDD.md)                         | verdadeiro ou falso | (string)           |
| [`isValidDocument`](./docs/isValidDocument.md)               | verdadeiro ou falso | (string)           |
| [`isValidDocumentDate`](./docs/isValidDocumentDate.md)       | verdadeiro ou falso | (string)           |
| [`isValidEmail`](./docs/isValidEmail.md)                     | verdadeiro ou falso | (string)           |
| [`isValidFullName`](./docs/isValidFullName.md)               | verdadeiro ou falso | (string)           |
| [`isValidOnlyNumbers`](./docs/isValidOnlyNumbers.md)         | verdadeiro ou falso | (string)           |
| [`isValidPassword`](./docs/isValidPassword.md)               | verdadeiro ou falso | (string)           |
| [`isValidPhone`](./docs/isValidPhone.md)                     | verdadeiro ou falso | (string, number?)  |
| [`isValidPin`](./docs/isValidPin.md)                         | verdadeiro ou falso | (string, number?)  |
| [`isValidPositiveValue`](./docs/isValidPositiveValue.md)     | verdadeiro ou falso | (string)           |
| [`isValidSocialName`](./docs/isValidSocialName.md)           | verdadeiro ou falso | (string)           |
| [`isValidNickName`](./docs/isValidNickName.md)               | verdadeiro ou falso | (string)           |
| [`isValidSocialUsername`](./docs/isValidSocialUsername.md)   | verdadeiro ou falso | (string)           |
| [`isValidEnterpriseName`](./docs/isValidEnterpriseName.md)   | verdadeiro ou falso | (string)           |