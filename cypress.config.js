const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //Config. da resolução da exeução do teste em modo open:
    viewportWidth: 1920,
    viewportHeight: 1080,
    //Config. para qual spec enxergar para execuções:
    specPattern: "cypress/e2e/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
  },
});
