/// <reference types="cypress" />

describe('Browser Actions in Cypress', () => {

  it('Performs various browser actions', () => {
    // Open the website
    cy.visit('https://google.com'); // Initial page

    // Maximize the browser window
    cy.viewport(1920, 1080);

    // Resize the browser window
    cy.viewport(800, 600); // Set a custom window size

    // Read the page title
    cy.title().then((title) => {
      cy.log('Page Title:', title); // Print title in Cypress logs
      expect(title).to.include('Google'); // Validate the title contains "Google"
    });

    // Get page source code
    cy.document().then((doc) => {
      cy.log('Page Source:', doc.documentElement.outerHTML);
    });

    // Navigate back to the previous page (if applicable)
    cy.go('back'); // Use this for navigating back in browser history

    // Verify that the URL is back to the initial page
    // cy.url().should('eq', 'https://google.com/');
    cy.wait(5000);
    // Navigate forward to the next page (if applicable)
    cy.go('forward'); // Use this for navigating forward in browser history
    cy.wait(5000);

    // Verify the URL is still the same (after forward navigation)
    cy.url().should('include', 'google.com');
  });

  // Optionally, you could add a page refresh here
  // cy.reload(); // Uncomment this to refresh the page
});
