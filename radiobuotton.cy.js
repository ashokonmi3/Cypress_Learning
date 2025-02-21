/// <reference types="cypress" />

describe('Radio Button and Checkbox Interactions', () => {

  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://bootswatch.com/default/');  // Open the page
  });

  it('Check and Uncheck Radio Buttons and Checkboxes', () => {

    // Example 1: Interact with Radio Buttons
    // -------------------------------------
    // Find and check the first radio button using its id or type
    cy.get('input[type="radio"]#optionsRadios2')  // Locate the radio button by its type and id
      // .scrollIntoView()  // Scroll the radio button into view if needed
      .should('not.be.checked')
      .should('be.visible')  // Ensure the radio button is visible
      .check()  // Check (select) the radio button
      .should('be.checked');  // Assert that the radio button is checked

    // Find and check another radio button using its label's `for` attribute (the associated input)
    cy.get('input[type="radio"]#optionsRadios1')  // Find the radio button with a different id
      // .scrollIntoView()  // Scroll to the element if needed
      .should('be.visible')  // Ensure it's visible
      .should('not.be.checked')
      .check()  // Check (select) the radio button
      .should('be.checked');  // Assert that it is checked

    // Example 2: Interact with Checkboxes
    // -----------------------------------
    // Find and check a checkbox by its label's associated input (using its id or class)
    cy.get('input[type="checkbox"]#flexCheckDefault')  // Find checkbox by its id
      // .scrollIntoView()  // Scroll to the checkbox if it's off-screen
      .should('be.visible')  // Ensure it's visible
      .should('not.be.checked')
      .check()  // Check (select) the checkbox
      .should('be.checked');  // Assert that the checkbox is checked

    // Uncheck the checkbox and verify its state
    cy.get('label[for="flexSwitchCheckDefault"]').click();

    cy.get('#flexSwitchCheckDefault').should('be.checked');

  });

});
