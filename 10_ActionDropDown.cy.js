/// <reference types="cypress" />

/**
 * Dropdown Interaction Notes:
 * ---------------------------
 * - **Single-select dropdowns** allow users to choose one option from a list.
 * - **Multi-select dropdowns** allow users to choose multiple options from a list.
 * 
 * Key Cypress Commands for Dropdown Interaction:
 * ---------------------------------------------
 * - **`cy.get('select')`**: Select the dropdown element.
 * - **`cy.select()`**: Select an option from the dropdown by its value or index.
 * - **`cy.should('have.value')`**: Assert the selected value of the dropdown.
 * 
 * **Single-select dropdown**:
 * - Select one option at a time.
 * - Example: Selecting an option from a dropdown based on its value or index.
 * 
 * **Multi-select dropdown**:
 * - Select multiple options.
 * - Example: Selecting multiple options at once.
 */

// describe('Dropdown Interactions in Cypress', () => {

//   beforeEach(() => {
//     // Visit the website before each test
//     cy.visit('https://bootswatch.com/default/');  // Visit the page
//   });

//   it('Select options from single-select and multi-select dropdowns', () => {

//     // Example 1: Single-select dropdown (Select one option at a time)
//     // --------------------------------------------------------------
//     // Select the dropdown using its label text
//     cy.get('#exampleSelect1').select('4').should('have.value', '4');

//     // cy.contains('label', 'Example select')  // Find the label for the dropdown
//     //   .siblings('select')  // Get the associated <select> dropdown element
//     //   .should('be.visible')  // Ensure the dropdown is visible
//     //   .select('4')  // Select an option by value ('4')
//     //   .should('have.value', '4');  // Assert that the value is correctly selected
//     cy.wait(2000);
//     // Select another option by value
//     cy.contains('label', 'Example select')  // Find the label for the dropdown
//       .siblings('select')  // Get the associated <select> dropdown element
//       .select('2')  // Select option with value '2'
//       .should('have.value', '2');  // Assert that the selected value is '2'
//     cy.wait(2000);

//     // Select an option by index
//     cy.contains('label', 'Example select')  // Find the label for the dropdown
//       .siblings('select')  // Get the associated <select> dropdown element
//       .select(3)  // Select the option at index 2 (index is 0-based)
//       .should('have.value', '4');  // Assert that the selected value is '2'
//     cy.wait(2000);

//     // Example 2: Multi-select dropdown (Select multiple options)
//     // ---------------------------------------------------------
//     // Find and interact with a multi-select dropdown
//     cy.contains('label', 'Example multiple select')  // Find the label for the multi-select dropdown
//       .siblings('select')  // Get the associated <select> element
//       .should('be.visible')  // Ensure it's visible
//       .select(['2', '4'])  // Select multiple options with values '2' and '4'
//     cy.wait(2000);

//     // cy.contains('label', 'Example multiple select')  // Find the label for the multi-select dropdown
//     // .siblings('select')  // Get the associated <select> element
//     // .find('option[value="2"]')  // Find the option with value '2'
//     // .should('be.selected');  // Assert that it's selected

//     //   Select more options from the multi-select dropdown
//     cy.contains('label', 'Example multiple select')  // Find the label for the multi-select dropdown
//       .siblings('select')  // Get the associated <select> element
//       .select(['1', '3', '5'])  // Select options with values '1', '3', and '5'
//     // .should('have.value', '1,3,5');  // Assert that the selected values are '1', '3', and '5'
//     cy.wait(2000);





//   });

// });

describe('Select Programming Language from Dropdown', () => {
  it('should select a programming language from the dropdown', () => {
    // Visit the page containing the dropdown (Replace with your actual URL)
    cy.visit('https://ashokonmi3.github.io/Selenium.Pages/SEL_01_WebDriverDemoWebsite.html'); // Change to your actual URL

    // Select 'Java' from the dropdown using its value
    cy.get('#programming-languages').select('Java').should('have.value', 'Java');

    // Select 'C++' from the dropdown using its value
    cy.get('#programming-languages').select('C++').should('have.value', 'C++');

    // Select 'Python' from the dropdown using its value
    cy.get('#programming-languages').select('Python').should('have.value', 'Python');

    // Select 'JavaScript' from the dropdown using its value
    cy.get('#programming-languages').select('JavaScript').should('have.value', 'JavaScript');

    // Select the first option (index 0) - Java
    cy.get('#programming-languages').select(0).should('have.value', 'Java');

    // Select the second option (index 1) - C++
    cy.get('#programming-languages').select(1).should('have.value', 'C++');

    // Select the third option (index 2) - C#
    cy.get('#programming-languages').select(2).should('have.value', 'C#');

    // Select the fourth option (index 3) - JavaScript
    cy.get('#programming-languages').select(3).should('have.value', 'JavaScript');

    // Select the fifth option (index 4) - Python
    cy.get('#programming-languages').select(4).should('have.value', 'Python');
  });
});


// Interview Questions for Review:

/**
 * Interview Questions:
 * ---------------------
 * 1. **What is the difference between a single-select and a multi-select dropdown?**
 *    - **Answer**: A **single-select dropdown** allows the user to select only one option from a list at a time, while a **multi-select dropdown** allows the user to select multiple options simultaneously.
 * 
 * 2. **How do you select options from a single-select dropdown in Cypress?**
 *    - **Answer**: Use `cy.select()` to select an option from a dropdown. You can pass the option's value or index.
 * 
 * 3. **How do you select multiple options from a multi-select dropdown in Cypress?**
 *    - **Answer**: Use `cy.select()` and pass an array of option values to select multiple options.
 * 
 * 4. **What does `cy.should('have.value', 'value')` do in Cypress?**
 *    - **Answer**: `cy.should('have.value', 'value')` is used to assert that the dropdown's selected value is equal to the expected value.
 * 
 * 5. **Why is it important to use `.siblings('select')` in this example?**
 *    - **Answer**: The `<label>` element is associated with the `<select>` element, so we use `.siblings('select')` to find the `<select>` element that is next to the label, ensuring we're interacting with the correct dropdown.
 * 
 * Key Differences:
 * ----------------
 * Aspect      | `cy.select()` for dropdowns      | `cy.check()` for checkboxes
 * --------------------------------------------------------------
 * Purpose     | Select one or more options      | Check or uncheck checkboxes/radio buttons
 * Use Case    | Dropdown interaction            | Checkbox/radio button interaction
 * Effect      | Selects an option               | Marks or unmarks a checkbox/radio button
 * Idempotent  | Yes (does nothing if already selected) | Yes (does nothing if already checked)
 */
