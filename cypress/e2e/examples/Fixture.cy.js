/// <reference types='cypress'/>

describe('My Test Suite',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data) //get the data from example file and put in data variable
        {
            this.Data=data  
        })
    })

    it('Fixture demo TEst',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=email]').type(this.data.username) //get username from 'this.data'
        cy.get('inout[name=password]').type(this.data.password) //get password from 'this.data'
        cy.get('input[type=submit]').click()
    })

})