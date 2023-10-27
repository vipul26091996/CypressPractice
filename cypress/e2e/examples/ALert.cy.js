/// <reference types='cypress'/>

describe('alert types',function()
{
    it('OK ALert',function()
    {
        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')

        cy.get('input[type=submit]').click()

        cy.on('window:alert',(str) =>                         // to confirm the alert message in alert box
        {
            expect(str).to.equal('Please enter a valid user name')
        })
    })


    it('Confirmation Alert',function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#HTML9 > div.widget-content > button').click()
        
        cy.on('window:confirm',(str)=>                        // to confirm the alert message in alert box
        {
            expect(str).to.equal('Press a button!')
        }
        )
    })
})

