// pages/cartPage.js
class CartPage {
    static addToCart(addToCartButtonSelector) {
      cy.get(addToCartButtonSelector, { timeout: 10000 })
        .should('be.visible')
        .click();
    }
  }
  
  export default CartPage;
  