/// <reference types="cypress" />

describe('CSS Selectors Example', () => {

  beforeEach(() => {
    // Visit the website
    cy.visit('https://bootswatch.com/default/');
  });

  it('Demonstrate CSS Selectors', () => {
    // Example 1: Select and highlight the first element by tag name (h1)
    cy.get('h1').first()  // Select the first <h1> element
      .scrollIntoView()  // Scroll into view if necessary
      .should('be.visible')  // Ensure the element is visible
      .then((element) => {
        // Highlight by adding a red border
        element.css('border', '2px solid red');
      });
    cy.wait(2000); // Wait for 2 seconds

    // Example 2: Select an element by class and highlight it
    cy.get('button.btn-outline-success')  // Success button (3rd row)
      .scrollIntoView()  // Scroll into view if necessary
      .should('be.visible')  // Ensure the element is visible
      .then((button) => {
        button.css('border', '2px solid red');  // Highlight with red border
      });
    cy.wait(2000);  // Wait for 2 seconds
    cy.get('button.btn-outline-success').click();  // Click the button

    // Example 3: Select an element by ID and click it
    cy.get('button#btnGroupDrop1')  // Button by ID, DROPDOWN next to Primary
      .scrollIntoView()  // Scroll into view if necessary
      .should('be.visible')  // Ensure the element is visible
      .then((button) => {
        button.css('border', '2px solid red');  // Highlight with red border
      });
    cy.wait(2000);  // Wait for 2 seconds
    cy.get('button#btnGroupDrop1').click();  // Click the button

    // Example 4: Select an input element with the 'readonly' attribute and highlight it
    cy.get('input[readonly]').first()  // Read-only input field
      .scrollIntoView()  // Scroll into view if necessary
      .should('be.visible')  // Ensure the element is visible
      .then((input) => {
        input.css('border', '2px solid red');  // Highlight with red border
      });
    cy.wait(2000);  // Wait for 2 seconds

    // Example 5: Select an input element by attribute value and highlight it
    cy.get("input[value='correct value']")  // Input with a specific value
      .scrollIntoView()  // Scroll into view if necessary
      .should('be.visible')  // Ensure the element is visible
      .then((input) => {
        input.css('border', '2px solid red');  // Highlight with red border
      });
    cy.wait(2000);  // Wait for 2 seconds
  });

});
