describe('https://www.public.gr - Select iPhone Test', () => {
  it('should navigate to the iPhone product page', () => {
    // Stub the window.confirm method to always return true
    cy.on('window:confirm', () => true);

    
    cy.visit('https://www.public.gr/');

    
    cy.get('#burger-icon > button', { timeout: 10000 }).should('exist').should('be.visible').click();

    
    cy.get('#drawer-menu > div.mdc-drawer__content.mdc-drawer__content--first > div.tile-grid.fade-out.ng-star-inserted > app-menu-tile:nth-child(1) > a', { timeout: 10000 })
      .should('be.visible')
      .click();

    
    cy.get('#drawer-menu-more > div > div > div.col.col-12.col-md-9 > div > div:nth-child(1) > nav:nth-child(1) > app-mdc-link-button:nth-child(2) > a > span', { timeout: 10000 })
      .should('be.visible')
      .click();

    
    cy.get('#main-content > div > section.product--view.ng-star-inserted > div > div:nth-child(1) > app-product-tile-list > div > div.product-info > h3 > app-mdc-link-button > a > span', { timeout: 10000 })
      .should('be.visible')
      .click();

      cy.get('#main-content > div > section.product--view.ng-star-inserted > div > div:nth-child(2) > app-product-tile-list > div > div.product-info > h3 > app-mdc-link-button > a > span', { timeout: 10000 })
      .should('be.visible')
      .click();

    
  });
});
