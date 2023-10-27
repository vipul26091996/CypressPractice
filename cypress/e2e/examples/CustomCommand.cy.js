///<reference types='cypress'/>

describe('CustomCOmmand',function()
{
    it('LoginTest',function()
    {
        //valid data
        cy.login('admin@yourstore.com','admin') // call login method from commands.js file
        cy.title().should('be.equal','Dashboard / nopCommerce administration')


        //invalid data
        cy.login('admin@yourstore.com','admin123') // call login method from commands.js file
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

    it('Add Customer',function()
    {
        cy.login('admin@yourstore.com','admin') // call login method from commands.js file
        cy.log('Adding Customer')
    })
})
