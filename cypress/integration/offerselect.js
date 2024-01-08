describe('https://www.public.gr - Select Offers Test', () => {
  it('should navigate to the Offers section', () => {
    // Stub the window.confirm method to always return true
    cy.on('window:confirm', () => true);

    
    cy.visit('https://www.public.gr/');

    
    cy.get('#burger-icon > button', { timeout: 10000 }).should('exist').should('be.visible').click();

    
    cy.get('#drawer-menu > div.mdc-drawer__content.mdc-drawer__content--first > div.tile-grid.fade-out.ng-star-inserted > app-menu-tile:nth-child(1) > a', { timeout: 10000 })
      .should('be.visible')
      .click();

   
  });
});

