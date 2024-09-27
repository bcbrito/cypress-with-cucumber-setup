import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import preprocessor from '@badeball/cypress-cucumber-preprocessor';
import createESBuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

/**
 * Configuração para o Cypress para executar os testes em modo headless
 * https://on.cypress.io/configuration
 * */
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createESBuildPlugin.default(config)], 
    })
  );

  return config;
}

/**
 * Configuração do Cypress
 * https://on.cypress.io/configuration
 */
export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature', //Local onde estão as regras de negócio
    baseUrl: 'http://the-internet.herokuapp.com', //URL base do projeto
    supportFile: 'cypress/support/e2e.js', //Arquivo de suporte
  },
});
