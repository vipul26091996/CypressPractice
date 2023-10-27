/// <reference types='cypress'/>


// fail because of security issue on gmail

describe('Verify the gmail functionality',function()
{
    it('Verify login',function()
    {
        cy.visit('https://accounts.google.com/')
        // cy.title().should('eq','Sign in - Google Accounts')
        cy.url().should('include','signin')
        cy.get('input[type="email"]').should('be.visible').should('be.enabled').type('vipul.kumar@fleekitsolutions.com')
        cy.get('#identifierNext > div > button > span').click()
        cy.get('#password').type('Vipul@123')
        cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
        cy.get('a[aria-label="Google apps"]').click()
        cy.get('#yDmH0d > c-wiz > div > div > c-wiz > div > div > ul.LVal7b.u4RcUd > li:nth-child(2) > a').invoke('removeAttr','target').click()
        cy.get('.')
        cy.get('.T-Jo J-J5-Ji T-Jo-auq').should('be.visible').should('not.be.checked')
        cy.get('#:f2').click()
        cy.get('[aria-label="Delete"]').click()

    })
})