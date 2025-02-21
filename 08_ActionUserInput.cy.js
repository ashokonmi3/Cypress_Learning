/// <reference types="cypress" />

/**
 * User Input Action Notes:
 * -------------------------
 * In Cypress, you can interact with input fields in several ways:
 * - **`cy.get()`**: Selects an element based on a CSS selector (e.g., class, ID).
 * - **`cy.type()`**: Simulates typing text into an input field, just like a user would.
 * - **`cy.clear()`**: Clears the value of an input field.
 * - **`cy.should()`**: Used to assert that an element meets certain conditions, like being visible or having a specific value.
 *
 * Basic Actions:
 * --------------
 * - `cy.get('input')`: Selects an input field.
 * - `cy.type('value')`: Types the specified value into the input field.
 * - `cy.clear()`: Clears the input field.
 * - `cy.should('have.value', 'value')`: Asserts that the input field has the expected value.
 * 
 * Workflow:
 * ----------
 * 1. Visit a website.
 * 2. Select an input field using `cy.get()`.
 * 3. Perform actions like typing (`cy.type()`), clearing (`cy.clear()`), or asserting (`cy.should()`).
 * 4. Optionally, you can retrieve the value of an input field to check if it matches what was typed.
 */

describe('User Input Actions in Cypress', () => {

  beforeEach(() => {
    // Visit the website before each test to interact with the form
    cy.visit('https://bootswatch.com/default/');  // Open the web page
  });

  it('Interact with Input Fields', () => {
    /**
     * Example 1: Simulate typing into an input field and clearing it
     */
    // Select the input field by its placeholder text
    // cy.get('input[placeholder="Enter email"]')  // Find the input field with placeholder text "Enter email"
    //   .scrollIntoView()  // Ensure the input field is in view
    //   .should('be.visible')  // Check if the input field is visible
    //   .type('ashokonmi@gmail.com')  // Type email into the input field
    //   .should('have.value', 'ashokonmi@gmail.com')  // Assert that the input value is correct
    //   .clear()  // Clear the input field
    //   .should('have.value', '')  // Assert that the input field is empty
    cy.get('input[placeholder="Enter email"]')  // Find the input field with placeholder text "Enter email"
      .should('be.visible')  // Check if the input field is visible
      .wait(500)  // Add 500ms delay after visibility check
      .type('ashokonmi@gmail.com')  // Type email into the input field
      .wait(2000)  // Add 500ms delay after typing
      .should('have.value', 'ashokonmi@gmail.com')  // Assert that the input value is correct
      .wait(2000)  // Add 500ms delay after assertion
      .clear()  // Clear the input field
      .wait(2000)  // Add 500ms delay after clearing
      .should('have.value', '')  // Assert that the input field is empty
    /**
     * Example 2: Type into the input field with a slight delay between keystrokes
     */
    cy.get('input[placeholder="Enter email"]')  // Find the input field again
      .scrollIntoView()  // Ensure it's in view
      .should('be.visible')  // Check visibility
      .type('ashokonmi@gmail.com', { delay: 200 })  // Type with a delay of 200ms between keystrokes
      .should('have.value', 'ashokonmi@gmail.com')  // Assert that the value is correct
    cy.wait(1000);
    /**
     * Example 3: Retrieve and check the value from an input field by label
     */
    // Select the valid input field by label text
    cy.get('input[type="text"]#inputValid')  // Find the input by type and id
      .scrollIntoView()  // Ensure it's visible
      .should('be.visible')  // Check visibility
      .clear()
      .type('correctvalue')  // Type into the input field
      .should('have.value', 'correctvalue')  // Assert that the value is correct

  });

});

// Interview Questions for Review:

/**
 * Interview Questions:
 * 1. **What are the methods to interact with input fields in Cypress?**
 *    - **Answer**: The main methods for interacting with input fields in Cypress are `cy.get()` to select the input field, `cy.type()` to simulate typing into the field, `cy.clear()` to clear the field, and `cy.should()` to assert the field's value.
 *    
 * 2. **How does the `cy.type()` method work in Cypress?**
 *    - **Answer**: `cy.type()` simulates typing into an input field. You can use it to type a string into an input field, and it even allows you to set a delay between keystrokes using the `{ delay: <milliseconds> }` option.
 *    
 * 3. **What does the `cy.clear()` method do?**
 *    - **Answer**: `cy.clear()` clears the value inside an input field, leaving it empty.
 *    
 * 4. **How can you check the value of an input field in Cypress?**
 *    - **Answer**: You can check the value of an input field using `cy.should('have.value', '<value>')`. This asserts that the field contains the expected value.
 *    
 * 5. **Why do we use `cy.should('be.visible')` in Cypress?**
 *    - **Answer**: `cy.should('be.visible')` is used to ensure that the element is visible on the page before interacting with it. This prevents trying to interact with hidden or off-screen elements.
 *    
 * 6. **What does `.scrollIntoView()` do?**
 *    - **Answer**: The `.scrollIntoView()` command makes sure that the selected element is in the visible part of the viewport, especially useful if the element is off-screen.
 *    
 * 7. **How do you simulate user input actions in Cypress?**
 *    - **Answer**: You can simulate user input actions like typing or clearing input fields using the `cy.type()` and `cy.clear()` commands, respectively. For example, `cy.type('text')` types "text" into an input field, while `cy.clear()` removes the value in the input field.
 */
