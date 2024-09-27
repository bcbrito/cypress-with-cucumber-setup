export const formLogin = (username, password) => {
  cy.visit('/login'); // Acessa a página de login
  cy.get('input[name="username"]').type(username); // Preenche o campo de username
  cy.get('input[name="password"]').type(password); // Preenche o campo de password
  cy.get('button[type="submit"]').click(); // Clica no botão de submit
};