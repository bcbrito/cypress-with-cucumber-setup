
# Projeto de Teste E2E com Cypress e Cucumber

## Descrição

Este projeto utiliza Cypress com Cucumber para testes E2E. Ele é modularizado para suportar uma grande quantidade de testes organizados por módulos e páginas.

## Estrutura do Projeto

```
cypress/
  fixtures/               # Dados mockados para os testes
  integration/            # Arquivos .feature (Cucumber)
     modulo1/             # Cada módulo tem uma pasta
        login.feature     # Regras de negócio no formato BDD
        loginSteps.cy.js  # Implementações dos steps
  support/                # Arquivos de suporte e comandos customizados
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/bcbrito/cypress.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Como rodar os testes

### Para rodar todos os testes:

```bash
npm run cypress:web
```

Isso abrirá o Test Runner do Cypress para execução interativa.

### Para rodar em modo headless:

```bash
npm cypress:headless
```

Isso irá rodar os teste pelo terminal

## Como criar novos testes

1. Crie um novo arquivo `.feature` na pasta `cypress/integration/features`.
2. Adicione a implementação dos steps correspondentes na pasta `cypress/steps`.
3. Siga a estrutura modular para organização dos testes.