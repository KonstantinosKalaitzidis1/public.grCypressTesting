// cypress/integration/addToCart.js
import PublicPage from '../pages/publicPage';
const testData = require('../fixtures/testData.json');

describe('https://www.public.gr - Add iPhone to Cart Test', () => {
  it('should navigate to the iPhone product page and add it to the cart', () => {
    cy.on('window:confirm', () => true);

    PublicPage.visit();
    PublicPage.clickElement(testData.burgerIconSelector);
    PublicPage.clickElement(testData.menuTileSelector);
    PublicPage.clickElement(testData.categorySelector);
    PublicPage.clickElement(testData.productSelector);

    // Continue with other test steps
    cy.get(testData.addToCartButtonSelector)
      .should('be.visible')
      .click();
  });
});
