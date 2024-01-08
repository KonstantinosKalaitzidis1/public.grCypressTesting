const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 100000,   
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners

      
    },
  },
  chromeWebSecurity: false, // Disable web security
});




