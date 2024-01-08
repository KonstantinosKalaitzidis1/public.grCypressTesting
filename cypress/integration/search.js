

describe('https://www.public.gr - Search Testing', () => {
  it('should perform search operations', () => {
    // Stub the window.confirm method to always return true
    cy.on('window:confirm', () => true);

    // Visit the Public website
    cy.visit('https://www.public.gr/');

    cy.get('#search').type('tele');

    cy.get('#search').clear();

    // Type "mobile" in the search field
    cy.get('#search').type('mobile');


  });
});
