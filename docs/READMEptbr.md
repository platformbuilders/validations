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