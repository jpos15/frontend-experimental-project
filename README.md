# Frontend Experimental Project

Descrição

## Tipos de commit

| Tipo de commit | Descrição                | Release                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `feat`         | Uma nova feature         | `minor`                                                                                                                     |
| `fix`          | Correção de bugs         | `patch`                                                                                                                     |
| `docs`         | Documentação             | `patch`se o `escopo` for `readme`                                                                                           |
| `style`        | Formatação de código     | Alterações que não afetam o significado do código (espaços em branco, identação, ponto-e-virgula, etc)                      |
| `refactor`     | Refatoração de código    | Alteração no código que não corrige um bug, e nem adiciona uma feature                                                      |
| `perf`         | Melhorias de performance | Alteração no código que melhora a performance                                                                               |
| `build`        | Builds                   | Alterações que afetam o sistema de build, ou dependências externas (escopos exemplares: gulp, broccoli, yarn, npm, webpack) |
| `ci`           | Integração continua (CI) | Alteração aos arquivos de configuração e scripts do CI (escopos exemplares: travis, circleci, browserstack, saucelabs)      |
| `chore`        | Chores                   | Outras mudanças que não modificam os arquivos da aplicação ou dos testes                                                    |
| `revert`       | Reversão de commit       | Reversão a um commit anterior                                                                                               |

## Algumas Boas práticas

1. Adicionar Resolver apenas quando necessário
2. Remover qualquer biblioteca não utilizada do `package.json`
3. Utilizar TSlint

### Comandos


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
