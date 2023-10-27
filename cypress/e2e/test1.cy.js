/// <reference types ="cypress"/>

it('Google Search',()=>{
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Automation Step by Step')
    cy.contains('Google Search').click()
})