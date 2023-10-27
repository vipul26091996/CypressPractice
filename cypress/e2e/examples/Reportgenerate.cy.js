/// <reference types ="cypress"/>

describe('report generation functionality',function(){

    it('Verify the QMR',function(){

        cy.visit('https://p3-staging.plantools.com/login.aspx')
        cy.get('#uiUserName').type('vipul.kumar@dadjexperts.com')
        cy.get('#uiPassword').type('V!pulgol@66')
        cy.get('#btnLogin').click()
    })
})