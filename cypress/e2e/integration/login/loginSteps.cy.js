import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página de login {string}', (url) => {
  cy.visit(url); // Visita a URL passada como parâmetro
});

When('ele preenche as credenciais válidas {string} e {string}', (username, password) => {
  cy.get('input[name=username]').type(username); // Nome de usuário
  cy.get('input[name=password]').type(password); // Senha
});

When('ele clica no botão de login', () => {
  cy.get('button[type=submit]').click(); // Botão de login
});

Then('ele deve ser redirecionado para a página de "Secure Area"', () => {
  cy.url().should('include', '/secure'); // Verifica se a URL inclui "/secure"
});

Then('deve ver uma mensagem de boas-vindas', () => {
  cy.contains('You logged into a secure area!').should('be.visible'); // Verifica a mensagem de boas-vindas
});
