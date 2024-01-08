// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error without failing the test
    console.error('Uncaught exception:', err.message);
    return false;
  });
  