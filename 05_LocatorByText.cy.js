/// <reference types="cypress" />

describe('Text Locator Test Suite', () => {

  beforeEach(() => {
    // Visit the page
    cy.visit('https://bootswatch.com/default/');
  });

  it('Test Text Locators and Interaction', () => {
    // Step 1: Locate and highlight the text "Middle"
    cy.contains('button', 'Middle')  // Find the button with text 'Middle'
      // .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })  // Scroll the button into the center of the view
      .should('be.visible')  // Assert that the button is visible
      .then((button) => {
        // Highlight by adding a red border
        button.css('border', '2px solid red');
      })
      .click();  // Click the "Middle" button

    cy.wait(2000);  // Wait for 2 seconds to visualize the click

    // Step 2: Locate and highlight the text "Small button"
    cy.contains('button', 'Small button')  // Find the button with text 'Small button'
      // .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      .should('be.visible')
      .then((button) => {
        button.css('border', '2px solid red');  // Highlight with red border
      });

    cy.wait(2000);  // Wait for 2 seconds to visualize the highlighting

    // Step 3: Locate and highlight the text "with faded secondary text"
    cy.contains('with faded secondary text')  // Find the text "with faded secondary text"
      // .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      .should('be.visible')
      .then((text) => {
        text.css('border', '2px solid red');  // Highlight the text with red border
      });

    cy.wait(2000);  // Wait for 2 seconds to visualize the highlighting
  });

});
