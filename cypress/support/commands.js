// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { formLogin } from '../e2e/common/login.js';

// Cria um comando Cypress para realizar login
Cypress.Commands.add('login', (username, password) => {
  formLogin(username, password);
});