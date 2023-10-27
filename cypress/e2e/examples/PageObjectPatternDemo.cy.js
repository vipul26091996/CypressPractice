///<reference types='cypress'/>

import LoginPage from "../PageObject/LoginPage"

describe('My Test Suite',function()
{

    it('Valid Login Data',function()
    {
        const login=new LoginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillPassword('admin')
        login.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})