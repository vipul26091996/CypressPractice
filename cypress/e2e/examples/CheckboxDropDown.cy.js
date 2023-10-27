/// <reference types='cypress'/>

describe('Checkbox and Dropdown',function()
{
    
    it('Checkbox',function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include','Register') // Verify URL should include 'Register'

        cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Travelling')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Travelling'])


    })

    it('dropdown',function()
    {
        cy.get('#skills').select('Android').should('have.value','Android') //select the id of dropdown and select android and check condition
    })

    it('multi select dropdown', function()
    {
        cy.get('#msdd').click()  //select  id of multiple select dropdown box
        cy.get('.ui-corner-all').contains('English').click()  //select the common class of dropdown options and click
        cy.get('.ui-corner-all').contains('Japanese').click()
        
    })

    it('searchable dropdown', function()
    {
        cy.get('[role=combobox]').click({force : true})  // forcefully click on dropdown
        cy.get('.select2-search_field').type('Ind')      
        cy.get('.select2-search_field').type('{enter}')  // work as an enter button
    })

    it('radio',function()
    {
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()
    })
})