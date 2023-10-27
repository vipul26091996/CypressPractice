/// <reference types='cypress'/>

describe('Navigation',function()
{
    it('Navigation',function()
    {
        cy.visit('https://demo.nopCommerce.com/')
        cy.title().should('eq','nopCommerce demo store')  //HomePage

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register') // Registration Page

        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')  //HomePage

        cy.go("forward")
        cy.title().should('eq','nopCommerce demo store. Register') // Registration Page

        cy.go(-1) //back
        cy.title().should('eq','nopCommerce demo store')  //HomePage

        cy.go(1)  //forward
        cy.title().should('eq','nopCommerce demo store. Register') // Registration Page

        cy.reload()  //Refresh or Reload the page



    })
})