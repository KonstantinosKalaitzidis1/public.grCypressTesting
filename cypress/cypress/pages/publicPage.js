// pages/publicPage.js
class PublicPage {
    static visit() {
      cy.visit('https://www.public.gr/');
    }
  
    static clickElement(selector) {
      cy.get(selector, { timeout: 100000 })
        .should('exist')
        .should('be.visible')
        .click();
    }
  }
  
  export default PublicPage;
  