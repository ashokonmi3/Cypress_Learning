/// <reference types="cypress"/>

describe('Example first test suite', () => {

    it("First test case", () => {
        cy.visit("https://example.com");
        cy.wait(5000);
        cy.title().should('eq', 'Example Domain');
        cy.log("first test case execution completed");
    });

    it("Second test case", () => {
        cy.visit("https://example.com");
        cy.wait(5000);
        // cy.title().should('eq', 'Example Domain');
        cy.get('h1').should('have.text', 'Example Domain');
        cy.log("second test case execution completed");
    });


});