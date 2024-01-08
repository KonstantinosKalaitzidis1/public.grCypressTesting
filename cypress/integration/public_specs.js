before(() => {
  cy.window().then((win) => {
    win.onbeforeunload = null;
  });
});

describe('https://www.public.gr - Handling Pop-ups and Clicking Buttons', () => {
  it('should handle confirmation pop-ups and click all buttons', () => {
    // Stub the window.confirm method to always return true
    cy.on('window:confirm', () => true);

    // Visit the Public website
    cy.visit('https://www.public.gr/');

    
    cy.get('#search').type('tele');

      //  Clicking buttons with force option
    cy.get('.mdc-icon-button.animate:visible').each(($button) => {
      cy.wrap($button).click({ force: true });
});

    });

    
  });


  