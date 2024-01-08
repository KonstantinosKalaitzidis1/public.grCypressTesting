describe('https://www.public.gr - Choose Category Test', () => {
  it('should click the burger icon', () => {
    // Stub the window.confirm method to always return true
    cy.on('window:confirm', () => true);

    
    cy.visit('https://www.public.gr/');



    
    cy.get('#burger-icon > button > span')
      .should('be.visible')
      .click();

   
  });
});
