/// <reference types = 'cypress'/>


describe('Verify the QMR Generation',function(){
    it('Generate the QMR',function(){

        cy.visit("https://p3-staging.plantools.com/login.aspx");
        cy.get('#uiUserName').type('vipul.kumar@dadjexperts.com')
        cy.get('#uiPassword').type('V!pulgola66')
        cy.get('input[type="submit"]').click()
        cy.get('#search-plan-rw > .fa').click()
        cy.get('#searchBox').type('147091')
        cy.get('#plansearch-btn').click()
        cy.get('#_ctl0_MasterContent_plansList__ctl2_linkPlansListPlanId').click()
        cy.get('#_ctl0_MasterContent_qmrUpdateLink').click()
        cy.get('#_ctl0_MasterContent_periodDropDown').select('202112').should('have.value','202112')
        cy.get('#_ctl0_MasterContent_updateQMRButton').click()
        //cy.clock()
        cy.get('#_ctl0_MasterContent_reportsGrid__ctl2_downloadReportHyperLink',{timeout:10000}).should('be.visible')
        cy.clock()

    })
})