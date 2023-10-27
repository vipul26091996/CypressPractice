/// <reference types='cypress'/>

describe('Verify the User functionality',function()
{
    // it('Login',function()
    // {
    //     cy.visit("https://p3-staging.plantools.com/login.aspx");
    //     cy.get('#uiUserName').type('vipul.kumar@dadjexperts.com')
    //     cy.get('#uiPassword').type('D@DJpw022!$')
    //     cy.get('input[type="submit"]').click()

    // })
    

    it("Create New User",function()
    {
        cy.visit("https://p3-staging.plantools.com/login.aspx");
        cy.get('#uiUserName').type('vipul.kumar@dadjexperts.com')
        cy.get('#uiPassword').type('V!pulgola66')
        cy.get('input[type="submit"]').click()
        cy.get("#h-menu").click()
        cy.get("#_ctl0_tabUsersRp").click()
        cy.wait(1000)
        //cy.get('a[id="_ctl0_tabUsers"]').click()
        cy.get("#_ctl0_MasterContent_userList_addUser").click()
        cy.get("#_ctl0_MasterContent_firstNameTB").should('be.enabled').type("Testing")
        cy.get("#_ctl0_MasterContent_lastNameTB").should('be.enabled').type('QA')
        cy.get("#_ctl0_MasterContent_designationTextbox").should('be.enabled').type('QA')
        cy.get("#_ctl0_MasterContent_phone_numberTB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_emailTB").should('be.enabled').type('vipul@gmail.com')
        cy.get("#_ctl0_MasterContent_dbaTextbox").should('be.enabled')
        cy.get("#_ctl0_MasterContent_address_1TB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_address_2TB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_cityTB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_stateTB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_zip_codeTB").should('be.enabled')
        cy.get("#_ctl0_MasterContent_roleSelect").select("developer").should('have.value','developer')
        //cy.get('#_ctl0_MasterContent_ddlRoiCategories').should('have.value')
        // cy.get('#_ctl0_MasterContent_cbActive').should('be.checked').should('be.enabled')
        // cy.get('#_ctl0_MasterContent_cbAccessStaging').should('be.checked').should('be.enabled')
        // cy.get('#_ctl0_MasterContent_cbAccessEae').should('be.checked').should('be.enabled')
        // cy.get('#_ctl0_MasterContent_cbComplianceOfficer').should('be.checked').should('be.enabled')
        // cy.get('#_ctl0_MasterContent_cbPFGTDA').should('be.checked').should('be.enabled')
        cy.get("#_ctl0_MasterContent_uiEaeExpirationDate_dateField").should('be.enabled')
        cy.get("#_ctl0_MasterContent_uiAgiUserId").should('be.enabled')
        cy.get('#_ctl0_MasterContent_uiEaeExpirationDate_dateButton').should('be.enabled')
        cy.get("#_ctl0_MasterContent_submitUserInfo").click()
    })

})